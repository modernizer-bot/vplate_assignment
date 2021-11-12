import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeKeyword, initTweetStream } from '../features/tweet/slices';

export default function InputForm() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSearchClick = (event) => {
    event.preventDefault();
    dispatch(changeKeyword(inputValue));
    dispatch(initTweetStream());
  };

  return (
    <form className="search-form">
      <input
        type="text"
        name="search-keyword"
        value={inputValue}
        onChange={onInputChange}
        className="search-input"
      />
      <button type="submit" onClick={onSearchClick} className="search-button">
        Search
      </button>
    </form>
  );
}
