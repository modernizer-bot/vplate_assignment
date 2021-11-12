/* eslint-disable no-unused-vars */
import React, { useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  selectHasTweets,
  selectStreamStatus,
} from '../../features/tweet/selectors';

export default function TweetLoading() {
  const streamStatus = useSelector(selectStreamStatus);
  const trigger = useRef();

  const onIntersect = ([entry]) => {
    if (entry.isIntersecting) {
      console.log('eeeee');
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

  return (
    <Loading ref={trigger}>
      <div>TweetLoading</div>
      <div>blahblah</div>
    </Loading>
  );
}

const Loading = styled.div``;
