import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';

import App from '../App';
import createStore from '../store';
import theme from '../styles/theme';

describe('App component test', () => {
  it('renders correctly', () => {
    // For test React.Portal
    ReactDOM.createPortal = (node) => node;

    const store = createStore();
    const tree = renderer
      .create(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
