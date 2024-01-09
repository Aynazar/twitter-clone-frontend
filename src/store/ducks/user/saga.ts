import { LoadingStatus } from './../types'
import {
	setUserData,
	setUserLoadingStatus,
	UserActionsType,
} from './actionCreators'
import { FetchAvatarActionInterface, FetchSignInActionInterface, FetchSignUpActionInterface } from './contracts/actionTypes'
import { call, put, takeLatest } from 'redux-saga/effects'
import { AuthAPI } from '../../../services/API/authAPI'
import { imagesAPI } from '../../../services/API/imagesAPI'

export function* fetchSignInRequest({ payload }: FetchSignInActionInterface) {
	try {
		yield put(setUserLoadingStatus(LoadingStatus.LOADING))
		// @ts-ignore
		const data = yield call(AuthAPI.signin, payload)
		window.localStorage.setItem('token', data.token)
		yield put(setUserData(data))
	} catch (error) {
		yield put(setUserLoadingStatus(LoadingStatus.ERROR))
	}
}

export function* fetchSignUpRequest({ payload }: FetchSignUpActionInterface) {
	try {
		yield put(setUserLoadingStatus(LoadingStatus.LOADING))
		// @ts-ignore
		yield call(AuthAPI.signUp, payload)
		yield put(setUserLoadingStatus(LoadingStatus.SUCCESS))
	} catch (error) {
		yield put(setUserLoadingStatus(LoadingStatus.ERROR))
	}
}

export function* fetchUserDataRequest() {
	try {
		yield put(setUserLoadingStatus(LoadingStatus.LOADING))
		// @ts-ignore
		const { data } = yield call(AuthAPI.getMe)
		yield put(setUserData(data))
	} catch (error) {
		yield put(setUserLoadingStatus(LoadingStatus.ERROR))
	}
}

export function* fetchAvatarRequest({payload}: FetchAvatarActionInterface) {
	try {
		yield put(setUserLoadingStatus(LoadingStatus.LOADING))
		// @ts-ignore
		const { data } = yield call(imagesAPI.getAvatar(payload))
		console.log(data)
		//yield put(setUserData(data))
	} catch (error) {
		yield put(setUserLoadingStatus(LoadingStatus.ERROR))
	}
}

export function* userSaga() {
	yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest)
	yield takeLatest(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest)
	yield takeLatest(UserActionsType.FETCH_USER_DATA, fetchUserDataRequest)
	yield takeLatest(UserActionsType.FETCH_AVATAR, fetchAvatarRequest)
}
