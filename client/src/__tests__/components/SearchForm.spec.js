import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import theme from '../../styles/theme.js';
import SearchForm from '../../components/blocks/SearchForm.jsx';

describe('SearchForm component test', () => {
  const mockStore = configureStore();
  let store;
  let component;

  beforeEach(() => {
    const initialState = {
      tweet: {
        keyword: '',
      },
    };

    store = mockStore(initialState);

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SearchForm />
        </ThemeProvider>
      </Provider>,
    );
  });

  it('test searchForm feature', () => {
    const keyword = 'TEST';

    renderer.act(() => {
      component.root.findByType('input').props.onFocus();
    });

    renderer.act(() => {
      component.root
        .findByType('input')
        .props.onChange({ target: { value: keyword } });
    });

    // Input Any Key
    renderer.act(() => {
      component.root.findByType('input').props.onKeyPress({ key: 'Alt' });
    });

    // Input Enter Key
    renderer.act(() => {
      component.root.findByType('input').props.onKeyPress({ key: 'Enter' });
    });

    expect(component.root.findByType('input').props.value).toBe(keyword);

    expect(store.dispatch).toHaveBeenCalledTimes(2);
  });
});
