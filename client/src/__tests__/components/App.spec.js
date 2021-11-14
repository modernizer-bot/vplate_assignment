import React from 'react';
import * as redux from 'react-redux';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';

import App from '../../App.js';
import createStore from '../../store.js';
import theme from '../../styles/theme.js';

describe('App component test', () => {
  let component;
  const store = createStore();
  store.dispatch = jest.fn();

  beforeEach(() => {
    component = renderer.create(
      <redux.Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </redux.Provider>,
    );
  });

  it('test renders correctly', () => {
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('test initial dispatch', () => {
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
