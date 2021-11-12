import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';

import './index.css';
import App from './App';
import createStore from './store';

dotenv.config();

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
