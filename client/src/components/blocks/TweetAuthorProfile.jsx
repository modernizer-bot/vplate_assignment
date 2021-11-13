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
        <TweetAuthorNameOuterBox>
          <TweetAuthorName>{author.name}</TweetAuthorName>
          <TweetAuthorUsername>{`@${author.username}`}</TweetAuthorUsername>
        </TweetAuthorNameOuterBox>
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

const TweetAuthorNameOuterBox = styled.div`
  display: flex;

  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

const TweetAuthorName = styled.div`
  margin-left: 10px;
  font-size: ${({ theme }) => theme.font.small};
  font-weight: bold;
`;

const TweetAuthorUsername = styled.div`
  margin-left: 10px;
  color: ${({ theme }) => theme.color.darkGray};
  font-size: ${({ theme }) => theme.font.small};

  @media screen and (max-width: 650px) {
    margin: 5px auto auto 5px;
  }
`;

const TweetAuthorProfileImageOuterBox = styled.div`
  height: ${({ theme }) => theme.size.profileImageSize};
  width: ${({ theme }) => theme.size.profileImageSize};
`;

const TweetAuthorProfileImage = styled.img`
  border-radius: 100%;
`;
