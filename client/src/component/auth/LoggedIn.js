import React from 'react';
import * as $ from 'axios';
import Header from './component/header/Header';
import Blogs from './component/modal/Blog';
import './App.css';
import InsertModal from './component/modal/reactModal';
import { Button, Modal } from 'react-materialize';

import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';



class LoggedIn extends React.Component {


  logOut= (event) => {
        event.preventDefault();
        localStorage.clear();
        window.location.href = '/welcome'
                      }

  render() {
    return (
      <div className="App">
 
        <Header>
            <div className="logout-button">
            <button
            type="submit"
            className="logoutbutton"
            onClick={this.logOut}
          >Log Out</button>

          </div>
          
        </Header>
        
        <Blogs />

      </div>
    );
  }
}

export default LoggedIn;