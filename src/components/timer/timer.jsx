import React, { Component, Fragment } from 'react';

import {
  TimeBlockContainer,
  TimeBlock,
  TimeOverBlock,
  TimeNegativeBox,
  TimeSetterInput,
  TotalTimeCounter,
} from './timer.styled';

import ModeSelector from '../modeSelector/modeSelector';
import Warnings from '../warnings/warnings';
import AudioWarning from '../audio/audio.jsx';

import { CreditBlock, CreditBlockLink } from '../creditBlock/creditBlock.styled';

import { convertSecondsToTime } from '../../utilities/utilities';

class Timer extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      minutes: 0,
      seconds: 45,
      origminutes: 0,
      origseconds: 45,
      timeOver: 0,
      totalTime: 0,
      displayTimeOver: false,
      aggression: 1
    };

    this.timeOverInterval;
    this.inputRef = React.createRef();
    this.timeBlockRef = React.createRef();

    this.colorFlash = this.colorFlash.bind(this);
    this.calculateTimeOver = this.calculateTimeOver.bind(this);
    this.inputFocused = this.inputFocused.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.setAgression = this.setAgression.bind(this);
  }

  calculateTotalTime(){
    let { totalTime } = this.state;
    this.totalTimeInterval = setInterval(() => {
      totalTime ++
      this.setState({
        totalTime
      });
    }, 1000)
  }

  calculateTime(){
    const start = Date.now();
    const {updateColor} = this.props;
    let { minutes, seconds } = this.state;
    let time = (parseInt(minutes) * 60) + parseInt(seconds);

    const duration = (minutes * 60) + seconds;

    this.timeInterval = setInterval(() => {
      let diff = duration - (((Date.now() - start) / 1000) | 0);
      
      minutes = (diff / 60) | 0;
      seconds = (diff % 60) | 0;

      time = (parseInt(minutes) * 60) + parseInt(seconds);

      if(time < 10 && time > 0 ) updateColor('#ffd375');
      if(time === 0){
        updateColor('#f95454');
        if(!this.timeOverInterval) {
          this.calculateTimeOver();
        }
      };
      
      this.setState({ 
        minutes,
        seconds
      });
    }, 1000);
  }

  calculateTimeOver(){
    this.timeOverInterval = setInterval(() => {
      let { timeOver } = this.state;
      timeOver++;
      this.setState({ timeOver });
    }, 1000);
  }
 
  colorFlash(){
    const { updateColor } = this.props;
    updateColor('#fff');
    setTimeout(() =>{
      updateColor('#8443b9')
    },200);
  }

  inputFocused(){
    clearInterval(this.timeInterval);
    clearInterval(this.totalTimeInterval);
  }

  handleTimeChange(e){
    if(parseInt(e.target.value) < 60 || !e.target.value){
      this.setState({
        [e.target.name] : !e.target.value ? 0 : parseInt(e.target.value),
        [`orig${e.target.name}`] : !e.target.value ? 0 : parseInt(e.target.value)
      });
    }
  }

  setAgression(e){
    this.setState({
      aggression: e.target.value
    })
  }

  componentDidMount(){
    const { updateColor } = this.props;
    const { totalTime } = this.state;
    document.addEventListener("keydown", (e) => {
      if(e.keyCode === 13 || e.keyCode === 32){
        const { origminutes, origseconds } = this.state;
        this.setState({ minutes: origminutes, seconds: origseconds });
        clearInterval(this.timeOverInterval);
        this.timeOverInterval = null;
        this.setState({ displayTimeOver: false, standUpFinsihed: false });
        this.colorFlash();
        clearInterval(this.timeInterval);
        this.calculateTime();
        this.inputRef.current.blur();
        if( totalTime === 0 ){
          this.calculateTotalTime();
        }
      }
      if(e.keyCode === 27){
        const { timeOver, totalTime } = this.state;
        clearInterval(this.timeInterval);
        clearInterval(this.timeOverInterval);
        clearInterval(this.totalTimeInterval);
        this.totalTimeInterval = null;
        const minutes = ~~(timeOver / 60);
        const seconds = timeOver - minutes * 60;
        this.setState({
          seconds,
          minutes,
          displayTimeOver: true,
          timeOver: 0,
          totalTime: 0,
          prevTotalTime: totalTime,
          standUpFinsihed: true
        });
        updateColor('#54baff');
      }
    })
  }

  componentWillUnmount(){
    clearInterval(this.timeInterval);
    clearInterval(this.timeOverInterval);
    clearInterval(this.totalTimeInterval);
    this.timeInterval = null;
    this.timeOverInterval = null;
    this.totalTimeInterval = null;
  }

  render(){
    const { seconds, minutes, displayTimeOver, aggression, totalTime, prevTotalTime, standUpFinsihed } = this.state;
    const { current } = this.timeBlockRef;
    const time = (minutes * 60) + seconds;
    const presTime = convertSecondsToTime(time);
    const presTotalTime = standUpFinsihed ? convertSecondsToTime(prevTotalTime) : convertSecondsToTime(totalTime);
    
    return(
      <Fragment>
        <ModeSelector onChange={this.setAgression}/>
        {aggression > 1 && time < 0 ? 
          <Warnings
            aggression={aggression}
            timerPlacement={current.getBoundingClientRect()}
          />
          : null}
        {aggression > 2 && time < 0 ?
          <AudioWarning /> : null
        }
        <TimeBlockContainer>
          {displayTimeOver ? <TimeOverBlock>{time === 0 ? `Your stand up did not run over `: `Your stand up ran over by`}</TimeOverBlock> : null}
          <TimeBlock ref={this.timeBlockRef}>
            <TimeSetterInput
              value={presTime.minutes}
              name="minutes"
              onFocus={this.inputFocused}
              onChange={this.handleTimeChange}
              ref={this.inputRef}
              />
            :
            <TimeSetterInput 
              value={presTime.seconds}
              name="seconds"
              onFocus={this.inputFocused}
              onChange={this.handleTimeChange}
              ref={this.inputRef}
              />
            {time < 0 ? <TimeNegativeBox>-</TimeNegativeBox> : null}
          </TimeBlock>
        </TimeBlockContainer>
        <TotalTimeCounter>{`Total Time: ${presTotalTime.minutes} : ${presTotalTime.seconds}`}</TotalTimeCounter>
        <CreditBlock>Created by <CreditBlockLink target="_BLANK" href="http://www.jamesseabrook.com/">James Seabrook</CreditBlockLink></CreditBlock>
      </Fragment>
    )
  }
}

export default Timer;
