import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Modal from './components/hocs/Modal';
import Home from './components/pages/Home';

import { connectWithStreamServer } from './features/tweet/slices';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connectWithStreamServer());
  }, []);

  return (
    <Modal>
      <Home />
    </Modal>
  );
}
