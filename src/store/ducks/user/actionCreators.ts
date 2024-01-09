import { RegisterFormProps } from '../../../pages/SignIn/components/RegisterModal';
import { LoginFormProps } from './../../../pages/SignIn/components/LoginModal';
import { FetchAvatarActionInterface, FetchSignInActionInterface, FetchSignUpActionInterface, FetchUserDataActionInterface, SetUserDataActionInterface, SetUserLoadingStateActionInterface, SignOutActionInterface } from "./contracts/actionTypes"
import { UserState } from "./contracts/state"

export enum UserActionsType {
	SET_USER_DATA = 'user/SET_USER_DATA',
	FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
	FETCH_SIGN_UP = 'user/FETCH_SIGN_UP',
	FETCH_SIGN_OUT = 'user/FETCH_SIGN_OUT',
	FETCH_USER_DATA = 'user/FETCH_USER_DATA',
	SET_LOADING_DATA = 'user/SET_LOADING_DATA',
	FETCH_AVATAR = 'user/FETCH_AVATAR',
}
export const setUserData = (payload: UserState['data']): SetUserDataActionInterface => ({
	type: UserActionsType.SET_USER_DATA,
	payload,
})

export const fetchSignIn = (payload: LoginFormProps): FetchSignInActionInterface => ({
	type: UserActionsType.FETCH_SIGN_IN,
	payload,
})

export const fetchSignUp = (payload: RegisterFormProps): FetchSignUpActionInterface => ({
	type: UserActionsType.FETCH_SIGN_UP,
	payload,
})

export const fetchUserData = (): FetchUserDataActionInterface => ({
	type: UserActionsType.FETCH_USER_DATA,
})

export const fetchAvatar = (payload: string): FetchAvatarActionInterface => ({
	type:  UserActionsType.FETCH_AVATAR,
	payload,
})

export const signOut = (): SignOutActionInterface => ({
	type: UserActionsType.FETCH_SIGN_OUT,
})

export const setUserLoadingStatus = (payload: UserState['status']): SetUserLoadingStateActionInterface => ({
	type:  UserActionsType.SET_LOADING_DATA,
	payload,
})

export type UserActions =
	| SetUserDataActionInterface
	| SetUserLoadingStateActionInterface
	| FetchUserDataActionInterface
	| FetchAvatarActionInterface
	| SignOutActionInterface
