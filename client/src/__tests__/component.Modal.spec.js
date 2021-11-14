import React from 'react';
import * as redux from 'react-redux';
import { ThemeProvider } from 'styled-components';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import Modal from '../components/hocs/Modal';
import theme from '../styles/theme';

describe('test Modal', () => {
  const spySelector = jest.spyOn(redux, 'useSelector');
  spySelector.mockReturnValueOnce(false).mockReturnValueOnce(true);

  const mockStore = configureStore();

  const store = mockStore();

  store.dispatch = jest.fn();

  const component = renderer.create(
    <redux.Provider store={store}>
      <ThemeProvider theme={theme}>
        <Modal>
          <div>test</div>
        </Modal>
      </ThemeProvider>
    </redux.Provider>,
  );

  it('', () => {
    renderer.act(() => {
      component.root.findByProps({ modalMessage: false }).props.onClick();
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
