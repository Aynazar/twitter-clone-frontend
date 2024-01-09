import Paper from '@mui/material/Paper'
import React from 'react'
import { Container, Grid } from '@mui/material'
import { useHomeStyles } from './theme'
import { SiteMenu } from '../../components/SiteMenu/SiteMenu'
import { Tags } from '../../components/Tags/Tags'
import { useDispatch } from 'react-redux'
import { fetchTweets } from '../../store/ducks/tweets/actionCreators'
import { Outlet } from 'react-router-dom'

export const Home: React.FC = () => {
	const classes = useHomeStyles()

	return (
		<Container maxWidth='lg' className={classes.wrapper}>
			<Grid container spacing={3}>
				<Grid className={classes.wrapperLeft} item xs={3}>
					<SiteMenu classes={classes} />
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.tweetsWrapper} variant='outlined'>
						<Outlet />
					</Paper>
				</Grid>
				<Grid className={classes.wrapperRight} item xs={3}>
					<Tags classes={classes} />
				</Grid>
			</Grid>
		</Container>
	)
}
