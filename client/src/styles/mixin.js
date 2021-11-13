import { css, keyframes } from 'styled-components';

export const center = css`
  display: grid;
  place-items: center;
`;

export const fullWidthAndHeight = css`
  width: 100%;
  height: 100%;
`;

export const fakeBorder = css`
  border: 1px solid transparent;
`;

export const appear = keyframes`
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
`;
