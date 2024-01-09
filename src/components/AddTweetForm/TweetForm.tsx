import React from 'react'
import { useHomeStyles } from '../../pages/Home/theme'
import { AddTweetForm } from './AddTweetForm'
import { TweetHeader } from './TweetHeader'

export const TweetForm = () => {
	const classes = useHomeStyles()

	return (
		<>
			<TweetHeader title='Главная' />
			<div className={classes.addTweetFormData}>
				<AddTweetForm classes={classes} />
			</div>
			<div className={classes.borderAddTweet}></div>
		</>
	)
}
