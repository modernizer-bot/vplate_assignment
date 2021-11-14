import { useEffect, useState } from 'react';

import {
  LOADING_DEFAULT_TEXT,
  LOADING_DEFAULT_COUNT,
  LOADING_DEFAULT_INTERVAL,
} from '../constant/loading.js';

export default function useLoadingText(
  text = LOADING_DEFAULT_TEXT,
  count = LOADING_DEFAULT_COUNT,
  interval = LOADING_DEFAULT_INTERVAL,
) {
  const [loadingText, setLoadingText] = useState(text);

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      // prettier-ignore
      setLoadingText((prevText) => (prevText.length - text.length >= count ? text : `${prevText}.`));
    }, interval);

    return () => clearInterval(loadingInterval);
  }, [loadingText]);

  return loadingText;
}
