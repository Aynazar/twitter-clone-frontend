import { CircularProgress, InputBase, List, ListItem, styled, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHomeStyles } from '../../pages/Home/theme'
import { fetchTags } from '../../store/ducks/tags/actionCreators'
import { selectIsTagsLoading, selectTagsItems } from '../../store/ducks/tags/selectors'
import { Users } from '../Users/Users'

interface TagsProps {
	classes: ReturnType<typeof useHomeStyles>
}

export const SearchTextField = styled(InputBase)(({ theme }) => ({
	input: {
		borderRadius: 30,
		background: '#e6ecf0',
		height: 45,
		padding: '0 25px',

		margin: '15px 0'
	},
}))

export const Tags: React.FC<TagsProps> = ({classes}:TagsProps): React.ReactElement => {
	const dispatch = useDispatch();
	const tags = useSelector(selectTagsItems)
	const isLoading = useSelector(selectIsTagsLoading)

	React.useEffect(() => {
		dispatch(fetchTags())
	}, [dispatch])
	return (
		<div>
			<SearchTextField fullWidth placeholder='Поиск по Твиттеру' />
			<List className={classes.actualList}>
				<ListItem>
					<Typography className={classes.actualTitle}>
						Актуальные темы
					</Typography>
				</ListItem>
				{isLoading ? (
					<CircularProgress />
				) : (
					tags.map(tag => (
						<Link
							key={tag._id}
							className={classes.actualItemLink}
							to={`/home/search?q=${tag.name}`}
						>
							<ListItem className={classes.actualItem}>
								<Typography style={{ fontWeight: 'bold', color: '#000' }}>
									{tag.name}
								</Typography>
								<Typography
									style={{ color: 'rgba(0, 0, 0, 0.4)', fontSize: 14 }}
								>
									Твитов: {tag.count}
								</Typography>
							</ListItem>
						</Link>
					))
				)}
			</List>
			<Users classes={classes} />
		</div>
	)
}
