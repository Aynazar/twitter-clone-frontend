import produce, { Draft } from 'immer'
import { TagsState } from './contracts/state'
import { TagsActions, TagsActionsType } from './actionCreators'
import { LoadingStatus } from '../types'

const initialTagsState: TagsState = {
	items: [],
	loadingState: LoadingStatus.NEVER,
}

export const tagsReducer = produce(
	(draft: Draft<TagsState>, action: TagsActions) => {
		switch (action.type) {
			case TagsActionsType.SET_ITEMS: {
				draft.items = action.payload
				draft.loadingState = LoadingStatus.LOADED
				break
			}
			case TagsActionsType.FETCH_ITEMS: {
				draft.items = []
				draft.loadingState = LoadingStatus.LOADING
				break
			}
			case TagsActionsType.SET_LOADING_STATE: {
				draft.loadingState = action.payload
				break
			}
			default:
				break
		}
	},
	initialTagsState
)
