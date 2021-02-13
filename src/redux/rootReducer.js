import {combineReducers} from "redux";
import {postsReducer} from "./postsReducer";
import {InputReducer} from "./InputReducer";
import authReducer from "./auth";

export const rootReducer = combineReducers({
    posts: postsReducer,
    inputs:InputReducer,
    auth:authReducer
})