import { IconButton } from '@mui/material'
import React from 'react'
import { useHomeStyles } from '../../pages/Home/theme'
import RemoveIcon from '@mui/icons-material/DeleteOutline'
import { ImageObj } from '../AddTweetForm/AddTweetForm'

interface ImageListProps {
	images: ImageObj[]
	classes: ReturnType<typeof useHomeStyles>
	removeImage?: (url: string) => void
}

export const ImageList: React.FC<ImageListProps> = ({
	classes,
	images,
	removeImage,
}) => {
	if (!images.length) {
		return null
	}
	return (
		<div className={classes.imageList}>
			{images.map(obj => (
				<div
					key={obj.blobUrl}
					className={classes.imageListItem}
					style={{ backgroundImage: `url(${obj.blobUrl})` }}
				>
					{removeImage && (
						<IconButton
							className={classes.imageListRemoveItem}
							onClick={
								removeImage ? (): void => removeImage(obj.blobUrl) : undefined
							}
						>
							<RemoveIcon style={{ fontSize: '18px' }} />
						</IconButton>
					)}
				</div>
			))}
		</div>
	)
}
