import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectStreamStatus } from '../features/tweet/selectors';
import { openTweetStream } from '../features/tweet/slices';

export default function useIntersect() {
  const dispatch = useDispatch();

  const streamStatus = useSelector(selectStreamStatus);
  const trigger = useRef();

  const onIntersect = ([entry]) => {
    if (entry.isIntersecting) {
      dispatch(openTweetStream());
    }
  };

  useEffect(() => {
    if (streamStatus) return;
    const target = trigger.current;

    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, { threshold: 1 });
      observer.observe(target);
    }

    return () => observer && observer.disconnect();
  }, [streamStatus, trigger]);

  return trigger;
}
