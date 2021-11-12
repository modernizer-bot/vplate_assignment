import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';

import App from './App';
import createStore from './store';
import GlobalStyle from './styles/globalStyle';

dotenv.config();

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
