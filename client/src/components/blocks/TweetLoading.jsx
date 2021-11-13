/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import useLoadingText from '../../hooks/useLoadingText';
import useIntersect from '../../hooks/useIntersect';
import { center } from '../../styles/mixin';

import { openTweetStream } from '../../features/tweet/slices';

export default function TweetLoading() {
  const dispatch = useDispatch();

  const trigger = useIntersect(() => dispatch(openTweetStream()));
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
