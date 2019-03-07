import React, { Component } from 'react';

class AudioWarning extends Component {
  constructor(props){
    super(props)
    this.state = {
      audioFile: 1
    }
    this.audio = React.createRef();
    this.audioTimer;

    this.cycleAudioFile = this.cycleAudioFile.bind(this);
  }

  delayAudioPlay(){
    this.audioTimer = setTimeout(() => {
      this.audio.current.play()
    }, 6000);
  }

  cycleAudioFile(){
    const { audioFile } = this.state;
    const file = Math.floor(Math.random() * 13) + 1;
    if(file === audioFile){
      this.cycleAudioFile();
    }else{
      this.setState({
        audioFile: file
      }, () => {this.delayAudioPlay()});
    }

  }

  componentDidMount(){
    const audio = this.audio.current;
    audio.play();
  }

  componentWillUnmount(){
    this.audioTimer = null;
  }

  render(){
    const { audioFile } = this.state;
    const src = `assets/audio/${audioFile}.m4a`;

    return(
      <audio ref={this.audio} src={src} onEnded={this.cycleAudioFile}></audio>
    )
  }

}

export default AudioWarning;