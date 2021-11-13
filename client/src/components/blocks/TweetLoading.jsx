/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import useLoadingText from '../../hooks/useLoadingText';
import useIntersect from '../../hooks/useIntersect';
import { center } from '../../styles/mixin';

export default function TweetLoading() {
  const trigger = useIntersect();
  const loadingText = useLoadingText();

  return (
    <TweetLoadingInnerBox ref={trigger}>
      <LoadingText>{loadingText}</LoadingText>
    </TweetLoadingInnerBox>
  );
}

const TweetLoadingInnerBox = styled.div`
  ${center}
  margin: 20px auto 20px auto;
`;

const LoadingText = styled.p`
  font-size: ${({ theme }) => theme.font.big};
  font-weight: bold;
`;
