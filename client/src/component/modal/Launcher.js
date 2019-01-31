import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
import './Launcher.css';


class LaunchModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
   
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
      
    });
    ;
  }

  render() {
 
    return (
      
      <div>
      <div className="launch-button">
        <button
          type="submit"
          className="launchbutton"
          onClick={this.toggleModal}
        >Add New Entry</button>
        </div>

        <Modal show={this.state.showModal}
          onClose={this.toggleModal}          
          >

          <div className="insertPost">
            <form onSubmit={this.props.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="form-control"
                  name="author"
                  onChange={this.props.handleChange}
                  value={this.state.author}
                />
              </div>


              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter a Title..."
                  className="form-control"
                  name="title"
                  onChange={this.props.handleChange}
                  value={this.state.title}
                />
              </div>
              <div className="form-group">
                <textarea
                  cols="5"
                  rows="10"
                  placeholder="Enter post here..."
                  className="form-control"
                  name="body"
                  onChange={this.props.handleChange}
                  value={this.state.body}>
                </textarea>
              </div>
              <div className="form-group">
                <button type="submit"
                  className="btn btn-primary"
                  onClick={this.handleSubmit}
                  >Add New Post</button>

              </div>
            </form>

          </div>

        </Modal>

     </div>
    );
  }
}

export default LaunchModal;


