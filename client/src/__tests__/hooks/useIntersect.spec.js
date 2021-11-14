import * as redux from 'react-redux';
import { renderHook } from '@testing-library/react-hooks';
import useIntersect from '../../hooks/useIntersect';

describe('useIntersect Hook Test', () => {
  let spyOnUseSelector;

  beforeEach(() => {
    spyOnUseSelector = jest.spyOn(redux, 'useSelector');
    spyOnUseSelector.mockReturnValue(false);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('ob test', () => {
    const mockFn = jest.fn();
    const mockRef = { current: true };

    renderHook(() => useIntersect(mockRef, mockFn));
    expect(spyOnUseSelector).toBeCalledTimes(1);
  });
});
