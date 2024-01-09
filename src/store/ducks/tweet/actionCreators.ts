import { TweetState } from './contracts/state'

import {
	FetchTweetDataActionInterface,
	SetTweetDataActionInterface,
	SetTweetLoadingStateInterface,
} from './contracts/actionTypes'
import { LoadingStatus } from '../types'

export enum TweetActionsType {
	SET_TWEET_DATA = 'tweet/SET_DATA',
	FETCH_TWEET_DATA = 'tweet/FETCH_DATA',
	SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
}
export const setTweetData = (
	payload: TweetState['data']
): SetTweetDataActionInterface => ({
	type: TweetActionsType.SET_TWEET_DATA,
	payload,
})

export const fetchTweetData = (
	payload: string
): FetchTweetDataActionInterface => ({
	type: TweetActionsType.FETCH_TWEET_DATA,
	payload,
})

export const setTweetsLoadingState = (
	payload: LoadingStatus
): SetTweetLoadingStateInterface => ({
	type: TweetActionsType.SET_LOADING_STATE,
	payload,
})

export type TweetActions =
	| SetTweetDataActionInterface
	| FetchTweetDataActionInterface
	| SetTweetLoadingStateInterface
