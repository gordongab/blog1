import React from 'react';
import Header from './component/header/Header';
import Blogs from './component/modal/Blog';
import './App.css';
import { HashRouter } from 'react-router-dom';



class App extends React.Component {


  clearUser = () => {
    return localStorage.removeItem("username")

  }

  render() {
    return (
      <div className="App">
        <style jsx>{`
          .login-link {
            display: none;
          }

            `
          
          }
        </style>
        <Header 
         clearUser = {this.clearUser} />

        <Blogs />

      </div>
    );
  }
}

export default App;