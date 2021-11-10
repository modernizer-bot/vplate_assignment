import React from 'react'

export default function Tweet({ data }) {

	const onClick = (event) => {
		console.log("TODO: Implementation to visit the tweet on Twitter.")
	}
	
	return (
		<div className="tweet">
			<h3 className="tweet-header">Tweet Content</h3>
			<div className="tweet-content">
				{
					// tweet contents
					/*
						1. text
						2. likes
						3. retweets
						4. etc.
					*/
				}
			</div>
			{data === null && (<p>{"data parameter is null! :("}</p>)}
			<button onClick={onClick} className="tweet-button">Visit on Twitter..</button>
		</div>
	)
}