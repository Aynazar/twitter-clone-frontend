// interface
import { Action } from 'redux'
import { TweetState } from './state'
import { TweetActionsType } from '../actionCreators'
import { LoadingStatus } from '../../types'

export interface SetTweetDataActionInterface extends Action<TweetActionsType> {
	type: TweetActionsType.SET_TWEET_DATA
	payload: TweetState['data']
}

export interface FetchTweetDataActionInterface
	extends Action<TweetActionsType> {
	type: TweetActionsType.FETCH_TWEET_DATA
	payload: string
}

export interface SetTweetLoadingStateInterface
	extends Action<TweetActionsType> {
	type: TweetActionsType.SET_LOADING_STATE
	payload: LoadingStatus
}
