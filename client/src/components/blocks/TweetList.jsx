import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import {
  selectStreamStatus,
  selectTweetList,
} from '../../features/tweet/selectors';
import Tweet from './Tweet';
import TweetLoading from './TweetLoading';

export default function TweetList() {
  const tweetList = useSelector(selectTweetList);
  const streamStatus = useSelector(selectStreamStatus);

  if (tweetList.length === 0 && !streamStatus) {
    return <EmptyTweetList>Tweet List is empty :(</EmptyTweetList>;
  }

  return (
    <TweetListInnerBox>
      {tweetList.map((tweetInfo) => (
        <Tweet key={tweetInfo.id} tweetInfo={tweetInfo} />
      ))}
      <TweetLoading />
    </TweetListInnerBox>
  );
}

const TweetListInnerBox = styled.ul``;

const EmptyTweetList = styled.div``;
