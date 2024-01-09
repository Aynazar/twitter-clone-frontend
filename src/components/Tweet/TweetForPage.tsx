import React from 'react'
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import LikeIcon from '@mui/icons-material/FavoriteBorderOutlined'
import RepeatIcon from '@mui/icons-material/IosShareOutlined'
import ShareIcon from '@mui/icons-material/ReplyOutlined'
import MoreVertIcon from '@mui/icons-material/MoreVertOutlined'
import { useHomeStyles } from '../../pages/Home/theme'
import { Paper, Avatar, IconButton, Typography } from '@mui/material'
import classNames from 'classnames'
import format from 'date-fns/format'
import ru from 'date-fns/locale/ru'
import { Link } from 'react-router-dom'

interface TweetForPageProps {
	text: string
	createdAt: string
	images?: string[]
	user: {
		_id?: string
		fullname: string
		username: string
	}
}

export const TweetForPage: React.FC<TweetForPageProps> = ({
	user,
	createdAt,
	images,
	text,
}) => {
	const classes = useHomeStyles()

	return (
		<div>
			<Paper variant='outlined' className={classes.tweetNoPaper}>
				<div className={classNames(classes.FullTweet, classes.tweetHeader)}>
					<Link to={`/user/${user?._id}`} className='text-dec-none'>
						<div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
							<Avatar
								src={user?._id}
								alt={`Аватарка пользователя ${user.username}`}
							/>
							<div>
								<b>{user.fullname} </b>
								<div>
									<span className={classes.tweetUserName}>
										@{user.username}
									</span>
								</div>
							</div>
						</div>
					</Link>

					<div className={classes.tweetHeaderInfo}>
						<div>
							<IconButton
								aria-label='more'
								aria-controls='long-menu'
								aria-haspopup='true'
							>
								<MoreVertIcon />
							</IconButton>
						</div>
					</div>
				</div>

				<div style={{ padding: '10px 15px' }}>
					<Typography variant='body1' gutterBottom style={{ fontSize: '24px' }}>
						{text}
						<div className='tweet-images'>
							{images && (
								<div className={classes.imagesWrap}>
									{images.map(url => (
										<div key={url} className={classes.imagesItem}>
											<img src={url} alt='' />
										</div>
									))}
								</div>
							)}
						</div>
					</Typography>
					<div className={classes.tweetFooter}>
						<div>
							<IconButton>
								<CommentIcon />
							</IconButton>
							<span>1</span>
						</div>
						<div>
							<IconButton>
								<RepeatIcon />
							</IconButton>
						</div>
						<div>
							<IconButton>
								<LikeIcon />
							</IconButton>
						</div>
						<div>
							<IconButton>
								<ShareIcon />
							</IconButton>
						</div>
					</div>
					<div>
						<Typography className={classes.fullTweetDate} gutterBottom>
							<span>
								{' '}
								{format(new Date(createdAt), 'H:mm', { locale: ru })}{' '}
							</span>
							<span> · </span>
							<span>
								{' '}
								{format(new Date(createdAt), 'dd MMM. yyyy г.', {
									locale: ru,
								})}{' '}
							</span>
						</Typography>
					</div>
				</div>
			</Paper>
		</div>
	)
}
