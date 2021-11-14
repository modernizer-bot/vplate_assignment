const createTweetInfo = (data) => {
  const json = JSON.parse(data);

  const { id, text, public_metrics: publicMetrics } = json.data;
  const { users, media } = json.includes;

  delete publicMetrics.quote_count;

  let mediaUrl;

  if (media) {
    mediaUrl = media[0].preview_image_url
      ? media[0].preview_image_url
      : media[0].url;
  }

  const content = { text, mediaUrl };
  const author = users[0];
  const tweetInfo = {
    id,
    publicMetrics,
    content,
    author,
  };

  return tweetInfo;
};

export default createTweetInfo;
