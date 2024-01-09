import produce, { Draft } from 'immer'
import { AddFormState, TweetsState } from './contracts/state'
import { TweetsActions, TweetsActionsType } from './actionCreators'
import { LoadingStatus } from '../types'

const initialTweetsState: TweetsState = {
	items: [],
	addFormState: AddFormState.NEVER,
	loadingState: LoadingStatus.NEVER,
}

export const tweetsReducer = produce(
	(draft: Draft<TweetsState>, action: TweetsActions) => {
		switch (action.type) {
			case TweetsActionsType.SET_TWEETS: {
				draft.items = action.payload
				draft.loadingState = LoadingStatus.LOADED
				break
			}
			case TweetsActionsType.FETCH_TWEETS: {
				draft.items = []
				draft.loadingState = LoadingStatus.LOADING
				break
			}
			case TweetsActionsType.SET_LOADING_STATE: {
				draft.loadingState = action.payload
				break
			}

			case TweetsActionsType.FETCH_ADD_TWEET: {
				draft.addFormState = AddFormState.LOADING
				break
			}

			case TweetsActionsType.SET_ADD_FORM_STATE: {
				draft.addFormState = action.payload
				break
			}

			case TweetsActionsType.ADD_TWEET: {
				draft.items.splice(0, 0, action.payload)
				draft.addFormState = AddFormState.NEVER
				break
			}

			case TweetsActionsType.REMOVE_TWEET: {
				draft.items = draft.items.filter(obj => obj._id !== action.payload)
				break
			}

			default:
				break
		}
	},
	initialTweetsState
)
