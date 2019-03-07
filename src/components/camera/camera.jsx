import React, { Component, Fragment } from 'react';

import { CameraButton, CameraScreen } from './camera.styled';
import { Camera } from 'styled-icons/boxicons-regular/Camera';
import { CameraOff } from 'styled-icons/boxicons-regular/CameraOff';

class CameraComponent extends Component{
  
  constructor(){
    super();

    this.state = {
      viewCamera: false
    }

    this.cameraRef = React.createRef();
    this.toggleCamera = this.toggleCamera.bind(this);
  }

  toggleCamera(){
    const { viewCamera } = this.state;
    this.setState({
      viewCamera:!viewCamera
    }, () => {
      const { viewCamera } = this.state;
      if(viewCamera){
        const CameraScreen = this.cameraRef.current;
        CameraScreen.setAttribute('playsinline', '');
        CameraScreen.setAttribute('autoplay', '');
        CameraScreen.setAttribute('muted', '');

        const constraints = {
          audio: false,
          video: { facingMode: 'user'},
        }

        navigator.mediaDevices.getUserMedia(constraints).then(function success(stream){
          CameraScreen.srcObject = stream;
        })
      }
    })
  }

  render(){
    const { viewCamera } = this.state;

    return(
      <Fragment>
        {viewCamera ?
          <Fragment>
            <CameraScreen ref={this.cameraRef} />
            <CameraButton onClick={this.toggleCamera}>
              <CameraOff />
            </CameraButton>
          </Fragment>
        : 
          <CameraButton onClick={this.toggleCamera}>
            <Camera />
          </CameraButton>
        }
      </Fragment>
    )
  }
}

export default CameraComponent