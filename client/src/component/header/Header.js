import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import '../auth/Login';



function Header(props){
        console.log(localStorage.getItem("username"), "in header")
return (
   <div className="header">

   <style jsx>{`
          .register-link {
            display: none;
          }

            `
          
          }
        </style>

            <div className="logo">{"<>"} <span className="title">webDevs Anonymous </span>
            <span className="username">{"logged in as : " + localStorage.getItem("username") }</span>
          
             </div>

    
        <ul className="menu">
       <li className="welcome-link">
          <Link to="/home">Home</Link>
        </li>
        <li className="register-link">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="login-link">
          <Link to="/login">Login</Link>
        </li>
        <li className="logoutlink"
          onClick ={props.clearUser}>
          <Link to="/logout">Logout</Link>
        </li>
        
      </ul>
            
                   </div>)
        }
        


export default Header;