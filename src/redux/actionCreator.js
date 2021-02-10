import {CREATE_COMMENT, CREATE_INPUT, CREATE_POST} from "./types";

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

export function createInput(input){
    return{
        type:CREATE_INPUT,
        payload:input
    }
}