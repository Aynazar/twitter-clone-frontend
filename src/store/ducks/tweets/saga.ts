import {
	FetchAddTweetActionInterface,
	RemoveTweetActionInterface,
} from './contracts/actionTypes'
import { call, put, takeLatest } from 'redux-saga/effects'
import {
	addTweet,
	setAddFormState,
	setTweetsLoadingState,
	TweetsActionsType,
} from './actionCreators'
import { TweetsAPI } from '../../../services/API/tweetsAPI'
import { AddFormState } from './contracts/state'
import { setTweets } from './actionCreators'
import { LoadingStatus } from '../types'

export function* fetchTweetsRequest() {
	try {
		const pathname = window.location.pathname
		const userId = pathname.includes('/user') ? pathname.split('/').pop() : undefined
		//@ts-ignore
		const items = yield call(TweetsAPI.fetchTweets, userId)
		yield put(setTweets(items))
	} catch (error) {
		yield put(setTweetsLoadingState(LoadingStatus.ERROR))
	}
}

export function* fetchRemoveTweetRequest({
	payload,
}: RemoveTweetActionInterface) {
	try {
		yield call(TweetsAPI.removeTweet, payload)
	} catch (error) {
		alert('Ошибка при удалении твита')
	}
}

export function* fetchAddTweetRequest({
	payload,
}: FetchAddTweetActionInterface) {
	try {
		//@ts-ignore
		const item = yield call(TweetsAPI.addTweet, payload)
		yield put(addTweet(item))
	} catch (error) {
		yield put(setAddFormState(AddFormState.ERROR))
	}
}

export function* tweetsSaga() {
	yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
	yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
	yield takeLatest(TweetsActionsType.REMOVE_TWEET, fetchRemoveTweetRequest)
}
