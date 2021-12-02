import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import pattern from "../../public/images/patternbg.png";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: url(${pattern}) no-repeat, linear-gradient(163deg, rgba(230,111,129,1) 0%, rgba(173,143,239,1) 100%);
    background-size: contain;
    
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;
