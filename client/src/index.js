/* eslint-disable import/first */
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import dotenv from 'dotenv';

dotenv.config();

import App from './App';
import createStore from './store';
import theme from './styles/theme';
import GlobalStyle from './styles/globalStyle';

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
