/* eslint-disable no-unused-vars */
import { eventChannel } from '@redux-saga/core';
import {
  take,
  call,
  select,
  fork,
  cancel,
  put,
  delay,
  cancelled,
} from 'redux-saga/effects';
import { io } from 'socket.io-client';

import { TWEET_SERVER_URL } from '../../constant/tweet';
import { openModal } from '../modal/slices';
import { selectKeyword, selectTweetList } from './selectors';
import {
  connectWithStreamServer,
  openTweetStream,
  closeTweetStream,
  addTweet,
  changeKeyword,
} from './slices';

export const connect = () => {
  const socket = io(TWEET_SERVER_URL);
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

    socket.on('stream.close', () => {
      emit({ type: closeTweetStream.type });
    });

    return () => {
      socket.close();
    };
  });
}

function* watchNoResult(socket) {
  const prevTweets = yield select(selectTweetList);
  yield delay(15000);

  const nextTweets = yield select(selectTweetList);

  if (prevTweets.length === nextTweets.length) {
    yield put({ type: openModal.type, payload: 'No Result' });
    socket.emit('tweet.noResult');
  }
}

function* watchStream(socket) {
  const stream = yield call(subscribe, socket);
  const watchNoResultTask = yield fork(watchNoResult, socket);

  try {
    while (true) {
      const action = yield take(stream);
      yield put(action);
    }
  } finally {
    if (yield cancelled()) {
      yield cancel(watchNoResultTask);
    }
  }
}

function* flow() {
  yield take(connectWithStreamServer.type);
  const socket = yield call(() => connect());
  yield take(changeKeyword.type);

  while (true) {
    yield take(openTweetStream.type);
    const keyword = yield select(selectKeyword);
    socket.emit('stream.open', { keyword });
    const watchStreamTask = yield fork(watchStream, socket);

    yield take(closeTweetStream.type);
    yield cancel(watchStreamTask);
  }
}

export default function* tweetSaga() {
  yield fork(flow);
}
