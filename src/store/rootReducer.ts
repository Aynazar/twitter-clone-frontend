import { UsersReducer } from './ducks/users/reducer';
import { UserReducer } from './ducks/user/reducer';
import { combineReducers } from "redux";
import { tagsReducer } from "./ducks/tags/reducer";
import { tweetReducer } from "./ducks/tweet/reducer";
import { tweetsReducer } from "./ducks/tweets/reducer";

export const rootReducer = combineReducers({
	tweets: tweetsReducer,
	tweet: tweetReducer,
	tags: tagsReducer,
	user: UserReducer,
	users: UsersReducer
})