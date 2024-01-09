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
import { fetchSignUp } from '../../../store/ducks/user/actionCreators'
import { selectUserStatus } from '../../../store/ducks/user/selectors'
import { LoadingStatus } from '../../../store/ducks/types'

interface RegisterModalProps {
	open: boolean
	onClose: () => void
}

export interface RegisterFormProps {
	fullname: string
	username: string
	email: string
	password: string
	password2: string
}

const RegisterFormSchema = yup.object().shape({
	fullname: yup.string().required('Введите свое полное имя'),
	email: yup.string().email('Неверная почта').required('Введите почту'),
	username: yup.string().required('Введите уникальный логин.'),
	password: yup.string().min(6).required('Длинна пароля не менее 6 символов'),
	password2: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают'),
})

export const RegisterModal: React.FC<RegisterModalProps> = ({
	open,
	onClose,
}: RegisterModalProps) => {
	const classes = useStylesSignIn()
	const dispatch = useDispatch()
	const loadingStatus = useSelector(selectUserStatus)
	const openNotificationRef = React.useRef<
		(text: string, type: AlertColor) => void
	>(() => {})
/* 
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormProps>({
		resolver: yupResolver(RegisterFormSchema),
		defaultValues: {
			email: '',
			username: '',
			fullname: '',
			password: '',
			password2: ''
		},
	}) */

	 const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormProps>({
        resolver: yupResolver(RegisterFormSchema)
    });

	const onSubmit = async (data: RegisterFormProps) => {
		try {
			dispatch(fetchSignUp(data))
		} catch (error) {

		}
	}

	React.useEffect(() => {
		if (loadingStatus === LoadingStatus.SUCCESS) {
			openNotificationRef.current('Регистрация прошла успешна. Проверьте свой электронную почту и подтвердите аккаунт!', 'success')
			onClose()
		} else if (loadingStatus === LoadingStatus.ERROR) {
			openNotificationRef.current('Произошла ошибка при регистрации', 'error')
		}
	}, [loadingStatus, onClose])

	return (
		<Notification>
			{
				callback => {
					openNotificationRef.current = callback
					return (
						<ModalBlock
							visible={open}
							onClose={onClose}
							classes={classes}
							title='Создайте учетную запись'
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
											label='Имя'
											type='text'
											autoComplete='current-password'
											variant='filled'
											fullWidth
											error={!!errors.fullname}
											helperText={errors.fullname?.message}
											{...register('fullname')}
										/>
									</div>
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
											label='Введите логин'
											type='text'
											autoComplete='current-password'
											variant='filled'
											fullWidth
											error={!!errors.username}
											helperText={errors.username?.message}
											{...register('username')}
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
									<div className={classes.loginFormTextField}>
										<TextField
											id='filled-password-input'
											label='Password'
											type='password2'
											autoComplete='current-password'
											variant='filled'
											fullWidth
											error={!!errors.password2}
											helperText={errors.password2?.message}
											{...register('password2')}
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
											Регистрация
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
