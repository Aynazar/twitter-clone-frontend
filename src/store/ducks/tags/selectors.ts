import { createSelector } from 'reselect'
import { LoadingStatus } from '../types'
import { RootState } from './../../store'
import { TagsState } from './contracts/state'

export const selectTags = (state: RootState): TagsState => state.tags

export const selectLoadingState = (state: RootState): LoadingStatus =>
	selectTags(state).loadingState

export const selectIsTagsLoading = (state: RootState): boolean =>
	selectLoadingState(state) === LoadingStatus.LOADING

export const selectIsTagsLoaded = (state: RootState): boolean =>
	selectLoadingState(state) === LoadingStatus.LOADED

export const selectTagsItems = createSelector(
	selectTags,
	tweets => tweets.items
)
