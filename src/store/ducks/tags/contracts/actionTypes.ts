// interface
import { Action } from 'redux'
import { TagsState } from './state'
import { TagsActionsType } from '../actionCreators'
import { LoadingStatus } from '../../types'

export interface SetTagsActionInterface extends Action<TagsActionsType> {
	type: TagsActionsType.SET_ITEMS
	payload: TagsState['items']
}

export interface FetchTagsActionInterface extends Action<TagsActionsType> {
	type: TagsActionsType.FETCH_ITEMS
}

export interface SetTagsLoadingStateInterface extends Action<TagsActionsType> {
	type: TagsActionsType.SET_LOADING_STATE
	payload: LoadingStatus
}
