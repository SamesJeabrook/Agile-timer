import Styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face{
    font-family: 'netto';
    src: url('./assets/netto.eot');
    src: url('./assets/netto.woff2') format('woff2'),
        url('./assets/netto.woff') format('woff'), 
        url('./assets/netto.ttf') format('trueType');
        
  }

  @keyframes fadeWarnings {
    0%   {opacity: 0}
    25%  {opacity: 1}
    50%  {opacity: 1}
    100% {opacity: 0}
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html, #root{
    height: 100%;
  }
  body{
    height: 100%;
    background: ${(props) => (props.color ? props.color : '#8443b9')};
    color: #fff;
    transition: 0.25s;
    font-family: 'netto';
  }
`;
