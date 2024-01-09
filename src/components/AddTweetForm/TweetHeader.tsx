import React from 'react'
import { IconButton, Paper, Typography } from '@mui/material'
import { useHomeStyles } from '../../pages/Home/theme'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'

interface TweetHeaderProps {
	title: string | undefined
	backButton?: boolean
	HowManyTweets?: number
}

export const TweetHeader: React.FC<TweetHeaderProps> = ({
	title,
	backButton,
	HowManyTweets,
}) => {
	const classes = useHomeStyles()
	const navigate = useNavigate()

	const handleBackRoute = () => {
		navigate(-1)
	}

	return (
		<>
			<Paper className={classes.tweetHeader} variant='outlined'>
				{backButton && (
					<IconButton onClick={handleBackRoute}>
						<ArrowBackIcon color='primary' />
					</IconButton>
				)}

				<div>
					<Typography variant='h6'>{title}</Typography>
					{HowManyTweets && (
						<span style={{ fontSize: 14, opacity: 0.6 }}>
							{HowManyTweets} твита
						</span>
					)}
				</div>
			</Paper>
		</>
	)
}
