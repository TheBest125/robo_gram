import React from 'react';
import { Redirect } from 'react-router-dom';
import Dropzone from 'react-dropzone';

class UploadAvatar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageFile: null,
      imageUrl: null
    };

    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateDragDropFile = this.updateDragDropFile.bind(this);
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result});
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  updateDragDropFile(e) {
    let file = e[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({ imageFile: file, imageUrl: fileReader.result});
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    let formData = new FormData();
    formData.append("user[avatar]", this.state.imageFile);
    this.props.updateAvatar(formData, this.props.user.id)
    .then( () => this.props.closeModal());
  }

  render() {
    return(
      <div className='upload-avatar' onClick={ (e) => e.stopPropagation() }>
        <div className='upload-avatar-content'>
          <p>Drag and Drop an Image</p>

          <div className='img-preview'>
            <Dropzone className="drag-drop-zone" onDrop={ this.updateDragDropFile }><img src={this.state.imageUrl}/></Dropzone>
          </div>

        </div>

        <div className='cancel-submit'>
          <button onClick={() => this.props.closeModal() }>Cancel</button>
          <button onClick={this.handleSubmit}>Upload</button>
        </div>
      </div>
    );
  }
}

export default UploadAvatar;
