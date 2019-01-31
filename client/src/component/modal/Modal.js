import React from 'react';
import PropTypes from 'prop-types';
import './ModalStyles.css';


class Modal extends React.Component {
  

    render() {

      // nothing to be rendered if "show" prop is false 
      if(!this.props.show) {
        return null;
      }

   
  
      return (
        <div className="backdropStyle">
          <div className="modalStyle">
            {this.props.children}
  
            <div className="footer">
              <button 
                type="submit" 
                className="btn btn-primary Close"
                onClick={this.props.onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
  
  Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
  };
  
  export default Modal;