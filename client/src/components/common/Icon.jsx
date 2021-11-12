import React from 'react';
import styled from 'styled-components';
import { center, fakeBorder } from '../../styles/mixin';

export default function Icon({ children: icon }) {
  return (
    <IconOuterBox>
      <IconInnerBox>{icon}</IconInnerBox>
    </IconOuterBox>
  );
}

const IconOuterBox = styled.div`
  ${center}
  ${fakeBorder}
`;

const IconInnerBox = styled.div`
  ${fakeBorder}
`;
