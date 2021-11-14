import 'regenerator-runtime/runtime';
import ReactDOM from 'react-dom';

ReactDOM.createPortal = (node) => node;

global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  disconnect() {
    return null;
  }

  observe() {
    return null;
  }

  takeRecords() {
    return null;
  }

  unobserve() {
    return null;
  }
};
