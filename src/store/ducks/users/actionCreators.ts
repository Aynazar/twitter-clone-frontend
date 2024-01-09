import { User } from "../user/contracts/state"
import { FetchUsersItemsActionInterface, SetUsersItemsActionInterface } from "./contracts/actionTypes"

export enum UsersActionsType {
	SET_ITEMS = 'users/SET_ITEMS',
	FETCH_ITEMS = 'users/FETCH_ITEMS',
}

export const setUsers = (payload: User[]): SetUsersItemsActionInterface => ({
	type: UsersActionsType.SET_ITEMS,
	payload,
})

export type UsersActions =
	| SetUsersItemsActionInterface
	| FetchUsersItemsActionInterface