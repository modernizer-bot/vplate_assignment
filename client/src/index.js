import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import dotenv from 'dotenv';

import App from './App.js';
import createStore from './store.js';
import theme from './styles/theme.js';
import GlobalStyle from './styles/globalStyle.js';

dotenv.config();

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
