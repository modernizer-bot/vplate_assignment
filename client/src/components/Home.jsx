/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
import React from 'react';
import Tweet from './Tweet';

import tweetHooks from '../hooks/tweetHooks';

export default function Home() {
  tweetHooks();

  const [tweetsList, updateTweetsList] = React.useState([]);
  const [inputValue, updateInputValue] = React.useState('');

  const onInputChange = () => {
    console.log("TODO: implementation to get input's value change.");
  };

  const onSearchClick = (event) => {
    event.preventDefault();
    console.log(
      'TODO: Implementation to get top 10 tweets based on the searched value.',
    );
  };

  return (
    <div className="home">
      <h1>Assignment Project</h1>
      <form className="search-form">
        <input
          type="text"
          name="search"
          onChange={onInputChange}
          className="search-input"
        />
        <button type="submit" onClick={onSearchClick} className="search-button">
          Search
        </button>
      </form>
      <hr />
      <div className="tweet-list">
        {tweetsList.map((data) => (
          <Tweet data={data} />
        ))}
      </div>
      {tweetsList.length === 0 && (
        <div className="tweet-list-empty">Tweet List is empty :(</div>
      )}
    </div>
  );
}
