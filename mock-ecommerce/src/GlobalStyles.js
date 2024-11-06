// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('@fontsource/roboto');

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f3f3f3;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #007185;
  }

  button {
    background-color: #ffd814;
    color: #111;
    border: 1px solid #f0c14b;
    border-radius: 3px;
    cursor: pointer;
    padding: 8px 16px;
  }

  button:hover {
    background-color: #f7ca00;
  }
`;

export default GlobalStyles;
