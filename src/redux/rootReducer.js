import {combineReducers} from "redux";
import {postsReducer} from "./postsReducer";
import {InputReducer} from "./InputReducer";

export const rootReducer = combineReducers({
    posts: postsReducer,
    inputs:InputReducer
})