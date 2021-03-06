import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { AiOutlineTwitter } from 'react-icons/ai';

import Icon from '../common/Icon';

import { center } from '../../styles/mixin';

export default function Title() {
  const themeContext = useContext(ThemeContext);

  return (
    <TitleLayout>
      <Icon>
        <AiOutlineTwitter color={themeContext.color.twitter} size={40} />
      </Icon>
      <TitleText>Assignment Project</TitleText>
    </TitleLayout>
  );
}

const TitleLayout = styled.div`
  display: flex;
  width: 100%;
  font-size: ${({ theme }) => theme.font.medium};
  font-weight: bold;
`;

const TitleText = styled.div`
  ${center}
`;
