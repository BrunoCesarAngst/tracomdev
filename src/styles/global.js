import { createGlobalStyle } from 'styled-components';

import colors from './colors';

// dando estilo ao toastify
// import 'react-toastify/dist/ReactToastify.css';

// import background from '../assets/images/background.svg';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
  }

  #root {
    margin: 0 auto;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: linear-gradient(-90deg, ${colors.blueA}, ${colors.greenB});
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
