/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
import React from 'react';

export default function Tweet({ data }) {
  const tweetLink = `https://twitter.com/${data.author.username}/status/${data.id}`;

  return (
    <a href={tweetLink}>
      <div className="tweet-box">
        <img
          className="tweet-author-profile-image"
          src={data.author.profile_image_url}
          alt="author-profile"
        />
        {data.text}
      </div>
      {data.media && (
        <img
          className="tweet-media-content"
          src={
            data.media[0].preview_image_url
              ? data.media[0].preview_image_url
              : data.media[0].url
          }
          alt="media-content"
        />
      )}
    </a>
  );
}
