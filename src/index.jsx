import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from './components/global.styed';
import Timer from './components/timer/timer';


class App extends Component {
  constructor(){
    super();
    this.state = {
      color: ''
    }
    this.updateBackground = this.updateBackground.bind(this);
  }

  updateBackground(color){
    this.setState({color: color})
  }

  render(){
    const {
      color
    } = this.state;
    return(
      <Fragment>
        <GlobalStyle color={color}/>
        <Timer updateColor={this.updateBackground} handleTimeChange={this.handleTimeChange}/>
      </Fragment>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));