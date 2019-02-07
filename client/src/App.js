import React from 'react';
import Header from './component/header/Header';
import Blogs from './component/modal/Blog';
import './App.css';



class App extends React.Component {

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
        <Header />

         {/* <Routing /> */}
        
        <Blogs />

      </div>
    );
  }
}

export default App;