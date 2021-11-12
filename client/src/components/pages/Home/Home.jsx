import React from 'react';
import styled from 'styled-components';

import SearchForm from '../../blocks/SearchForm';
import TweetList from '../../blocks/TweetList';
import Title from '../../blocks/Title';
import { center } from '../../../styles/mixin';

export default function Home() {
  return (
    <Template>
      <Title />
      <SearchForm />
      <TweetList />
    </Template>
  );
}

const Template = styled.div`
  ${center}
`;
