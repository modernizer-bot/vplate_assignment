import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { center, fakeBorder } from '../../styles/mixin';

export default function Icon({ children: icon }) {
  return (
    <IconLayout>
      <IconWrapper>{icon}</IconWrapper>
    </IconLayout>
  );
}

const IconLayout = styled.div`
  ${center}
  ${fakeBorder}
`;

const IconWrapper = styled.div`
  ${fakeBorder}
`;

Icon.propTypes = {
  children: PropTypes.element.isRequired,
};
