import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { changeKeyword, initTweetStream } from '../features/tweet/slices';

export default function SearchForm() {
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
    <SearchFormInnerBox>
      <SearchInputBox type="text" value={inputValue} onChange={onInputChange} />
      <SearchSubmitButton type="submit" onClick={onSearchClick}>
        Search
      </SearchSubmitButton>
    </SearchFormInnerBox>
  );
}

const SearchFormInnerBox = styled.form``;

const SearchInputBox = styled.input``;

const SearchSubmitButton = styled.button``;
