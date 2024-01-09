import CircularProgress from '@mui/material/CircularProgress'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
	import { useHomeStyles } from '../../pages/Home/theme'
import { fetchTweets } from '../../store/ducks/tweets/actionCreators'
import {
	selectTweetsItems,
	selectIsTweetsLoading,
} from '../../store/ducks/tweets/selectors'
import { TweetForm } from '../AddTweetForm/TweetForm'
import { Tweet } from '../Tweet/Tweet'

interface FullTweetsProps {
	classes: ReturnType<typeof useHomeStyles>
}

export const FullTweets: React.FC<FullTweetsProps> = ({
	classes,
}: FullTweetsProps): React.ReactElement => {
	
	const tweets = useSelector(selectTweetsItems)
	const dispatch = useDispatch()
	const isLoading = useSelector(selectIsTweetsLoading)

	React.useEffect(() => {
		dispatch(fetchTweets())
	}, [])

	return (
		<>
			<TweetForm />
			<>
				{isLoading ? (
					<div className={classes.centered}>
						<CircularProgress />
					</div>
				) : (
					tweets.map(tweet => (
						<Tweet key={tweet._id} classes={classes} images={tweet.images} {...tweet} />
					))
				)}
			</>
		</>
	)
}
