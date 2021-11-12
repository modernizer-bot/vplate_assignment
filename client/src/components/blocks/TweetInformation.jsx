import React from 'react';
import styled from 'styled-components';
import { BiMessageRounded } from 'react-icons/bi';
import {
  AiOutlineRetweet,
  AiOutlineHeart,
  AiOutlineUpload,
} from 'react-icons/ai';

import { center } from '../../styles/mixin';
import Count from '../common/Count';
import Icon from '../common/Icon';

export default function TweetInformation({
  publicMetrics: {
    retweet_count: retweetCount,
    reply_count: replyCount,
    like_count: likeCount,
  },
}) {
  return (
    <TweetInformationOuterBox>
      <TweetInformationInnerBox>
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
      </TweetInformationInnerBox>
    </TweetInformationOuterBox>
  );
}

const TweetInformationOuterBox = styled.div`
  ${center}
`;

const TweetInformationInnerBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 10px;
`;
