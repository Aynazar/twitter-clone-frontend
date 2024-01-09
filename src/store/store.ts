import { UsersState } from './ducks/users/contracts/state';
import { UserState } from './ducks/user/contracts/state';
import { TweetState } from './ducks/tweet/contracts/state';
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { TagsState } from "./ducks/tags/contracts/state";
import { TweetsState } from "./ducks/tweets/contracts/state";
import { rootReducer } from "./rootReducer";
import rootSaga from "./sagas";

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
	}
}

export interface RootState {
	tweets: TweetsState,
	tweet: TweetState,
	tags: TagsState,
	user: UserState,
	users: UsersState
}

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
	(typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)