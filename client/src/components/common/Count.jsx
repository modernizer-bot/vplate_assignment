import React from 'react';
import styled from 'styled-components';
import { center, fakeBorder } from '../../styles/mixin';

import Icon from './Icon';

export default function Count({ children, number }) {
  return (
    <CountInnerBox>
      <Icon>{children}</Icon>
      <NumberOuterBox>
        <NumberInnerBox>{number}</NumberInnerBox>
      </NumberOuterBox>
    </CountInnerBox>
  );
}

const CountInnerBox = styled.div`
  display: flex;
  align-items: center;
`;

const NumberOuterBox = styled.div`
  ${center}
  ${fakeBorder}
  margin-left: 10px;
`;

const NumberInnerBox = styled.div`
  ${fakeBorder}
  font-size: ${({ theme }) => theme.font.medium};
`;
