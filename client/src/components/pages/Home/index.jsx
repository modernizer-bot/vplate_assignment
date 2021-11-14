import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Home from './Home';

import { connectWithStreamServer } from '../../../features/tweet/slices';

export default function index() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connectWithStreamServer());
  }, []);
  return <Home />;
}
