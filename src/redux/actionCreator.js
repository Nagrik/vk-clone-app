import {CREATE_COMMENT, CREATE_POST} from "./types";

export function createPost(post){
    return{
        type:CREATE_POST,
        payload:post
    }
}

export function createComment(comment){
    return{
        type:CREATE_COMMENT,
        payload:comment
    }
}