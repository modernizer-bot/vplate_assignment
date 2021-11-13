import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import createStore from '../store';

import theme from '../styles/theme';
import SearchForm from '../components/blocks/SearchForm';

describe('Loading component test', () => {
  const mockStore = configureStore();
  let store;
  let component;

  beforeEach(() => {
    store = mockStore(createStore().getState());

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SearchForm />
        </ThemeProvider>
      </Provider>,
    );
  });

  it('renders correctly', () => {
    renderer.act(() => {
      component.root
        .findByType('input')
        .props.onChange({ target: { value: 'test keyword' } });
    });

    console.log(component.root.findByType('input').props);

    renderer.act(() => {
      component.root.findByType('input').props.onKeyPress({ key: 'Enter' });
    });

    expect(store.dispatch).toHaveBeenCalledTimes(2);
    console.log(store.getState());
  });
});
