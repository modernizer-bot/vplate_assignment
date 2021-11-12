import React from 'react';
import styled from 'styled-components';
import { AiOutlineTwitter } from 'react-icons/ai';

import Icon from '../common/Icon';
import { center } from '../../styles/mixin';

export default function Title() {
  return (
    <TitleInnerBox>
      <Icon>
        <AiOutlineTwitter color="#31A4F1" size={40} />
      </Icon>
      <TitleOuterBox>Assignment Project</TitleOuterBox>
    </TitleInnerBox>
  );
}

const TitleInnerBox = styled.div`
  display: flex;
  width: 650px;
  font-size: 17px;
  font-weight: bold;
`;

const TitleOuterBox = styled.div`
  ${center}
`;
