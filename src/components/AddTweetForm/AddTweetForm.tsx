import React from 'react'
import { useHomeStyles } from '../../pages/Home/theme'
import Avatar from '@mui/material/Avatar'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'
import classNames from 'classnames'
import { Snackbar, Typography } from '@mui/material'
import Alert from '@mui/material/Alert'
import { useDispatch } from 'react-redux'
import { fetchAddTweet, setAddFormState } from '../../store/ducks/tweets/actionCreators'
import { useSelector } from 'react-redux'
import { selectAddFormState } from '../../store/ducks/tweets/selectors'
import { AddFormState } from '../../store/ducks/tweets/contracts/state'
import { UploadImages } from '../UploadImages'
import { uploadImages } from '../../utils/uploadImage'

interface AddTweetFormProps {
	classes: ReturnType<typeof useHomeStyles>
	maxRows?: number
}

const MAX_LENGTH = 280

export interface ImageObj {
	blobUrl: string
	file: File
}

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
	classes,
	maxRows,
}: AddTweetFormProps): React.ReactElement => {
	const [images, setImages] = React.useState<ImageObj[]>([])
	const [textTweet, setTextTweet] = React.useState<string>('')
	const [visibleNotification, setVisibleNotification] = React.useState<boolean>(false);
	const textLimitPercent = Math.round((textTweet.length / 280) * 100)
	const dispatch = useDispatch()
	const addFormState = useSelector(selectAddFormState)

	const handleChangeTextarea = (
		e: React.FormEvent<HTMLTextAreaElement>
	): void => {
		if (e.currentTarget) {
			setTextTweet(e.currentTarget.value)
		}
	}

	const handleCloseNotification = (): void => {
		setVisibleNotification(false)
	}

	const handleClickAddTweet = async (): Promise<void> => {
		let result = []
		dispatch(setAddFormState(AddFormState.LOADING))
		for (let i = 0; i < images.length; i++) {
			const file = images[i].file
			const { data } = await uploadImages(file)
			result.push(data.url)
		}
		dispatch(fetchAddTweet({text: textTweet, images: result}))
		setTextTweet('')
		setImages([])
	}

	 React.useEffect(() => {
			if (addFormState === AddFormState.ERROR) {
				setVisibleNotification(true)
			}
		}, [addFormState])

	return (
		<div>
			<Snackbar
				open={visibleNotification}
				autoHideDuration={6000}
				onClose={handleCloseNotification}
			>
				<Alert
					onClose={handleCloseNotification}
					severity='error'
					sx={{ width: '100%' }}
				>
					Произошла ошибка при добавлении твита
				</Alert>
			</Snackbar>

			<div className={classes.addFormBody}>
				{
					<Avatar
						className={classes.tweetAvatar}
						alt={`Аватарка пользователя UserAvatar`}
						src={
							'http://192.168.0.14:8888/images/lftl47ke-twitter-image-0.ce93403fa34c6.jpg'
						}
					/>
				}
				<TextareaAutosize
					onChange={handleChangeTextarea}
					className={classes.addFormTextarea}
					placeholder='Что происходит?'
					value={textTweet}
					maxRows={maxRows}
				/>
			</div>
			<div className={classes.addFormBottom}>
				<div
					className={classNames(
						classes.tweetFooter,
						classes.addFormBottomActions
					)}
				>
					<UploadImages images={images} onChangeImages={setImages} />
				</div>
				<div className={classes.addFormBottomRight}>
					{textTweet && (
						<>
							<Typography style={{ fontSize: 14 }}>
								{MAX_LENGTH - textTweet.length}
							</Typography>
							<CircularProgress
								className={classes.progressBar}
								variant='determinate'
								value={textLimitPercent}
								style={
									textLimitPercent > 100 ? { color: '#DC143C' } : undefined
								}
							/>
						</>
					)}
					<Button
						disabled={textTweet.length >= MAX_LENGTH || !textTweet}
						color='primary'
						variant='contained'
						onClick={handleClickAddTweet}
					>
						{addFormState === AddFormState.LOADING ? (
							<CircularProgress color='inherit' size={16} />
						) : (
							'Твитнуть'
						)}
					</Button>
				</div>
			</div>
		</div>
	)
}
