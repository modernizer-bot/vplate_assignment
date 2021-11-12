/* eslint-disable object-curly-newline */
import { eventChannel } from '@redux-saga/core';
import { take, call, select, fork, cancel, put } from 'redux-saga/effects';
import { io } from 'socket.io-client';
import { selectKeyword } from './selectors';
import {
  connectWithStreamServer,
  addTweet,
  initTweetStream,
  closeTweetStream,
  changeKeyword,
} from './slices';

const connect = () => {
  const socket = io('http://localhost:5000');
  return new Promise((resolve) => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
};

function subscribe(socket) {
  return eventChannel((emit) => {
    socket.on('tweet.new', ({ tweetInfo }) => {
      emit({ type: addTweet, payload: tweetInfo });
    });

    socket.on('tweet.done', () => {
      emit({ type: closeTweetStream.type });
    });

    return () => {
      socket.close();
    };
  });
}

function* readStream(socket) {
  const stream = yield call(subscribe, socket);

  while (true) {
    const action = yield take(stream);
    yield put(action);
  }
}

function* flow() {
  yield take(connectWithStreamServer.type);
  const socket = yield call(() => connect());
  yield take(changeKeyword.type);

  while (true) {
    yield take(initTweetStream.type);
    const keyword = yield select(selectKeyword);
    console.log('keyword', keyword);
    socket.emit('stream.init', { keyword });

    const task = yield fork(readStream, socket);

    yield take(closeTweetStream.type);
    yield cancel(task);
  }
}

export default function* tweetSaga() {
  yield fork(flow);
}
