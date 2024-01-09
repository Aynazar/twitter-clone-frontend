import { LoadingStatus } from '../../types'
import { User } from '../../user/contracts/state'

export enum AddFormState {
	LOADING = 'LOADING',
	ERROR = 'ERROR',
	NEVER = 'NEVER',
}

export interface Tweet {
	_id: string
	text: string
	createdAt: string
	images?: [],
	user: User
}

export interface TweetsState {
	items: Tweet[]
	loadingState: LoadingStatus
	addFormState: AddFormState
}
