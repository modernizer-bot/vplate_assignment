import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { selectTweetList } from '../../features/tweet/selectors';
import Tweet from './Tweet';

export default function TweetList() {
  const tweetList = useSelector(selectTweetList);

  return (
    <TweetListInnerBox>
      {tweetList.length === 0 ? (
        <EmptyTweetList>Tweet List is empty :(</EmptyTweetList>
      ) : (
        tweetList.map((tweetInfo) => (
          <Tweet key={tweetInfo.id} tweetInfo={tweetInfo} />
        ))
      )}
    </TweetListInnerBox>
  );
}

const TweetListInnerBox = styled.ul``;

const EmptyTweetList = styled.div``;
