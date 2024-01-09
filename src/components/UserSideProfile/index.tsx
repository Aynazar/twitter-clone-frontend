import { Avatar, Menu, MenuItem, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUserData } from '../../store/ducks/user/selectors'
import IconButton from '@mui/material/IconButton'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useHomeStyles } from '../../pages/Home/theme'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signOut } from '../../store/ducks/user/actionCreators'


interface UserSideProfileProps {
	classes: ReturnType<typeof useHomeStyles>
	anchorEl: HTMLElement | null
	open: boolean
	handleClose: () => void
	handleClick: (event: React.MouseEvent<HTMLElement>) => void
}

export const UserSideProfile: React.FC<UserSideProfileProps> = ({
	classes,
	anchorEl,
	open,
	handleClick,
	handleClose,
}) => {
	const userData = useSelector(selectUserData)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleSignOut = () => {
		window.localStorage.removeItem('token')
		dispatch(signOut())
	}

	return (
		<>
			<div
				onClick={handleClick}
				className={classes.userSideProfileWrap}
				style={{ display: 'flex', alignItems: 'center' }}
			>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '10px',
						cursor: 'pointer',
					}}
				>
					<Avatar
						src={userData?.avatar}
						alt={`Аватарка пользователя ${userData?.fullname}`}
					/>
					<div>
						<Typography
							variant='h6'
							style={{
								fontSize: '16px',
								fontWeight: '700',
								whiteSpace: 'nowrap',
							}}
						>
							{userData?.fullname}
						</Typography>
						<span className={classes.userName}>@{userData?.username}</span>
					</div>
				</div>
				<IconButton>
					<ExpandMoreIcon />
				</IconButton>
			</div>
			<Menu
				id='long-menu'
				anchorEl={anchorEl}
				keepMounted
				open={open}
				onClose={handleClose}
				className={classes.userSideProfileMenu}
			>
				<MenuItem onClick={() => navigate(`/user/${userData?._id}`)}>
					Профиль
				</MenuItem>
				<MenuItem onClick={handleSignOut}>Выйти с аккаунта</MenuItem>
			</Menu>
		</>
	)
}
