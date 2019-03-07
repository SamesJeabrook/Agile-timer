import React from 'react';
import {
  ModeSelectorContainer,
  ModeSelectorLabel,
  ModeSelectorOption,
  ModeSelector,
} from './modeSelector.styled';


const ModeSelectorComponent = (props) => {
  return(
    <ModeSelectorContainer>
      <ModeSelectorLabel>Level of Aggression: </ModeSelectorLabel>
      <ModeSelector onChange={props.onChange}>
        <ModeSelectorOption value={1}>1</ModeSelectorOption>
        <ModeSelectorOption value={2}>2</ModeSelectorOption>
        <ModeSelectorOption value={3}>3</ModeSelectorOption>
      </ModeSelector>
    </ModeSelectorContainer>
  )
}

export default ModeSelectorComponent;