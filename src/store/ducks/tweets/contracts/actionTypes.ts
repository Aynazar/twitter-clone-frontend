// interface
import { Action } from 'redux'
import { Tweet, TweetsState } from './state'
import { AddFormState } from './state'
import { TweetsActionsType } from '../actionCreators'
import { LoadingStatus } from '../../types'

export interface SetTweetsActionInterface extends Action<TweetsActionsType> {
	type: TweetsActionsType.SET_TWEETS
	payload: TweetsState['items']
}

export interface FetchTweetsActionInterface extends Action<TweetsActionsType> {
	type: TweetsActionsType.FETCH_TWEETS
}

export interface SetTweetsLoadingStateInterface
	extends Action<TweetsActionsType> {
	type: TweetsActionsType.SET_LOADING_STATE
	payload: LoadingStatus
}

export interface FetchAddTweetActionInterface extends Action<TweetsActionsType> {
	type: TweetsActionsType.FETCH_ADD_TWEET
	payload: {
		text: string
		images: string[]
	}
}

export interface AddTweetActionInterface extends Action<TweetsActionsType> {
	type: TweetsActionsType.ADD_TWEET
	payload: Tweet
}

export interface SetAddFormStateActionInterface
	extends Action<TweetsActionsType> {
	type: TweetsActionsType.SET_ADD_FORM_STATE
	payload: AddFormState
}

export interface RemoveTweetActionInterface extends Action<TweetsActionsType> {
	type: TweetsActionsType.REMOVE_TWEET
	payload: string
}