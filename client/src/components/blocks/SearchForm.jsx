import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

import { changeKeyword, openTweetStream } from '../../features/tweet/slices';
import { fakeBorder, center } from '../../styles/mixin';
import Icon from '../common/Icon';

export default function SearchForm() {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');
  const [hasFocus, setFocus] = useState(false);

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    dispatch(changeKeyword(inputValue));
    dispatch(openTweetStream());
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleFocus = () => {
    setFocus((prevState) => !prevState);
  };

  return (
    <SearchFormLayout>
      <SearchInputBox activated={hasFocus}>
        <IconWrapper>
          <Icon>
            <AiOutlineSearch size={24} color={hasFocus ? '#31a4f1' : 'black'} />
          </Icon>
        </IconWrapper>
        <SearchInput
          type="text"
          placeholder="Search Keyword"
          value={inputValue}
          activated={hasFocus}
          onKeyPress={onKeyPress}
          onFocus={handleFocus}
          onBlur={handleFocus}
          onChange={onChange}
        />
      </SearchInputBox>
    </SearchFormLayout>
  );
}

const SearchFormLayout = styled.div`
  ${center}
  background-color: transparent;
  width: 100%;
  margin: 15px 0 15px 0;
`;

const IconWrapper = styled.div`
  ${center}
  margin-left: 20px;
`;

const SearchInput = styled.input`
  ${fakeBorder}
  height: 40px;
  width: 100%;
  margin-left: 20px;
  border-radius: 40px;

  ${({ activated }) => !activated && 'background-color:#eff3f4'};

  @media screen and (max-width: ${({ theme }) => theme.size.deviceSize}) {
    text-align: center;
  }
`;

const SearchInputBox = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  border-radius: 40px;

  ${({ activated }) => !activated && 'background-color:#eff3f4'};
  ${({ activated }) => (activated ? 'border: 1px solid #31a4f1' : fakeBorder)};
`;
