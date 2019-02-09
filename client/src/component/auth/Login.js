import React from 'react';
import Header from '../header/Header';
import './Login.css';
import { Button } from 'react-materialize';
import * as $ from 'axios';
import { Redirect } from 'react-router'



class Login extends React.Component {

 state = {
    username: '',
    password: '',
    loggedIn: false
  }

   handleChange = (event) => {
      event.preventDefault();
      this.setState({
        [event.target.name]: event.target.value
      }, function () { console.log(this.state) })
    }

    handleRedirect = () => {
     console.log('calling this redirect');
      if (this.state.loggedIn) {
        console.log('loggedIN is true');
        return <Redirect to='/admin' />
       
      }
    }

        
  handleLogin= (event) => {
   event.preventDefault();
    const user = {
        username: this.state.username,
        password: this.state.password
                 }

    $.post('/api/login').then((response)=>{
      console.log(response)
      if(response.data.success == true){
        // alert("Login Successful")
                debugger
        const result =  localStorage.getItem('username');
        console.log(result, "local storage")
        this.setState({
          loggedIn: true
        })
        localStorage.setItem("username", user.username)
        localStorage.setItem("loggedIn", true)
      }else {
        alert("Invalid User name or Password")
      }
    })

}

 render() { 
    return (
      <div className="login">
      {this.handleRedirect() }
      <style jsx>{`
          .logoutlink {
            display: none;
          }

          .login-link {
            display: none;
          }

            `
          
          }
        </style>

      <Header loggedIn={this.state.loggedIn} username={this.state.username} />
      
      
      <h1>dev Login! </h1>
        <div className="login-form">

        <form onSubmit={this.state.handleLogin}>
            <div className="form-group">
            <input 
               className="username-input" 
               placeholder="Enter Username"
               type="text"
               value={this.state.username}
               onChange={this.handleChange}
               name="username"

                />
               </div>
                              
               
               <div className="form-group">
            <input 
               className="password-input" 
               placeholder="Enter Password"
               type="password"
               value={this.state.password}
               onChange={this.handleChange}
               name="password"
                />
               </div>

              <div className="form-group">
                <button type="submit"
                  className="btn btn-primary"
                  onClick={this.handleLogin}
                  >Login</button>

              </div>
        </form>
    
      </div>
  </div>
    
      
    );
  }
}

export default Login;