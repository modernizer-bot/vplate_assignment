import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { selectStreamStatus } from '../features/tweet/selectors';

export default function useIntersect(callback) {
  const streamStatus = useSelector(selectStreamStatus);
  const trigger = useRef();

  const onIntersect = ([entry]) => {
    if (entry.isIntersecting) {
      callback();
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
