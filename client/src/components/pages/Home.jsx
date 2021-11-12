import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { selectTweetList } from '../../features/tweet/selectors';
import { connectWithStreamServer } from '../../features/tweet/slices';

import Tweet from '../Tweet';
import SearchForm from '../SearchForm';

export default function Home() {
  const dispatch = useDispatch();
  const tweetList = useSelector(selectTweetList);

  useEffect(() => {
    dispatch(connectWithStreamServer());
  }, []);

  return (
    <>
      <Title>Assignment Project</Title>
      <SearchForm />
      <div className="tweet-list">
        {tweetList.length === 0 ? (
          <div className="tweet-list-empty">Tweet List is empty :(</div>
        ) : (
          tweetList.map((tweetInfo) => (
            <Tweet key={tweetInfo.id} tweetInfo={tweetInfo} />
          ))
        )}
      </div>
    </>
  );
}

const Title = styled.h1`
  font-size: 17px;
  font-weight: bold;
`;
