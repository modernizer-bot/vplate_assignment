import React from 'react'
import Tweet from "./tweet"

export default function Home({}) {
	const [tweetsList, updateTweetsList] = React.useState([])
	const [inputValue, updateInputValue] = React.useState("")

	const onInputChange = (event) => {
		console.log("TODO: implementation to get input's value change.")
	}

	const onSearchClick = (event) => {
		event.preventDefault()
		console.log("TODO: Implementation to get top 10 tweets based on the searched value.")
	}

	return (
		<div className="home">
			<h1>Assignment Project</h1>
			<form className="search-form">
				<input type="text" name="search" onChange={onInputChange} className="search-input" />
				<button type="submit" onClick={onSearchClick} className="search-button">Search</button>
			</form>
			<hr />
			<div className="tweet-list">

				{tweetsList.map((data, index) => (
					<Tweet data={data} />
				))}
			</div>
			{tweetsList.length === 0 && (<div className="tweet-list-empty">{"Tweet List is empty :("}</div>)}
		</div>
	)
}