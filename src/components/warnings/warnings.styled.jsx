import styled from 'styled-components';

export const WarningContainer = styled.div`
  position: absolute;
  top: ${props => props.offsetTop}%;
  left: ${props => props.offsetLeft}%;
  font-size: ${props => props.fontSize}em;
  opacity: 0;
  animation-name: fadeWarnings;
  animation-duration: 4s;
  animation-iteration-count:infinite;
`;
