/* eslint-disable no-unused-vars */
import needle from 'needle';
import { TWITTER_STREAM_URL, TWITTER_STREAM_RULE_URL } from '../constants/url';

export default function TwitterStreamHelper(token) {
  this.token = token;

  // prettier-ignore
  this.connectStream = () => needle.get(TWITTER_STREAM_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  this.getStreamRules = async () => {
    const response = await needle('get', TWITTER_STREAM_RULE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  };

  this.editStreamRules = async (data) => {
    await needle('post', TWITTER_STREAM_RULE_URL, data, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  };
}
