import { LoadingStatus } from './../types';
import produce, { Draft } from 'immer'
import { UserState } from './contracts/state'
import { UserActions, UserActionsType } from './actionCreators'

const initialUserState: UserState = {
	data: undefined,
	status: LoadingStatus.NEVER,
}

export const UserReducer = produce(
	(draft: Draft<UserState>, action: UserActions) => {
		switch (action.type) {
			case UserActionsType.SET_USER_DATA: {
				draft.data = action.payload
				draft.status = LoadingStatus.SUCCESS
				break
			}
			case UserActionsType.SET_LOADING_DATA: {
				draft.status = action.payload
				break
			}
			case UserActionsType.FETCH_SIGN_OUT: {
				draft.status = LoadingStatus.LOADED
				draft.data = undefined
				break
			}

			default:
				break
		}
	},
	initialUserState
)
