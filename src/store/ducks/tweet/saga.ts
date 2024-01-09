import { Tweet } from './../tweets/contracts/state'
import { call, put, takeEvery } from 'redux-saga/effects'
import {
	setTweetData,
	setTweetsLoadingState,
	TweetActionsType,
} from './actionCreators'
import { TweetsAPI } from '../../../services/API/tweetsAPI'
import { FetchTweetDataActionInterface } from './contracts/actionTypes'
import { LoadingStatus } from '../types'

export function* fetchTweetRequest({
	payload: tweetId,
}: FetchTweetDataActionInterface) {
	try {
		const data: Tweet = yield call(TweetsAPI.fetchTweetData, tweetId)
		yield put(setTweetData(data))
	} catch (error) {
		yield put(setTweetsLoadingState(LoadingStatus.ERROR))
	}
}

export function* tweetSaga() {
	yield takeEvery(TweetActionsType.FETCH_TWEET_DATA, fetchTweetRequest)
}
