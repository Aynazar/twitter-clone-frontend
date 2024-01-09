import { call, put, takeEvery } from 'redux-saga/effects'
import { setTagsLoadingState, TagsActionsType } from './actionCreators'
import { tagsAPI } from '../../../services/API/tagsAPI'
import { setTags } from './actionCreators'
import { LoadingStatus } from '../types'

export function* fetchTagsRequest() {
	try {
		const items = (yield call(tagsAPI.fetchTags)) as []
		yield put(setTags(items))
	} catch (error) {
		yield put(setTagsLoadingState(LoadingStatus.ERROR))
	}
}

export function* tagsSaga() {
	yield takeEvery(TagsActionsType.FETCH_ITEMS, fetchTagsRequest)
}
