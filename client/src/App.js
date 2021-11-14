import React from 'react';

import Modal from './components/hocs/Modal.jsx';
import Home from './components/pages/Home';

export default function App() {
  return (
    <Modal>
      <Home />
    </Modal>
  );
}
