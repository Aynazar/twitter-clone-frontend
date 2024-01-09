import { LoadingStatus } from './../types'
import { setUsers, UsersActionsType } from './actionCreators'
import { call, put, takeEvery } from 'redux-saga/effects'
import { AuthAPI } from '../../../services/API/authAPI'
import { FetchUsersItemsActionInterface } from './contracts/actionTypes'

export function* fetchUsersRequest() {
	/* try {
		// @ts-ignore
		const data = yield call(AuthAPI.signin, payload)
		yield put(setUsers(data))
		window.localStorage.setItem('token', data.token)
	} catch (error) {
		yield put(setUserLoadingStatus(LoadingStatus.ERROR))
	} */
}

export function* usersSaga() {
	// yield takeEvery(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest)
}
