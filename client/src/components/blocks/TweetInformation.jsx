import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BiMessageRounded } from 'react-icons/bi';
import {
  AiOutlineRetweet,
  AiOutlineHeart,
  AiOutlineUpload,
} from 'react-icons/ai';

import Count from '../common/Count';
import Icon from '../common/Icon';

import { center } from '../../styles/mixin';

export default function TweetInformation({
  publicMetrics: {
    retweet_count: retweetCount,
    reply_count: replyCount,
    like_count: likeCount,
  },
}) {
  return (
    <TweetInformationLayout>
      <TweetInformationInner>
        <Count number={replyCount}>
          <BiMessageRounded size={24} />
        </Count>
        <Count number={retweetCount}>
          <AiOutlineRetweet size={24} />
        </Count>
        <Count number={likeCount}>
          <AiOutlineHeart size={24} />
        </Count>
        <Icon>
          <AiOutlineUpload size={24} />
        </Icon>
      </TweetInformationInner>
    </TweetInformationLayout>
  );
}

const TweetInformationLayout = styled.div`
  ${center}
`;

const TweetInformationInner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 10px;
`;

TweetInformation.propTypes = {
  publicMetrics: PropTypes.shape({
    retweet_count: PropTypes.number.isRequired,
    reply_count: PropTypes.number.isRequired,
    like_count: PropTypes.number.isRequired,
  }).isRequired,
};
