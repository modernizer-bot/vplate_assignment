import React from 'react';
import styled from 'styled-components';
import { center } from '../../styles/mixin';

export default function TweetAuthorProfile({ author }) {
  return (
    <TweetAuthorProfileOuterBox>
      <TweetAuthorProfileInnerBox>
        <TweetAuthorProfileImageOuterBox>
          <TweetAuthorProfileImage
            src={author.profile_image_url}
            alt="author-profile"
          />
        </TweetAuthorProfileImageOuterBox>
        <TweetAuthorName>{author.name}</TweetAuthorName>
        <TweetAuthorUsername>{`@${author.username}`}</TweetAuthorUsername>
      </TweetAuthorProfileInnerBox>
    </TweetAuthorProfileOuterBox>
  );
}
const TweetAuthorProfileOuterBox = styled.div`
  ${center}
`;

const TweetAuthorProfileInnerBox = styled.div`
  display: flex;
  width: 95%;
`;

const TweetAuthorName = styled.div`
  margin-left: 10px;
  font-size: 15px;
  font-weight: bold;
`;

const TweetAuthorUsername = styled.div`
  margin-left: 5px;
  color: darkgray;
  font-size: 15px;
`;

const TweetAuthorProfileImageOuterBox = styled.div`
  height: 48px;
  width: 48px;
`;

const TweetAuthorProfileImage = styled.img`
  border-radius: 100%;
`;
