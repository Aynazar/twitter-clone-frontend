import { LoadingStatus } from './../types';
import produce, { Draft } from 'immer'
import { UsersState } from './contracts/state';
import { UsersActions, UsersActionsType } from './actionCreators';

const initialUsersState: UsersState = {
	items: [],
	status: LoadingStatus.NEVER,
}

export const UsersReducer = produce(
	(draft: Draft<UsersState>, action: UsersActions) => {
		switch (action.type) {
			case UsersActionsType.SET_ITEMS: {
				draft.items = action.payload
				draft.status = LoadingStatus.LOADED
				break
			}

			case UsersActionsType.FETCH_ITEMS: {
				draft.status = LoadingStatus.LOADING
				break
			}

			default:
				break
		}
	},
	initialUsersState
)
