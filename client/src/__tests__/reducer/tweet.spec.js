import reducer, {
  connectWithStreamServer,
  openTweetStream,
  closeTweetStream,
  addTweet,
  changeKeyword,
} from '../../features/tweet/slices.js';

describe('tweetReducer test', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      tweetList: [],
      keyword: '',
      hasTweets: false,
      streamStatus: false,
    };
  });

  it('test initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('test action connectWithStreamServer', () => {
    expect(reducer(initialState, connectWithStreamServer())).toEqual(
      initialState,
    );
  });

  it('test action addTweet when has Tweets', () => {
    const test = 'test';

    expect(reducer(initialState, addTweet(test))).toEqual({
      tweetList: [test],
      keyword: '',
      hasTweets: true,
      streamStatus: false,
    });

    expect(
      reducer(reducer(initialState, addTweet(test)), addTweet(test)),
    ).toEqual({
      tweetList: [test, test],
      keyword: '',
      hasTweets: true,
      streamStatus: false,
    });
  });

  it('test action changeKeyword', () => {
    const test = 'test';
    expect(reducer(initialState, changeKeyword(test))).toEqual({
      tweetList: [],
      keyword: 'test',
      hasTweets: false,
      streamStatus: false,
    });
  });

  it('test actions openTweetStream & closeTweetStream', () => {
    expect(reducer(initialState, openTweetStream())).toEqual({
      tweetList: [],
      keyword: '',
      hasTweets: false,
      streamStatus: true,
    });

    expect(
      reducer(reducer(initialState, openTweetStream()), closeTweetStream()),
    ).toEqual({
      tweetList: [],
      keyword: '',
      hasTweets: false,
      streamStatus: false,
    });
  });
});
