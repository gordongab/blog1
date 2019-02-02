import React from 'react';
import Header from '../header/Header';
import './Login.css';
import { Button } from 'react-materialize';
import * as $ from 'axios';





class Login extends React.Component {

 state = {
    username: '',
    password: ''
  }

   handleChange = (event) => {
      event.preventDefault();
      this.setState({
        [event.target.name]: event.target.value
      }, function () { console.log(this.state) })
    }

        
  handleLogin= (event) => {
   event.preventDefault();
    const user = {
        username: this.state.username,
        password: this.state.password
                 }

    $.post('/api/login', user, function(response){
        console.log(response);
        if (response.success === true) {
            console.log("login success");
            alert('success!');
            // window.location.href = '/';
        } else {
            alert('Invalid credentials. Please register.')

        }
    })

}

 render() { 
    return (
      <div className="login">
      <Header />
      
      
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