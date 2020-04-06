import { createGlobalStyle } from 'styled-components';

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

  // tirando o azulzinho do input e button
  *:focus {
    outline: 0;
  }
  // para ocupara altura máxima da tela
  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
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

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;
