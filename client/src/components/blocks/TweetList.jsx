import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import {
  selectStreamStatus,
  selectTweetList,
} from '../../features/tweet/selectors';

import Tweet from './Tweet';
import TweetLoading from './TweetLoading';

import { center } from '../../styles/mixin';

export default function TweetList() {
  const tweetList = useSelector(selectTweetList);
  const streamStatus = useSelector(selectStreamStatus);

  if (tweetList.length === 0 && !streamStatus) {
    return (
      <EmptyTweetTextWrapper>
        <EmptyTweetText>Tweet List is empty :(</EmptyTweetText>
      </EmptyTweetTextWrapper>
    );
  }

  return (
    <>
      {tweetList.map((tweetInfo) => (
        <Tweet key={tweetInfo.id} tweetInfo={tweetInfo} />
      ))}
      <TweetLoading />
    </>
  );
}

const EmptyTweetTextWrapper = styled.div`
  ${center}
  height: 100%;
  margin-top: 50px;
`;

const EmptyTweetText = styled.p`
  font-size: ${({ theme }) => theme.font.big};
  font-weight: bold;
`;
