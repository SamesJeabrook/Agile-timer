import React, { Component, Fragment } from 'react';

import {
  WarningContainer
} from './warnings.styled';

class WarningsComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      warningMsg: 'YAWN',
      warningPosX: '',
      warningPosY: '',
      warningSize: 1
    }
    this.warningRef = React.createRef();
    this.generateWarningMessage = this.generateWarningMessage.bind(this);
    this.generatePosition = this.generatePosition.bind(this);
  }

  componentDidMount(){
    this.generateWarningMessage();
    this.warningInterval = setInterval(() => {
      this.generateWarningMessage();
      
    }, 4000);
  }

  generateWarningMessage(){
    const { warningMsg } = this.state;
    const WarningMessages = [
      "Boring!",
      "Really.... still talking?",
      "YAWN!",
      "Come on now, doesn't someone else get a turn?",
      "You can stop now.",
      "That'll do pig... that'll do.",
      "ZZZZZZZZ zzzzzzzzz ......",
      "Wow.... still going!",
      "Impressive bit of overtime here.",
      "Someone call a taxi?",
      "Dropping anchor on boring bay.",
      "Okay this is really enough now.",
      "Seriously!!!",
      "Bla bla bla bla bla bla bla",
      "This is like counting a thousand sheep here",
      "This is beyond boring.",
      "*Snore noises*",
      "Any day now....",
      "Erm... are you on repeat?",
      "Launch Aborted... Boring happening",
      "How do we turn this one off?",
      "Oh wait... what's this... its boring.",
      "Urge to kill... rising...",
      "You know you're supposed to stop talking when it goes red, right??"
    ];
    const length = WarningMessages.length;
    const randomNumber = Math.floor(Math.random() * length);
    const maxFontSize = WarningMessages[randomNumber].length > 15 ? 3 : 6;
    const fontSize = Math.floor(Math.random() * maxFontSize) + 2;

    if(WarningMessages[randomNumber] === warningMsg){
      this.generateWarningMessage(WarningMessages[randomNumber].length);
    }else{
      this.setState({
        warningMsg: WarningMessages[randomNumber],
        warningSize: fontSize
      }, this.generatePosition(WarningMessages[randomNumber].length));
    }
  }

  generatePosition(textLength){

    const randomX = textLength > 15 ? 5 : Math.floor(Math.random() * 50);
    const randomY = textLength > 15 ? 5 : Math.floor(Math.random() * 30);

    this.setState({
      warningPosX: randomX,
      warningPosY: randomY
    });
  }

  render(){
    const { aggression, timerPlacement } = this.props;
    const { warningMsg, warningPosX, warningPosY, warningSize } = this.state;
    return(
      <Fragment>
        {aggression > 1 ?
          <WarningContainer
            offsetTop={warningPosY}
            offsetLeft={warningPosX}
            fontSize={warningSize}
            ref={this.warningRef}
          >
            {warningMsg}
          </WarningContainer>
        : null
        }
      </Fragment> 
    )
  }
}

export default WarningsComponent;
