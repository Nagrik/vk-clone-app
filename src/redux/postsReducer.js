import {CREATE_COMMENT, CREATE_POST} from "./types";

const initialState = {
    posts:[],
    fetchedPosts:[],
    comments:[]
}


export const postsReducer = (state = initialState, action) =>{
    switch (action.type){
        case CREATE_POST:
            return {...state,posts:state.posts.concat([action.payload])}
        case CREATE_COMMENT:
            return {...state,comments: state.comments.concat([action.payload])}
            default:return state
    }
}