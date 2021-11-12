import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body {
    display: block;
    height: 100%;
    min-width: 400px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: ease-in-out 0.3s
  }
`;

export default GlobalStyle;
