import React from 'react';
import styled from 'styled-components';

import SearchForm from '../../blocks/SearchForm';
import TweetList from '../../blocks/TweetList';
import Title from '../../blocks/Title';

import { center } from '../../../styles/mixin';

export default function Home() {
  return (
    <HomeLayout>
      <Header>
        <Title />
        <SearchForm />
      </Header>
      <Body>
        <TweetList />
      </Body>
    </HomeLayout>
  );
}

const HomeLayout = styled.div`
  ${center}
`;

const Header = styled.div`
  position: fixed;
  z-index: 1;
  top: 0px;
  width: ${({ theme }) => theme.size.deviceSize};
  height: ${({ theme }) => theme.size.headerSize};
  background-color: white;

  @media screen and (max-width: ${({ theme }) => theme.size.deviceSize}) {
    width: 100%;
  }
`;

const Body = styled.div`
  width: ${({ theme }) => theme.size.deviceSize};
  margin-top: ${({ theme }) => theme.size.headerSize};

  @media screen and (max-width: ${({ theme }) => theme.size.deviceSize}) {
    width: 100%;
  }
`;
