import IconButton from '@mui/material/IconButton'
import ImageIcon from '@mui/icons-material/InsertPhotoOutlined'
import React from 'react'
import { useHomeStyles } from '../../pages/Home/theme'
import { ImageObj } from '../AddTweetForm/AddTweetForm'
import { ImageList } from '../ImageList'

interface UploadImageInterface {
	images: ImageObj[]
	onChangeImages: (callback: (prev: ImageObj[]) => ImageObj[]) => void
}

export const UploadImages: React.FC<UploadImageInterface> = ({
	images,
	onChangeImages,
}) => {
	const inputRef = React.useRef<HTMLInputElement>(null)
	const classes = useHomeStyles()

	const handleClickImage = () => {
		if (inputRef.current) {
			inputRef.current.click()
		}
	}

	const removeImage = (url: string) => {
		onChangeImages(prev => prev.filter(obj => obj.blobUrl !== url))
	}

	const handleChangeFileInput = React.useCallback((event: Event) => {
		if (event.target) {
			const target = event.target as HTMLInputElement
			const file = target.files?.[0]
			if (file) {
				const fileObj = new Blob([file])
				onChangeImages(images => [
					...images,
					{
						file,
						blobUrl: URL.createObjectURL(fileObj),
					},
				])
			}
			
		}
	}, [])

	React.useEffect(() => {
		if (inputRef.current) {
			inputRef.current.addEventListener('change', handleChangeFileInput)
		}
		return () => {
			if (inputRef.current) {
				inputRef.current.removeEventListener('change', handleChangeFileInput)
			}
		}
	}, [])

	return (
		<div>
			<div className='tweet-images'>
				<ImageList
					images={images}
					classes={classes}
					removeImage={removeImage}
				/>
			</div>
			<IconButton onClick={handleClickImage}>
				<ImageIcon color='primary' />
			</IconButton>
			<input ref={inputRef} type='file' id='upload-input' hidden />
		</div>
	)
}
