import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { connectWithStreamServer } from '../../../features/tweet/slices';
import Home from './Home';

export default function index() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connectWithStreamServer());
  }, []);

  return <Home />;
}
