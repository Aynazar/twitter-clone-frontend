import React from 'react'
import {
	Avatar,
	Grid,
	IconButton,
	Menu,
	MenuItem,
	Paper,
	Typography,
} from '@mui/material'
import classNames from 'classnames'

import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import LikeIcon from '@mui/icons-material/FavoriteBorderOutlined'
import RepeatIcon from '@mui/icons-material/IosShareOutlined'
import ShareIcon from '@mui/icons-material/ReplyOutlined'
import MoreVertIcon from '@mui/icons-material/MoreVertOutlined'

import { useHomeStyles } from '../../pages/Home/theme'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../../utils/formatDate'
import { useSelector } from 'react-redux'
import { selectUserData } from '../../store/ducks/user/selectors'
import { useDispatch } from 'react-redux'
import { removeTweet } from '../../store/ducks/tweets/actionCreators'

interface TweetPropsInterface {
	_id: string
	classes: ReturnType<typeof useHomeStyles>
	text: string
	createdAt: string
	images?: string[]
	user: {
		_id?: string
		fullname: string
		username: string
	}
}

export const Tweet: React.FC<TweetPropsInterface> = ({
	classes,
	text,
	user,
	images,
	createdAt,
	_id,
}: TweetPropsInterface): React.ReactElement | null => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const navigate = useNavigate()
	const userData = useSelector(selectUserData)
	const dispatch = useDispatch()

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		event.stopPropagation()
		event.preventDefault()
		setAnchorEl(event.currentTarget)
	}

	const handleClickTweet = (
		event: React.MouseEvent<HTMLAnchorElement>
	): void => {
		event.preventDefault()
		navigate(`/home/tweet/${_id}`)
	}

	const handleClose = (event: any) => {
		event.stopPropagation()
		setAnchorEl(null)
	}

	const handleDeleteTweet = (event: React.MouseEvent<HTMLElement>): void => {
		handleClose(event)
		if (window.confirm('Вы действительно хотите удалить твит?')) {
			dispatch(removeTweet(_id))
		}
	}

	return (
		<a
			onClick={handleClickTweet}
			className={classes.tweetWrapper}
			href={`/home/tweet/${_id}`}
		>
			<Paper
				className={classNames(classes.tweet, classes.tweetHeader)}
				variant='outlined'
			>
				<Grid container spacing={2}>
					<Grid item xs={1}>
						<Avatar
							src={user?._id}
							alt={`Аватарка пользователя ${user.username}`}
						/>
					</Grid>
					<Grid item xs={11}>
						<div className={classes.tweetHeaderInfo}>
							<div>
								<b>{user.fullname}</b>
								<span className={classes.tweetUserName}> @{user.username}</span>
								<span> · </span>
								<span className={classes.tweetUserName}>
									{formatDate(new Date(createdAt))}
								</span>
							</div>

							<div className={classes.tweetPopupMenu}>
								<Menu
									id='long-menu'
									anchorEl={anchorEl}
									keepMounted
									open={open}
									onClose={handleClose}
								>
									{userData?.username === user.username ? (
										<div>
											<MenuItem onClick={handleClose}>
												Редактировать твит
											</MenuItem>
											<MenuItem onClick={handleDeleteTweet}>
												Удалить твит
											</MenuItem>
										</div>
									) : (
										<div>
											<MenuItem onClick={() => navigate(`/home/tweet/${_id}`)}>
												Просмотреть твит
											</MenuItem>
										</div>
									)}
								</Menu>
								<IconButton
									aria-label='more'
									aria-controls='long-menu'
									aria-haspopup='true'
									onClick={handleClick}
								>
									<MoreVertIcon />
								</IconButton>
							</div>
						</div>
						<Typography variant='body1' gutterBottom>
							{text}
							{images && (
								<div className={classes.imagesWrap}>
									{images.map(url => (
										<div key={url} className={classes.imagesItem}>
											<img src={url} alt='' />
										</div>
									))}
								</div>
							)}
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
					</Grid>
				</Grid>
			</Paper>
		</a>
	)
}
