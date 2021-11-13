import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { center } from '../../styles/mixin';

export default function TweetAuthorProfile({ author }) {
  return (
    <TweetAuthorProfileLayout>
      <TweetAuthorProfileInner>
        <TweetAuthorProfileImageWrapper>
          <TweetAuthorProfileImage
            src={author.profile_image_url}
            alt="author-profile"
          />
        </TweetAuthorProfileImageWrapper>
        <TweetAuthorNameWrapper>
          <TweetAuthorName>{author.name}</TweetAuthorName>
          <TweetAuthorUsername>{`@${author.username}`}</TweetAuthorUsername>
        </TweetAuthorNameWrapper>
      </TweetAuthorProfileInner>
    </TweetAuthorProfileLayout>
  );
}
const TweetAuthorProfileLayout = styled.div`
  ${center}
`;

const TweetAuthorProfileInner = styled.div`
  display: flex;
  width: 95%;
`;

const TweetAuthorNameWrapper = styled.div`
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

const TweetAuthorProfileImageWrapper = styled.div`
  height: ${({ theme }) => theme.size.profileImageSize};
  width: ${({ theme }) => theme.size.profileImageSize};
`;

const TweetAuthorProfileImage = styled.img`
  border-radius: 100%;
`;

TweetAuthorProfile.propTypes = {
  author: PropTypes.shape({
    id: PropTypes.string.isRequired,
    profile_image_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};
