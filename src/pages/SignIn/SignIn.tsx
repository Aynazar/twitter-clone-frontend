import React from 'react'
import { Typography, Button, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

import TwitterIcon from '@mui/icons-material/Twitter'
import SearchIcon from '@mui/icons-material/Search'
import MessageIcon from '@mui/icons-material/ChatBubbleOutline'
import PeopleIcon from '@mui/icons-material/PeopleOutline'

import { LoginModal } from './components/LoginModal'
import { RegisterModal } from './components/RegisterModal'

export const useStylesSignIn = makeStyles((theme: Theme) => ({
	wrapper: {
		display: 'flex',
		height: '100vh',
	},
	blueSide: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#71C9F8',
		flex: '0 0 50%',
		overflow: 'hidden',
		position: 'relative',
	},
	blueSideBigIcon: {
		position: 'absolute',
		left: '50%',
		top: '53%',
		transform: 'translate(-50%, -50%)',
		width: '260%!important',
		height: '260%!important',
	},
	blueSideListInfo: {
		position: 'relative',
		listStyle: 'none',
		padding: 0,
		margin: 0,
		width: 380,
		'& h6': {
			display: 'flex',
			alignItems: 'center',
			color: 'white',
			fontWeight: 700,
			fontSize: 20,
		},
	},
	blueSideListInfoItem: {
		marginBottom: 40,
	},
	blueSideListInfoIcon: {
		fontSize: 32,
		marginRight: 15,
	},
	loginSide: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flex: '0 0 50%',
	},
	loginSideTwitterIcon: {
		fontSize: '45px!important',
	},
	loginSideWrapper: {
		width: 380,
	},
	loginSideTitle: {
		fontWeight: '700!important',
		fontSize: '32px!important',
		marginBottom: '60px!important',
		marginTop: '20px!important',
	},
	loginSideField: {
		marginBottom: 18,
	},
	registerField: {
		marginBottom: theme.spacing(5),
	},
	loginFormControl: {
		marginBottom: theme.spacing(2),
	},
	loginFormTextField: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
}))

export const SignIn = () => {
	const classes = useStylesSignIn()

	const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>()

	const handleClickOpenSignIn = (): void => {
		setVisibleModal('signIn')
	}

	const handleClickOpenSignUp = (): void => {
		setVisibleModal('signUp')
	}

	const handleCloseModal = (): void => {
		setVisibleModal(undefined)
	}

	return (
		<div className={classes.wrapper}>
			<section className={classes.blueSide}>
				<TwitterIcon color='primary' className={classes.blueSideBigIcon} />
				<ul className={classes.blueSideListInfo}>
					<li className={classes.blueSideListInfoItem}>
						<Typography variant='h6'>
							<SearchIcon className={classes.blueSideListInfoIcon} />
							Читайте о том, что вам интересно.
						</Typography>
					</li>
					<li className={classes.blueSideListInfoItem}>
						<Typography variant='h6'>
							<PeopleIcon className={classes.blueSideListInfoIcon} />
							Узнайте, о чем говорят в мире.
						</Typography>
					</li>
					<li className={classes.blueSideListInfoItem}>
						<Typography variant='h6'>
							<MessageIcon className={classes.blueSideListInfoIcon} />
							Присоединяйтесь к общению.
						</Typography>
					</li>
				</ul>
			</section>
			<section className={classes.loginSide}>
				<div className={classes.loginSideWrapper}>
					<TwitterIcon
						color='primary'
						className={classes.loginSideTwitterIcon}
					/>
					<Typography
						className={classes.loginSideTitle}
						gutterBottom
						variant='h4'
					>
						Узнайте, что происходит в мире прямо сейчас
					</Typography>
					<Typography>
						<b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
					</Typography>
					<br />
					<Button
						onClick={handleClickOpenSignUp}
						style={{ marginBottom: 20 }}
						variant='contained'
						color='primary'
						fullWidth
					>
						<b>Зарегистрироваться</b>
					</Button>
					<Button
						onClick={handleClickOpenSignIn}
						variant='outlined'
						color='primary'
						fullWidth
					>
						<b>Войти</b>
					</Button>

					<LoginModal
						open={visibleModal === 'signIn'}
						onClose={handleCloseModal}
					/>
					<RegisterModal
						open={visibleModal === 'signUp'}
						onClose={handleCloseModal}
					/>
				</div>
			</section>
		</div>
	)
}
