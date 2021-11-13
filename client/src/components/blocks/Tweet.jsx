import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fullWidthAndHeight } from '../../styles/mixin';
import TweetAuthorProfile from './TweetAuthorProfile';
import TweetContent from './TweetContent';
import TweetInformation from './TweetInformation';

function Tweet({ tweetInfo: { id, author, content, publicMetrics } }) {
  const tweetLink = `https://twitter.com/${author.username}/status/${id}`;
  return (
    <TweetInnerBox>
      <TweetLink href={tweetLink}>
        <TweetAuthorProfile author={author} />
        <TweetContent content={content} />
        <TweetInformation publicMetrics={publicMetrics} />
      </TweetLink>
    </TweetInnerBox>
  );
}

const TweetInnerBox = styled.li`
  width: 100%;
  margin-top: 10px;
`;

const TweetLink = styled.a`
  ${fullWidthAndHeight}

  text-decoration: none;
  color: inherit;
`;

Tweet.defaultProps = {};

Tweet.propTypes = {
  tweetInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.shape({
      text: PropTypes.string.isRequired,
      mediaUrl: PropTypes.string,
    }).isRequired,
    author: PropTypes.shape({
      id: PropTypes.string.isRequired,
      profile_image_url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired,
    publicMetrics: PropTypes.shape({
      retweet_count: PropTypes.number.isRequired,
      reply_count: PropTypes.number.isRequired,
      like_count: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default memo(Tweet);
