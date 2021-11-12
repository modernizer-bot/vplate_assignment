import React from 'react';
import styled from 'styled-components';

import { fullWidthAndHeight } from '../../styles/mixin';
import TweetAuthorProfile from './TweetAuthorProfile';
import TweetContent from './TweetContent';
import TweetInformation from './TweetInformation';

export default function Tweet({
  tweetInfo: { id, author, text, mediaURL, publicMetrics },
}) {
  const tweetLink = `https://twitter.com/${author.username}/status/${id}`;

  return (
    <TweetInnerBox>
      <TweetLink href={tweetLink}>
        <TweetAuthorProfile author={author} />
        <TweetContent mediaURL={mediaURL} text={text} />
        <TweetInformation publicMetrics={publicMetrics} />
      </TweetLink>
    </TweetInnerBox>
  );
}

const TweetInnerBox = styled.li`
  width: 650px;
  margin-top: 10px;
`;

const TweetLink = styled.a`
  ${fullWidthAndHeight}

  text-decoration: none;
  color: inherit;
`;
