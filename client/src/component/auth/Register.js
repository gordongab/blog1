import React from 'react';
import Header from '../header/Header';
import './Register.css';
import { Button } from 'react-materialize';
import * as $ from 'axios';
import { Link } from "react-router-dom";


class Register extends React.Component {
   
  state = {
    username: '',
    password: '',
    passwordConf: ''
  }

  handleChange = (event) => {
      event.preventDefault();
      this.setState({
        [event.target.name]: event.target.value
      }, function () { console.log(this.state) })
    }

  
  handleRegister= (event) => {
    console.log("here in handleRegister");
    event.preventDefault();   
      $.post('/api/register', {username: this.state.username, password: this.state.password, passwordConf: this.state.password2 })
      .then((result) => {
        // window.location.href = '/welcome';
      })
    }

     

  
  render() { 
    return (
      <div className="registration-form">
          <style jsx>{`
          .register-link {
            display: none;
          }

            `
                }
              </style>

      <Header clearUser = {this.clearUser} />
      
      
      <h1>Profile Details </h1>

      <p>User: {localStorage.getItem("username")}</p>
      <p>Role: Admin</p>

      <p><Link to="/admin">Click to return Home</Link> </p>
        {/* <div className="register-form">

        <form onSubmit={this.state.handleRegister}>
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
            <input 
               className="password2-input" 
               placeholder="Confirm Password"
               type="password"
               value={this.state.password2}
               onChange={this.handleChange}
               name="password2"
                />
               </div>

               <div className="form-group">
                <button type="submit"
                  className="btn btn-primary"
                  onClick={this.handleRegister}
                  >submit</button>

              </div>
        </form> */}
    
      </div>
 
    
      
    );
  }
}

export default Register;