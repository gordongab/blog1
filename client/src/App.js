import React from 'react';
import * as $ from 'axios';
import Header from './component/header/Header';
import Blogs from './component/modal/Blog';
import './App.css';
import InsertModal from './component/modal/reactModal';
import { Button, Modal } from 'react-materialize';

import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';



class App extends React.Component {

  render() {
    return (
      <div className="App">
 
        <Header />
        
        <Blogs />

      </div>
    );
  }
}

export default App;