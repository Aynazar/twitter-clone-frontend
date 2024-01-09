import { LoginFormProps } from './../../../../pages/SignIn/components/LoginModal';
// interface
import { Action } from 'redux'
import { LoadingStatus } from '../../types'
import { UserActionsType } from '../actionCreators'
import { User } from './state'
import { RegisterFormProps } from '../../../../pages/SignIn/components/RegisterModal';

export interface SetUserDataActionInterface extends Action<UserActionsType> {
	type: UserActionsType.SET_USER_DATA
	payload: User | undefined
}

export interface SetUserLoadingStateActionInterface
	extends Action<UserActionsType> {
	type: UserActionsType.SET_LOADING_DATA
	payload: LoadingStatus
}

export interface FetchSignInActionInterface extends Action<UserActionsType> {
	type: UserActionsType.FETCH_SIGN_IN
	payload: LoginFormProps
}

export interface FetchSignUpActionInterface extends Action<UserActionsType> {
	type: UserActionsType.FETCH_SIGN_UP
	payload: RegisterFormProps
}

export interface FetchUserDataActionInterface extends Action<UserActionsType> {
	type: UserActionsType.FETCH_USER_DATA
}

export interface FetchAvatarActionInterface extends Action<UserActionsType> {
	type: UserActionsType.FETCH_AVATAR,
	payload: string
}

export interface SignOutActionInterface extends Action<UserActionsType> {
	type: UserActionsType.FETCH_SIGN_OUT
}