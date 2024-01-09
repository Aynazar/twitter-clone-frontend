import { Button, FormControl, FormGroup, TextField } from '@mui/material'
import React from 'react'
import { ModalBlock } from '../../../components/Modal/ModalBlock'
import { useStylesSignIn } from '../SignIn'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { AlertColor } from '@mui/material/Alert'
import { Notification } from '../../../components/Notification'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSignIn } from '../../../store/ducks/user/actionCreators'
import { selectUserStatus } from '../../../store/ducks/user/selectors'
import { LoadingStatus } from '../../../store/ducks/types'

interface LoginModalProps {
	open: boolean
	onClose: () => void
}

export interface LoginFormProps {
	email: string
	password: string
}
	
const LoginFormSchema = yup.object().shape({
	email: yup.string().email('Неверная почта').required('Введите почту'),
	password: yup.string().min(6).required('Длинна пароля не менее 6 символов'),
})

export const LoginModal: React.FC<LoginModalProps> = ({
	open,
	onClose,
}: LoginModalProps) => {
	const classes = useStylesSignIn()
	const dispatch = useDispatch()
	const loadingStatus = useSelector(selectUserStatus)
	const openNotificationRef = React.useRef<
		(text: string, type: AlertColor) => void
	>(() => {})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormProps>({
		resolver: yupResolver(LoginFormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit = async (data: LoginFormProps) => {
		dispatch(fetchSignIn(data))
	}

	React.useEffect(() => {
		if (loadingStatus === LoadingStatus.SUCCESS) {
			openNotificationRef.current('Авторизация успешен.', 'success')
			onClose()
		} else if (loadingStatus === LoadingStatus.ERROR) {
			openNotificationRef.current('Неверный логин или пароль.', 'error')
		}
	}, [loadingStatus, onClose])

	return (
		<Notification>
			{
				callback => {
					openNotificationRef.current = callback;
					return (
						<ModalBlock
							visible={open}
							onClose={onClose}
							classes={classes}
							title='Войти в аккаунт'
						>
							<form onSubmit={handleSubmit(onSubmit)}>
								<FormControl
									className={classes.loginFormControl}
									component='fieldset'
									fullWidth
								>
									<div className={classes.loginFormTextField}>
										<TextField
											id='filled-password-input'
											label='E-mail'
											type='email'
											autoComplete='current-password'
											variant='filled'
											fullWidth
											error={!!errors.email}
											helperText={errors.email?.message}
											{...register('email')}
										/>
									</div>
									<div className={classes.loginFormTextField}>
										<TextField
											id='filled-password-input'
											label='Password'
											type='password'
											autoComplete='current-password'
											variant='filled'
											fullWidth
											error={!!errors.password}
											helperText={errors.password?.message}
											{...register('password')}
										/>
									</div>
									<FormGroup aria-label='position' row>
										<Button
											disabled={loadingStatus === LoadingStatus.LOADING}
											type='submit'
											variant='contained'
											color='primary'
											fullWidth
										>
											Войти
										</Button>
									</FormGroup>
								</FormControl>
							</form>
						</ModalBlock>
					)
				}
			}
		</Notification>
	)
}
