import React from 'react'
import { Avatar, CircularProgress } from '@mui/material'
import { useSelector } from 'react-redux'
import { TweetHeader } from '../../components/AddTweetForm/TweetHeader'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'

//@ts-ignore
import styles from './user.module.scss'
import { Tweet } from '../../components/Tweet/Tweet'
import { useHomeStyles } from '../Home/theme'
import { selectIsTweetsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors'
import { useDispatch } from 'react-redux'
import { fetchTweets } from '../../store/ducks/tweets/actionCreators'
import { User } from '../../store/ducks/user/contracts/state'
import { AuthAPI } from '../../services/API/authAPI'
import { TabList } from '@mui/lab'
import Skeleton from '@mui/material/Skeleton'

export const UserProfile = () => {
	const [value, setValue] = React.useState('1')
	const [userData, setUserData] = React.useState<User | undefined>()
	const classes = useHomeStyles()
	const dispatch = useDispatch()
	const tweets = useSelector(selectTweetsItems)
	const isLoading = useSelector(selectIsTweetsLoading)

	React.useEffect(() => {
		const userId = window.location.pathname.split('/').pop()
		dispatch(fetchTweets())
		if(userId) {
			AuthAPI.getUserInfo(userId).then(({ data }) => {
				setUserData(data)
			})
		}
	}, [])

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue)
	}

	return (
		<>
			<TweetHeader
				title={userData?.fullname}
				backButton={true}
				HowManyTweets={tweets.length}
			/>

			<div className={styles.user__header}></div>

			<div className={styles.user__info}>
				{!userData ? (
					<Skeleton variant='circular' width={130} height={130} />
				) : (
					<Avatar className={styles['MuiAvatar-root']} />
				)}

				<div className={styles['user__info-wrap']}>
					{!userData ? (
						<Skeleton variant='text' width={200} height={50} />
					) : (
						<span className={styles['user__info-fullname']}>
							{userData?.fullname}
						</span>
					)}

					{!userData ? (
						<Skeleton variant='text' width={100} height={30} />
					) : (
						<span className={styles['user__info-username']}>
							@{userData?.username}
						</span>
					)}
				</div>
				<p className={styles['user__info-description']}>wrhwerhwerthet</p>
				<ul className={styles['user__info-details']}>
					<div>
						<li>Ufa, RB</li>
						<li>
							<a href='https://archakov.im' className={'link'} target='_blank'>
								archakov.im
							</a>
						</li>
					</div>
					<div>
						<li>Дата рождения: 6 июля 2007 г.</li>
						<li>Регистрация: ноябрь 2016 г.</li>
					</div>
				</ul>
			</div>

			<div className={styles['user__tab']}>
				<TabContext value={value}>
					<Box
						sx={{ borderBottom: 1, borderColor: 'divider' }}
						className={styles['MuiTabs-flexContainer']}
					>
						<TabList
							onChange={handleChange}
							aria-label='lab API tabs example'
							className={styles['MuiButtonBase-root-MuiTab-root']}
						>
							<Tab label='Твиты' value='1' />
							<Tab label='Твиты и ответы' value='2' />
							<Tab label='Медиа' value='3' />
							<Tab label='Нравится' value='4' />
						</TabList>
					</Box>
					<TabPanel value='1' className={styles['MuiTabPanel-root']}>
						{isLoading ? (
							<div className={classes.centered}>
								<CircularProgress />
							</div>
						) : (
							tweets.map(tweet => (
								<Tweet
									key={tweet._id}
									classes={classes}
									images={tweet.images}
									{...tweet}
								/>
							))
						)}
					</TabPanel>
					<TabPanel value='2' className={styles['MuiTabPanel-root']}>
						Item Two
					</TabPanel>
					<TabPanel value='3' className={styles['MuiTabPanel-root']}>
						Item Three
					</TabPanel>
					<TabPanel value='4' className={styles['MuiTabPanel-root']}>
						Item four
					</TabPanel>
				</TabContext>
			</div>
		</>
	)
}
