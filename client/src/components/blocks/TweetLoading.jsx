/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import useLoadingText from '../../hooks/useLoadingText';
import useIntersect from '../../hooks/useIntersect';

import { openTweetStream } from '../../features/tweet/slices';

import { center } from '../../styles/mixin';

export default function TweetLoading() {
  const dispatch = useDispatch();
  const trigger = useRef();
  useIntersect(trigger, () => dispatch(openTweetStream()));
  const loadingText = useLoadingText();

  return (
    <LoadingTextWrapper ref={trigger}>
      <LoadingText>{loadingText}</LoadingText>
    </LoadingTextWrapper>
  );
}

const LoadingTextWrapper = styled.div`
  ${center}
  margin: 20px auto 20px auto;
`;

const LoadingText = styled.p`
  font-size: ${({ theme }) => theme.font.big};
  font-weight: bold;
`;
