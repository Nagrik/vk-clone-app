import {combineReducers} from "redux";
import {postsReducer} from "./postsReducer";
import {InputReducer} from "./InputReducer";
import {Friends} from "./Friends";
import authReducer from "./auth";
import {reducer as formReducer} from 'redux-form'
import AppReducer from "./AppReducer";

export const rootReducer = combineReducers({
    posts: postsReducer,
    inputs:InputReducer,
    auth:authReducer,
    friends:Friends,
    form:formReducer,
    app:AppReducer
})