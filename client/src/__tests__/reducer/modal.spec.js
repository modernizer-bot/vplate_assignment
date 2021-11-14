import reducer, { openModal, closeModal } from '../../features/modal/slices';

describe('tweetReducer test', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      message: null,
    };
  });

  it('test initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('test openModal & closeModal', () => {
    const open = 'OPEN';

    expect(reducer(initialState, openModal(open))).toEqual({
      message: open,
    });

    expect(
      reducer(reducer(initialState, openModal(open)), closeModal()),
    ).toEqual({
      message: null,
    });
  });
});
