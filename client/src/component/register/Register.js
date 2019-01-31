import React from 'react';
import Header from '../header/Header';
import './Register.css';
import { Button } from 'react-materialize';
import * as $ from 'axios';


class Register extends React.Component {

  state = {
    username: '',
    password: '',
    passwordConf: ''
  }

  handleRegister= (event) => {
    event.preventDefault();
  
      $.post('/api/register', { username: this.state.username, password: this.state.password, passwordConf: this.state.password2 })
              
                 }




  
  render() { 
    return (
      <div className="registration-form">
      <Header />
      
      
      <h1>dev Signup! </h1>
        <div className="register-form">
        <form >
            <div className="form-group">
            <input 
               className="username-input" 
               placeholder="Enter Username"
               type="text"
               value={this.state.username}
               />
               </div>
               
               <div className="form-group">
            <input 
               className="email-input" 
               placeholder="Enter Email Address"
               type="text"
               
               />
               </div>
               <div className="form-group">
            <input 
               className="password-input" 
               placeholder="Enter Password"
               type="password"
               value={this.state.password}
               />
               </div>
               <div className="form-group">
            <input 
               className="password2-input" 
               placeholder="Confirm Password"
               type="password"
               value={this.state.password2}
               />
               </div>
               <div className="form-group">
                <button type="submit"
                  className="btn btn-primary"
                  // onClick={this.handleRegister}
                  >submit</button>

              </div>
        </form>
    
      </div>

    
    </div>

      
    );
  }
}

export default Register;