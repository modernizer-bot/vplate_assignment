const OPTIONS =
  '?tweet.fields=public_metrics&user.fields=id,profile_image_url&expansions=author_id,attachments.media_keys&media.fields=preview_image_url,url';

export const TWITTER_STREAM_URL = `https://api.twitter.com/2/tweets/search/stream${OPTIONS}`;
export const TWITTER_STREAM_RULE_URL =
  'https://api.twitter.com/2/tweets/search/stream/rules';
