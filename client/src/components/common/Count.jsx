import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { center, fakeBorder } from '../../styles/mixin';

import Icon from './Icon';

export default function Count({ children, number }) {
  return (
    <CountLayout>
      <Icon>{children}</Icon>
      <CountValueWrapper>
        <CountValue>{number}</CountValue>
      </CountValueWrapper>
    </CountLayout>
  );
}

const CountLayout = styled.div`
  display: flex;
  align-items: center;
`;

const CountValueWrapper = styled.div`
  ${center}
  ${fakeBorder}
  margin-left: 10px;
`;

const CountValue = styled.div`
  ${fakeBorder}
  font-size: ${({ theme }) => theme.font.medium};
`;

Count.propTypes = {
  children: PropTypes.element.isRequired,
  number: PropTypes.number.isRequired,
};
