import { Action } from 'redux'
import { UsersActionsType } from '../actionCreators'
import { User } from '../../user/contracts/state';

export interface SetUsersItemsActionInterface extends Action<UsersActionsType> {
	type: UsersActionsType.SET_ITEMS
	payload: User[]
}

export interface FetchUsersItemsActionInterface extends Action<UsersActionsType> {
	type: UsersActionsType.FETCH_ITEMS
}
