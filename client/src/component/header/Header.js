import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import '../auth/Login';



function Header(props){
        console.log(localStorage.getItem("username"), "in header")
return (
   <div className="header">
            <div className="logo">{"<>"} <span className="title">webDevs Anonymous </span>
            <span className="username">{"logged in as : " + localStorage.getItem("username") }</span>
             {/* <div className="name"></div> */}
             </div>


        <ul className="menu">
       <li className="welcome-link">
          <Link to="/home">Home</Link>
        </li>
        {/* <li className="register-link">
          <Link to="/register">Signup</Link>
        </li> */}
        <li className="login-link">
          <Link to="/login">Login</Link>
        </li>
        <li className="logoutlink">
          <Link to="/logout"
          onClick= {localStorage.clear()}>Logout</Link>
        </li>
        
      </ul>
            
                   </div>)
        }
        


export default Header;