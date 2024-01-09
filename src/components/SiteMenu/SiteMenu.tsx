import Typography from '@mui/material/Typography'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AddTweetForm } from '../AddTweetForm/AddTweetForm'
import { ModalBlock } from '../Modal/ModalBlock'
import TwitterIcon from '@mui/icons-material/Twitter'
import IconButton from '@mui/material/IconButton'
import TagIcon from '@mui/icons-material/Tag'
import HomeIcon from '@mui/icons-material/Home'
import NotificationsIcon from '@mui/icons-material/NotificationsNone'
import MessageIcon from '@mui/icons-material/MailOutline'
import BookMarkIcon from '@mui/icons-material/BookmarkBorder'
import ListIcon from '@mui/icons-material/ListAlt'
import PersonIcon from '@mui/icons-material/Person2Outlined'
import EditIcon from '@mui/icons-material/EditOutlined'
import { useHomeStyles } from '../../pages/Home/theme'
import { Button, Hidden } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUserData } from '../../store/ducks/user/selectors'
import { UserSideProfile } from '../UserSideProfile'

interface SiteMenuInterface {
	classes: ReturnType<typeof useHomeStyles>
}

export const SiteMenu: React.FC<SiteMenuInterface> = ({
	classes,
}: SiteMenuInterface): React.ReactElement => {
	const [visibleAddTweetPopup, setVisibleAddTweetPopup] =
		React.useState<boolean>(false)
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const navigate = useNavigate()
	const userData = useSelector(selectUserData)
	const open = Boolean(anchorEl)

	const openPopupAddTweet = () => {
		setVisibleAddTweetPopup(true)
	}

	const closePopupAddTweet = () => {
		setVisibleAddTweetPopup(false)
	}

	const handleProfileRoute = () => {
		navigate('/users/me')
	}

	const link = () => {
		navigate(`/user/${userData?._id}`)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		event.stopPropagation()
		event.preventDefault()
		setAnchorEl(event.currentTarget)
	}

	

	return (
		<ul className={classes.sideMenuList} style={{ height: '95vh' }}>
			<li className={classes.sideMenuListItem}>
				<Link to='/'>
					<IconButton style={{ paddingTop: 0 }} color='primary'>
						<TwitterIcon className={classes.logo} />
					</IconButton>
				</Link>
			</li>
			<li className={classes.sideMenuListItem}>
				<div>
					<Link to='/home' className={classes.sideMenuListFlexItem}>
						<HomeIcon className={classes.sideMenuListItemIcon} />
						<Hidden smDown>
							<Typography
								variant='h6'
								className={classes.sideMenuListItemLabel}
							>
								Главная
							</Typography>
						</Hidden>
					</Link>
				</div>
			</li>
			<li className={classes.sideMenuListItem}>
				<div className={classes.sideMenuListFlexItem}>
					<TagIcon className={classes.sideMenuListItemIcon} />
					<Hidden smDown>
						<Typography variant='h6' className={classes.sideMenuListItemLabel}>
							Поиск
						</Typography>
					</Hidden>
				</div>
			</li>
			<li className={classes.sideMenuListItem}>
				<div className={classes.sideMenuListFlexItem}>
					<NotificationsIcon className={classes.sideMenuListItemIcon} />
					<Hidden smDown>
						<Typography variant='h6' className={classes.sideMenuListItemLabel}>
							Уведомления
						</Typography>
					</Hidden>
				</div>
			</li>
			<li className={classes.sideMenuListItem}>
				<div className={classes.sideMenuListFlexItem}>
					<MessageIcon className={classes.sideMenuListItemIcon} />
					<Hidden smDown>
						<Typography variant='h6' className={classes.sideMenuListItemLabel}>
							Сообщения
						</Typography>
					</Hidden>
				</div>
			</li>
			<li className={classes.sideMenuListItem}>
				<div className={classes.sideMenuListFlexItem}>
					<BookMarkIcon className={classes.sideMenuListItemIcon} />
					<Hidden smDown>
						<Typography variant='h6' className={classes.sideMenuListItemLabel}>
							Закладки
						</Typography>
					</Hidden>
				</div>
			</li>
			<li className={classes.sideMenuListItem}>
				<div className={classes.sideMenuListFlexItem}>
					<ListIcon className={classes.sideMenuListItemIcon} />
					<Hidden smDown>
						<Typography variant='h6' className={classes.sideMenuListItemLabel}>
							Списки
						</Typography>
					</Hidden>
				</div>
			</li>
			<li className={classes.sideMenuListItem} onClick={link}>
				<div
					className={classes.sideMenuListFlexItem}
					onClick={handleProfileRoute}
				>
					<PersonIcon className={classes.sideMenuListItemIcon} />
					<Hidden smDown>
						<Typography variant='h6' className={classes.sideMenuListItemLabel}>
							Профиль
						</Typography>
					</Hidden>
				</div>
			</li>
			<li className={classes.sideMenuListItem}>
				<Button
					variant='contained'
					color='primary'
					className={classes.sideMenuButtonTweet}
					onClick={openPopupAddTweet}
				>
					<Hidden smDown>Твитнуть</Hidden>
					<Hidden smUp>
						<EditIcon />
					</Hidden>
				</Button>
			</li>
			<ModalBlock
				visible={visibleAddTweetPopup}
				title='Опубликовать твит'
				onClose={closePopupAddTweet}
			>
				<div className={classes.ModalBlockAddTweetForm}>
					<AddTweetForm classes={classes} />
				</div>
			</ModalBlock>

			<li
				style={{
					position: 'absolute',
					bottom: '0',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '5px',
				}}
			>
				<UserSideProfile
					classes={classes}
					anchorEl={anchorEl}
					open={open}
					handleClick={handleClick}
					handleClose={handleClose}
				/>
			</li>
		</ul>
	)
}
