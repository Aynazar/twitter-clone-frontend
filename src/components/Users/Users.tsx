import { List, Typography, IconButton, Avatar, ListItem } from '@mui/material'
import React from 'react'
import { useHomeStyles } from '../../pages/Home/theme'
import PersonAddIcon from '@mui/icons-material/PersonAddAlt'
import { useSelector } from 'react-redux'
import { selectUsersItems } from '../../store/ducks/users/selectors'

interface UsersProps {
	classes: ReturnType<typeof useHomeStyles>
}

export const Users: React.FC<UsersProps> = ({classes}: UsersProps): React.ReactElement => {
	const items = useSelector(selectUsersItems)

	return (
		<>
			<List className={classes.actualList}>
				<ListItem>
					<Typography className={classes.actualTitle}>Кого читать?</Typography>
				</ListItem>
				{items.map((obj, index) => (
					<ListItem className={classes.actualItemAuthor} key={index}>
						<div className={classes.actualItemStart}>
							<Avatar
								src='https://images.unsplash.com/photo-1545996124-0501ebae84d0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
								alt='Аватарка пользователя'
							/>
							<div>
								<Typography style={{ fontWeight: 'bold' }}>
									{obj.fullname}
								</Typography>
								<Typography
									style={{ color: 'rgba(0, 0, 0, 0.4)', fontSize: 14 }}
								>
									@{obj.username}
								</Typography>
							</div>
						</div>
						<IconButton>
							<PersonAddIcon color='primary' />
						</IconButton>
					</ListItem>
				))}
			</List>
		</>
	)
}
