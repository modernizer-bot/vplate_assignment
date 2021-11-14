import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import theme from '../../styles/theme';
import TweetList from '../../components/blocks/TweetList';

describe('TweetList component test', () => {
  const mockStore = configureStore();

  it('test tweetList feature render ', () => {
    const sampleTweet = {
      author: {
        id: '1383672481316102153',
        name: '일납 고등학교장 오사',
        profile_image_url:
          'https://pbs.twimg.com/profile_images/1458083998815633410/R0wPqkNE_normal.jpg',
        username: 'ASTRO_OHMYGIRL_',
      },
      content: {
        text: 'RT @cat_momococo: 고양이 잠투정 부리는 영상 https://t.co/zy9hrHo9dD',
        mediaUrl:
          'https://pbs.twimg.com/ext_tw_video_thumb/1459327318951096320/pu/img/r7oidDptjJ7jXyKC.jpg',
      },
      id: '1459704809703886848',
      publicMetrics: { retweet_count: 0, reply_count: 0, like_count: 0 },
    };

    const initialState = {
      tweet: {
        tweetList: [sampleTweet],
        streamStatus: false,
      },
    };

    const store = mockStore(initialState);

    store.dispatch = jest.fn();

    const tree = renderer
      .create(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <TweetList />
          </ThemeProvider>
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
