import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTweetList } from '../../features/tweet/selectors';
import { connectWithStreamServer } from '../../features/tweet/slices';

import Tweet from '../Tweet';
import InputForm from '../InputForm';

export default function Home() {
  const dispatch = useDispatch();
  const tweetList = useSelector(selectTweetList);

  useEffect(() => {
    dispatch(connectWithStreamServer());
  }, []);

  return (
    <div className="home">
      <h1>Assignment Project</h1>
      <hr />
      <InputForm />
      <div className="tweet-list">
        {tweetList.length === 0 ? (
          <div className="tweet-list-empty">Tweet List is empty :(</div>
        ) : (
          tweetList.map((data) => <Tweet key={data.id} data={data} />)
        )}
      </div>
    </div>
  );
}
