import React from 'react';
import Blogs from '../../component/modal/Blog';
import './NewApp.css';
import { Link } from 'react-router-dom';



class NewApp extends React.Component {

  render() {
    return (
      <div className="newheader">
       <style jsx>{`
          .register-link {
            display: none;
          }

            `
          
          }
        </style>
            <div className="logo">{"<>"} <span className="title">webDevs Anonymous </span>
           
             </div>

      
        <ul className="menu">
       <li className="welcome-link">
          <Link to="/home">Home</Link>
        </li>
      
        <li className="login-link">
          <Link to="/login"
            >Login</Link>
        </li>
        
      </ul>
            
      <h1> Admin: {localStorage.getItem("username")} successfully logged out.</h1>
                   </div>
        
                  )
        }
      }

export default NewApp;