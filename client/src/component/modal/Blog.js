import React from 'react';
import * as $ from 'axios';
import LaunchModal from './Launcher';
import './Blog.css';



class Blogs extends React.Component {

    state = {
      author: '',
      title: '',
      body: '',
      blogList: null
    }
  
    getPosts = () => {
      $.get('/api/posts')
        .then((result) => {
          this.setState({ blogList: result.data })
        });
    }
  
    handleChange = (event) => {
      event.preventDefault();
      this.setState({
        [event.target.name]: event.target.value
      }, function () { console.log(this.state) })
    }
  
    handleSubmit = () => {
      
      $.post('/api/posts', { author: this.state.author, title: this.state.title, content: this.state.body })
        .then((result) => {
          this.getPosts();
          this.handleReset();
          
          
     })
    }
  
    handleReset = () => {
      this.setState({
        author: '',
        title: '',
        body: ''
      });
    };
  
    handleDelete = (id) => {
      $.delete(`/api/posts/${id}`)
        .then((result) => {
          this.getPosts();
        })
    }
  
    componentDidMount() {
      this.getPosts();
    }
  
    addDate = () => { 
      return window.localStorage.setItem("date", date)
    
      }

    render() {
      return (
        <div className="Blogs">

            <LaunchModal handleChange={this.handleChange} 
                         handleSubmit={this.handleSubmit}
                                                   />
         
          <div className="blog-list">
            {
              this.state.blogList ?
                this.state.blogList.map(ele => {
                  return (<div>
                    <div className="insertedTitles">{ele.title} </div>
                    <div className="displayPic"> <span className="insertedAuthors">by {ele.author} on {new Date(parseInt(localStorage.getItem('time')))}</span></div>
                    <div className="insertedBlogs"> {ele.content} </div>
                   <div className="delete">
                    <button className="delete-button"
                            type="submit"
                            
                            onClick={this.handleDelete}>delete 
                    </button> 
                    </div> 
                    <hr></hr>
                  </div>)
                })
                :
                ""
            }
          </div>
          
                             
  
        </div>
      );
    }
  }
  
  export default Blogs;