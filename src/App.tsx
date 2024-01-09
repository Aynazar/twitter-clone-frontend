import React from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { SignIn } from './pages/SignIn/SignIn'
import { Home } from './pages/Home'
import { FullTweets } from './components/FullTweets/FullTweets'
import { useHomeStyles } from './pages/Home/theme'
import { FullTweet } from './components/Tweet/FullTweet'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { selectIsAuth, selectUserStatus } from './store/ducks/user/selectors'
import { LoadingStatus } from './store/ducks/types'
import TwitterIcon from '@mui/icons-material/Twitter'
import { fetchUserData } from './store/ducks/user/actionCreators'
import { UserProfile } from './pages/User'
function App() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const isAuth = useSelector(selectIsAuth)
	const loadingStatus = useSelector(selectUserStatus)
	const isReady =
		loadingStatus !== LoadingStatus.NEVER &&
		loadingStatus !== LoadingStatus.LOADING

	React.useEffect(() => {
		dispatch(fetchUserData())
	}, [dispatch])

	React.useEffect(() => {
		if (!isAuth && isReady) {
			navigate('/signin')
		} else if (window.location.pathname === '/signin') {
			navigate('/home')
		}
	}, [isAuth, isReady, navigate])

	const classes = useHomeStyles()

	if (!isReady) {
		return (
			<div className={classes.centered}>
				<TwitterIcon style={{ width: 90, height: 90, color: '#1DA1F2' }} />
			</div>
		)
	}
	return (
		<Routes>
			<Route path='/signin' element={<SignIn />} />

			<Route path='/home' element={<Home />}>
				<Route path='' element={<FullTweets classes={classes} />} />
				<Route path='search' element={<span></span>} />
				<Route path='tweet/:_id' element={<FullTweet />} />
			</Route>

			<Route path='/' element={<Home />}>
				<Route path='user/:id' element={<UserProfile />} />
			</Route>

			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	)
}

export default App
