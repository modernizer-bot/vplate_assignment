import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { center } from '../../styles/mixin';

export default function TweetContent({ content: { text, mediaUrl } }) {
  return (
    <TweetContentLayout>
      <TweetTextContentWrapper>
        <TweetTextContent>{text}</TweetTextContent>
      </TweetTextContentWrapper>
      {mediaUrl && (
        <TweetMediaContentWrapper>
          <TweetMediaContent src={mediaUrl} alt="media-content" />
        </TweetMediaContentWrapper>
      )}
    </TweetContentLayout>
  );
}

const TweetMediaContentWrapper = styled.div`
  ${center}
  width: auto;
  height: auto;
`;

const TweetMediaContent = styled.img`
  width: 95%;
  height: auto;
  margin-top: 15px;
  border-radius: 25px;
  box-shadow: 1px 1px 1px #eff3f4;
  object-fit: contain;
`;

const TweetTextContent = styled.p`
  word-wrap: break-word;
`;

const TweetTextContentWrapper = styled.div`
  width: 92%;
  margin-top: 10px;
`;

const TweetContentLayout = styled.div`
  ${center}
`;

TweetContent.propTypes = {
  content: PropTypes.shape({
    text: PropTypes.string.isRequired,
    mediaUrl: PropTypes.string,
  }).isRequired,
};
