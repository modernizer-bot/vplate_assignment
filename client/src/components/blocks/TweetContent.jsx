import React from 'react';
import styled from 'styled-components';

import { center } from '../../styles/mixin';

export default function TweetContent({ mediaURL, text }) {
  return (
    <TweetContentInnerBox>
      <TweetTextContentOuterBox>
        <TweetTextContent>{text}</TweetTextContent>
      </TweetTextContentOuterBox>
      {mediaURL && (
        <TweetMediaContentOuterBox>
          <TweetMediaContent src={mediaURL} alt="media-content" />
        </TweetMediaContentOuterBox>
      )}
    </TweetContentInnerBox>
  );
}

const TweetMediaContentOuterBox = styled.div`
  width: auto;
  height: auto;
  ${center}
`;

const TweetMediaContent = styled.img`
  width: 95%;
  height: auto;
  max-width: 600px;
  margin-top: 15px;

  border-radius: 25px;
  object-fit: contain;
`;

const TweetTextContent = styled.p`
  word-wrap: break-word;
`;

const TweetTextContentOuterBox = styled.div`
  width: 92%;
  margin-top: 10px;
`;

const TweetContentInnerBox = styled.div`
  ${center}
`;
