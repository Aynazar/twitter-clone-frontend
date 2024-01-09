import CircularProgress from '@mui/material/CircularProgress'
// @ts-ignore
import mediumZoom from 'medium-zoom'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useHomeStyles } from '../../pages/Home/theme'
import { fetchTweetData, setTweetData } from '../../store/ducks/tweet/actionCreators'
import { selectIsTweetLoading, selectTweetData } from '../../store/ducks/tweet/selectors'
import { TweetHeader } from '../AddTweetForm/TweetHeader'
import { TweetForPage } from './TweetForPage'

export const FullTweet: React.FC = (): React.ReactElement | null => {
	const params: {_id?: string} = useParams()
	const classes = useHomeStyles()
	const dispatch = useDispatch()
	const tweetData = useSelector(selectTweetData)
	const isLoading = useSelector(selectIsTweetLoading)
	const id = params._id

	React.useEffect(() => {
		if (id) { 
			dispatch(fetchTweetData(id))
		}

		return () => {
			dispatch(setTweetData(undefined));
		}
	}, [dispatch, id])

	React.useEffect(() => {
		if (!isLoading) {
			mediumZoom('.tweet-images img')
		}
	}, [isLoading])

	if (isLoading) {
		return (
			<div className={classes.centered}>
				<CircularProgress />
			</div>
		)
	}

	return (
		<>
			<TweetHeader title='Твитнуть' backButton={true} />
			{tweetData && (
				<div>
					<TweetForPage {...tweetData} createdAt={tweetData.createdAt}/>
				</div>
			)}
		</>
	)
}
