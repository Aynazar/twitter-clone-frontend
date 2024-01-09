import { makeStyles } from '@mui/styles'
import grey from '@mui/material/colors/grey'
import { colors, Theme } from '@mui/material'

export const useHomeStyles = makeStyles((theme: Theme) => ({
	centered: {
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
	},
	wrapper: {
		height: '100vh',
	},
	logo: {
		margin: '10px 0',
		fontSize: '42px!important',
	},
	logoIcon: {
		fontSize: 36,
	},
	sideMenuList: {
		position: 'sticky',
		top: 0,
		listStyle: 'none',
		padding: 0,
		margin: 0,
		maxWidth: 230,
	},
	userName: {
		color: grey[500],
		fontSize: '15px',
	},
	sideMenuListItem: {
		cursor: 'pointer',
		transition: 'all .2s linear',
		'&:hover': {
			'& div': {
				backgroundColor: 'rgba(29, 161, 242, 0.1)',
				'& h6': {
					color: theme.palette.primary.main,
				},
				'& svg path': {
					fill: theme.palette.primary.main,
				},
			},
		},

		'& div': {
			display: 'inline-flex',
			alignItems: 'center',
			position: 'relative',
			padding: '0 25px 0 20px',
			borderRadius: 30,
			height: 50,
			marginBottom: 15,
			transition: 'background-color 0.1s ease-in-out',
		},
	},
	imagesItem: {
		width: 80,
		height: 80,
		overflow: 'hidden',
		borderRadius: 6,
		margin: '0 10px 10px 0',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		position: 'relative',
		'& img': {
			maxWidth: 80,
			maxHeight: 80,
		},
	},
	imagesWrap: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'start',
		margin: '10px 0 10px 0',
	},
	sideMenuListItemLabel: {
		fontWeight: 700,
		fontSize: 20,
		marginLeft: 15,
	},
	sideMenuListItemIcon: {
		fontSize: '32px!important',
		marginLeft: -5,
	},
	sideMenuListFlexItem: {
		display: 'flex',
		gap: '15px',
		justifyContent: 'center',
		textDecoration: 'none',
		color: 'inherit',
	},
	sideMenuTweetButton: {
		padding: theme.spacing(3.2),
		marginTop: theme.spacing(2),
	},
	tweetsWrapper: {
		borderRadius: 0,
		minHeight: '100vh',
		borderTop: '0',
		borderBottom: '0',
	},
	tweetsCentred: {
		marginTop: 50,
		textAlign: 'center',
	},
	tweetsHeader: {
		display: 'flex',
		alignItems: 'center',
		flex: 1,
		borderTop: '0',
		borderLeft: '0',
		borderRight: '0',
		borderRadius: 0,
		padding: '10px 15px',
		'& h6': {
			fontWeight: 800,
		},
	},
	tweetNoPaper: {
		borderTop: '0!important',
		borderLeft: '0 !important',
		borderRight: '0 !important',
		borderRadius: '0 !important',
	},
	FullTweet: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	tweetsHeaderUser: {
		display: 'flex',
		alignItems: 'center',
	},
	tweetsHeaderBackButton: {
		marginRight: 20,
	},
	tweet: {
		display: 'flex',
		cursor: 'pointer',
		alignItems: 'flex-start!important',
		paddingTop: '15px!important',
		paddingLeft: '20px!important',
		position: 'relative',
		'&:hover': {
			backgroundColor: 'rgb(245, 248, 250)',
		},
	},
	tweetWrapper: {
		color: 'inherit',
		textDecoration: 'none',
	},
	tweetAvatar: {
		width: theme.spacing(6.5),
		height: theme.spacing(6.5),
		marginRight: 15,
	},
	tweetHeader: {
		display: 'flex',
		alignItems: 'center!important',
		borderRadius: '0!important',
		borderLeft: '0!important',
		borderRight: '0!important',
		borderTop: '0!important',
		padding: '10px 15px!important',
		gap: theme.spacing(3),
		'& h6': {
			fontWeight: 800,
		},
	},
	addTweetFormData: {
		padding: '20px 25px',
	},
	tweetContent: {
		flex: 1,
	},
	tweetFooter: {
		display: 'flex',
		position: 'relative',
		left: -13,
		justifyContent: 'space-between',
		maxWidth: 450,
		gap: '15px',
	},
	tweetUserName: {
		color: grey[500],
	},
	fullTweet: {
		padding: 22,
		paddingBottom: 0,
	},
	fullTweetText: {
		fontSize: 24,
		marginTop: 20,
		marginBottom: 20,
		lineHeight: 1.3125,
		wordBreak: 'break-word',
	},
	fullTweetFooter: {
		margin: '0 auto',
		borderTop: '1px solid #E6ECF0',
		left: 0,
		maxWidth: '100%',
		justifyContent: 'space-around',
		padding: '2px 0',
		marginTop: 20,
	},
	rightSide: {
		paddingTop: 20,
		position: 'sticky',
		top: 0,
	},
	rightSideBlock: {
		backgroundColor: '#F5F8FA',
		borderRadius: 15,
		marginTop: 20,
		'& .MuiList-root': {
			paddingTop: 0,
		},
	},
	rightSideBlockHeader: {
		borderTop: 0,
		borderLeft: 0,
		borderRight: 0,
		backgroundColor: 'transparent',
		padding: '13px 18px',
		'& b': {
			fontSize: 20,
			fontWeight: 800,
		},
	},
	rightSideBlockItem: {
		cursor: 'pointer',
		'& .MuiTypography-body1': {
			fontWeight: 700,
		},
		'& .MuiListItemAvatar-root': {
			minWidth: 50,
		},
		'& .MuiListItemText-root': {
			margin: 0,
		},
		'&:hover': {
			backgroundColor: '#edf3f6',
		},
		'& a': {
			color: 'inherit',
			textDecoration: 'none',
		},
	},
	addForm: {
		padding: 20,
	},
	addFormBody: {
		display: 'flex',
		width: '100%',
	},
	addFormBottom: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	addFormBottomActions: {
		marginTop: 10,
		paddingLeft: 70,
	},
	addFormTextarea: {
		width: '100%',
		border: 0,
		fontSize: 20,
		outline: 'none',
		fontFamily: 'inherit',
		resize: 'none',
	},
	addFormBottomLine: {
		height: 12,
		backgroundColor: '#E6ECF0',
	},
	addFormCircleProgress: {
		position: 'relative',
		width: 20,
		height: 20,
		margin: '0 10px',
		'& .MuiCircularProgress-root': {
			position: 'absolute',
		},
	},
	addFormBottomRight: {
		display: 'flex',
		alignItems: 'center',
	},
	sideProfile: {
		display: 'flex',
		alignItems: 'center',
		position: 'fixed',
		bottom: 30,
		padding: '10px 15px',
		width: 260,
		borderRadius: 50,
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: colors.lightBlue[50],
		},
	},
	sideProfileInfo: {
		flex: 1,
		marginLeft: 10,
		'& b': {
			fontSize: 16,
		},
	},
	imagesList: {
		display: 'flex',
		alignItems: 'center',
		marginTop: 20,
		flexWrap: 'wrap',
	},
	imagesListItem: {
		width: 50,
		height: 50,
		marginRight: 10,
		marginBottom: 10,
		position: 'relative',
		'& img': {
			width: '100%',
			height: '100%',
			'object-fit': 'cover',
			borderRadius: 6,
		},
		'& svg path': {
			fill: 'white',
		},
	},
	profileMenu: {
		top: 'auto !important',
		left: '17.5% !important',
		width: '250px !important',
		bottom: '110px !important',
		'box-shadow': '1px 1px 10px rgba(0, 0, 0, 0.08)',
		'border-radius': '20px',
		border: '1px solid rgba(0, 0, 0, 0.1)',
		'& a': {
			color: 'black',
			textDecoration: 'none',
		},
	},
	imagesListItemRemove: {
		position: 'absolute',
		top: -8,
		right: -6,
		padding: '0 !important',
		backgroundColor: '#ff4d4d !important',
	},
	wrapperLeft: {
		position: 'sticky',
		top: 0,
	},
	wrapperRight: {
		position: 'sticky',
		top: 0,
		zIndex: 0,
	},
	sideMenuButtonTweet: {
		color: '#fff',
		height: 40,
		padding: '0 20px',
		width: '80%',
	},
	borderAddTweet: {
		height: '10px!important',
		width: '100%!important',
		backgroundColor: 'rgba(0, 0, 0, 0.12)!important',
	},
	fullTweetDate: {
		fontSize: '18px!important',
		color: '#9e9e9e!important',
		marginBottom: '0!important',
		paddingBottom: '15px!important',
	},
	tweetHeaderUser: {
		display: 'flex!important',
		flexDirection: 'column',
		padding: '10px 15px 0 15px!important',
		border: '0!important',
		borderBottom: '1px solid #e2e2e2 !important',
	},
	progressBar: {
		margin: '0 15px!important',
	},

	tweetHeaderInfo: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	ModalBlockAddTweetForm: {
		margin: '20px 0',
	},
	tweetPopupMenu: {
		position: 'absolute',
		right: 0,
		top: 0,
	},
	actualList: {
		width: '100%',
		backgroundColor: '#f5f7f9',
		marginTop: '20px!important',
		borderRadius: '10px!important',
	},
	actualItem: {
		display: 'flex!important',
		flexDirection: 'column',
		alignItems: 'flex-start!important',
		borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: 'rgba(0, 0, 0, 0.1)',
		},
	},
	actualTitle: {
		fontWeight: 'bold!important',
		fontSize: '18!important',
		cursor: 'default',
	},
	actualItemAuthor: {
		display: 'flex!important',
		alignItems: 'center!important',
		justifyContent: 'space-between!important',
		padding: '10px 15px!important',
		borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: 'rgba(0, 0, 0, 0.1)',
		},
	},
	actualItemLink: {
		textDecoration: 'none!important',
	},
	actualItemStart: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '10px',
	},
	imageList: {
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
		marginTop: 20,
	},
	imageListItem: {
		width: 80,
		height: 80,
		borderRadius: 6,
		marginRight: 15,
		marginBottom: 15,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		'& svg path': {
			fill: 'white',
		},
	},
	imageListRemoveItem: {
		position: 'relative',
		top: -5,
		right: -63,
		zIndex: 1,
		padding: '4px !important',
		backgroundColor: '#ff4d4d !important',
	},
	userSideProfileWrap: {
		display: 'flex',
		alignItems: 'center',
		padding: '10px 15px',
		borderRadius: 50,
		'&:hover': {
			backgroundColor: 'rgba(29, 161, 242, 0.1)',
		},
	},
	userSideProfileMenu: {
		top: '-100px!important',
		left: '10px!important',
		bottom: '120px!important',
		'& li': {
			width: '240px!important',
		},
		'& div': {
			borderRadius: 20,
			boxShadow: '0 0 15px rgba(0,0,0, 0.2)'
		},
	},
}))
