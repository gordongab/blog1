import React from 'react';
import * as $ from 'axios';
import Header from '../header/Header';
import Blogs from '../modal/Blog';
import './admin.css';
// import { Link } from 'react-router-dom';

class BlogDelete extends React.Component { 
    render() {
      return (
          <div className="admin">
           <style jsx>{`
          .delete-button {
            display: none;
          }

            .logoutlink {
                display: none;
            }  `
          
          }
        </style>

        <Header />
        
        <Blogs />

                       
        </div>
      );
    }
  }
  
  export default BlogDelete;