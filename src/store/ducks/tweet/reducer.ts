import produce, { Draft } from 'immer'
import { LoadingStatus } from '../types'

import { TweetActions, TweetActionsType } from './actionCreators'
import { TweetState } from './contracts/state'

const initialTweetState: TweetState = {
	data: undefined,
	loadingState: LoadingStatus.NEVER,
}

export const tweetReducer = produce(
	(draft: Draft<TweetState>, action: TweetActions) => {
		switch (action.type) {
			case TweetActionsType.SET_TWEET_DATA: {
				draft.data = action.payload
				draft.loadingState = LoadingStatus.LOADED
				break
			}
			case TweetActionsType.FETCH_TWEET_DATA: {
				draft.data = undefined
				draft.loadingState = LoadingStatus.LOADING
				break
			}
			case TweetActionsType.SET_LOADING_STATE: {
				draft.loadingState = action.payload
				break
			}
			default:
				break
		}
	},
	initialTweetState
)
