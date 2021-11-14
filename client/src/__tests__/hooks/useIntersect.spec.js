import * as redux from 'react-redux';
import { renderHook } from '@testing-library/react-hooks';
import useIntersect from '../../hooks/useIntersect';

describe('useIntersect Hook Test', () => {
  let spyOnUseSelector;

  global.IntersectionObserver = {
    observe: null,
    disconnect: null,
    unobserve: null,
  };

  beforeEach(() => {
    spyOnUseSelector = jest.spyOn(redux, 'useSelector');
    spyOnUseSelector.mockReturnValue(false);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('observed test', () => {
    const mockFn = jest.fn();
    const mockRef = { current: true };

    renderHook(() => useIntersect(mockRef, mockFn));
    expect(spyOnUseSelector).toBeCalledTimes(1);
  });
});
