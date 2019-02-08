import React from 'react';
import Header from './component/header/Header';
import Blogs from './component/modal/Blog';
import './App.css';



class App extends React.Component {

  // state = {username: null}
    
  // componentDidMount() {
  //   const username = localStorage.getItem("username")
  //   this.setState({username})
    

  // }

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
        <Header  clearUser = {this.clearUser} />

        <Blogs />

      </div>
    );
  }
}

export default App;