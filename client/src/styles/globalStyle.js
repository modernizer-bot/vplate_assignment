import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: ease-in-out 0.3s
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  input:focus,
  button:focus {
    outline: none;
  }
`;

export default GlobalStyle;
