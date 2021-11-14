import { configureStore } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './rootReducer.js';
import tweetSaga from '../features/tweet/sagas.js';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  // prettier-ignore
  middleware: (getDefaultMiddleware) => (getDefaultMiddleware({
    serializableCheck: false,
  }).concat(sagaMiddleware).concat(logger)
  ),
  devTools: process.env.REACT_APP_NODE_ENV !== 'production',
});

const createStateStore = () => {
  const createdStore = store;
  sagaMiddleware.run(tweetSaga);

  return createdStore;
};

export default createStateStore;
