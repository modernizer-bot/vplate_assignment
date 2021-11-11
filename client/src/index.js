import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import './index.css';

import Home from './components/Home';

dotenv.config();
console.log('envTEST', process.env.REACT_APP_CONSUMER_KEY);

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root'),
);
