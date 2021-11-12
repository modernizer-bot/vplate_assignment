/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
import React from 'react';
import styled from 'styled-components';

import { fullWidthAndHeight } from '../styles/mixin';

export default function Tweet({ tweetInfo: { id, author, text, media } }) {
  const tweetLink = `https://twitter.com/${author.username}/status/${id}`;

  return (
    <TweetInnerBox>
      <TweetLink href={tweetLink}>
        <TweetAuthorProfile>
          <TweetAuthorProfileImage
            src={author.profile_image_url}
            alt="author-profile"
          />
          <TweetAuthorName>{author.name}</TweetAuthorName>
          <TweetAuthorId>{`@${author.username}`}</TweetAuthorId>
        </TweetAuthorProfile>
        <TweetContentOuterBox>
          <TweetTextContent>{text}</TweetTextContent>
          {media && (
            <TweetMediaContentOuterBox>
              <TweetMediaContent
                className="tweet-media-content"
                src={
                  media.preview_image_url ? media.preview_image_url : media.url
                }
                alt="media-content"
              />
            </TweetMediaContentOuterBox>
          )}
        </TweetContentOuterBox>
      </TweetLink>
    </TweetInnerBox>
  );
}

const TweetInnerBox = styled.div`
  width: 650px;
  border: 1px solid red;
`;

const TweetLink = styled.a`
  ${fullWidthAndHeight}

  text-decoration: none;
  color: inherit;
`;

const TweetAuthorProfile = styled.div`
  display: flex;
  flex-direction: row;
`;

const TweetAuthorName = styled.div`
  margin-left: 10px;
  font-size: 15px;
  font-weight: bold;
`;

const TweetAuthorId = styled.div`
  margin-left: 5px;
  color: darkgray;
  font-size: 15px;
`;

const TweetAuthorProfileImage = styled.img`
  height: 48px;
  width: 48px;

  border-radius: 100%;
`;

const TweetMediaContentOuterBox = styled.div`
  width: auto;
  height: auto;
`;

const TweetMediaContent = styled.img`
  width: 90%;
  height: 90%;
  margin-top: 15px;

  border-radius: 25px;
  object-fit: contain;
`;

const TweetTextContent = styled.p`
  word-wrap: break-word;
`;

const TweetContentOuterBox = styled.div`
  margin-left: 60px;
`;

const TweetPublicInfo = styled.div``;
