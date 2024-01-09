import { TagsState } from './contracts/state'

import {
	FetchTagsActionInterface,
	SetTagsActionInterface,
	SetTagsLoadingStateInterface,
} from './contracts/actionTypes'
import { LoadingStatus } from '../types'

export enum TagsActionsType {
	SET_ITEMS = 'tags/SET_ITEMS',
	FETCH_ITEMS = 'tags/FETCH_ITEMS',
	SET_LOADING_STATE = 'tags/SET_LOADING_STATE',
}
export const setTags = (
	payload: TagsState['items']
): SetTagsActionInterface => ({
	type: TagsActionsType.SET_ITEMS,
	payload,
})

export const fetchTags = (): FetchTagsActionInterface => ({
	type: TagsActionsType.FETCH_ITEMS,
})

export const setTagsLoadingState = (
	payload: LoadingStatus
): SetTagsLoadingStateInterface => ({
	type: TagsActionsType.SET_LOADING_STATE,
	payload,
})

export type TagsActions =
	| SetTagsActionInterface
	| FetchTagsActionInterface
	| SetTagsLoadingStateInterface
