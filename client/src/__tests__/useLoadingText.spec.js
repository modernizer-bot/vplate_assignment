/* eslint-disable implicit-arrow-linebreak */
import { renderHook, act } from '@testing-library/react-hooks';
import {
  LOADING_DEFAULT_TEXT,
  LOADING_DEFAULT_COUNT,
  LOADING_DEFAULT_INTERVAL,
} from '../constant/loading';
import useLoadingText from '../hooks/useLoadingText';

describe('Test useLoadingText hook', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('test with default value', async () => {
    const { result } = renderHook(() => useLoadingText());

    act(() => {
      let expectation = LOADING_DEFAULT_TEXT;

      for (let i = 0; i < LOADING_DEFAULT_COUNT + 1; i += 1) {
        expect(result.current).toBe(expectation);
        jest.advanceTimersByTime(LOADING_DEFAULT_INTERVAL);
        expectation += '.';
      }

      expect(result.current).toBe(LOADING_DEFAULT_TEXT);
    });
  });

  it('test with parameters', async () => {
    const text = (Math.random() + 1).toString(36).substring(7);
    const count = parseInt(Math.random() * 100, 10);
    const interval = parseInt(Math.random() * 1000, 10);

    const { result } = renderHook(() => useLoadingText(text, count, interval));

    act(() => {
      let expectation = text;

      for (let i = 0; i < count + 1; i += 1) {
        expect(result.current).toBe(expectation);
        jest.advanceTimersByTime(interval);
        expectation += '.';
      }

      expect(result.current).toBe(text);
    });
  });
});
