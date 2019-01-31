import React from 'react';
import { Button, Modal } from 'react-materialize';

class InsertModal extends React.Component {
     

    render() {
        return (
          
        <Modal
            header='Enter post details'
            fixedFooter
            trigger={<Button>ADD NEW BLOG</Button>}>

            <div className="insertPost">
                <form onSubmit={this.props.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="form-control"
                            name="author"
                            onChange={this.props.handleChange}
                            value={this.props.author}
                        />
                    </div>


                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Enter a Title..."
                            className="form-control"
                            name="title"
                            onChange={this.props.handleChange}
                            value={this.props.title}
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
                            value={this.props.body}>
                        </textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit"
                            className="btn btn-primary"
                            onClick={this.props.handleSubmit}
                        >Add New Post</button>
                    </div>
                </form>

            </div>
        </Modal>

    )
}
}

export default InsertModal;