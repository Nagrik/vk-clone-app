import React from 'react'
import classes from './RightSide.module.css'
import PageInfo from "./PageInfo/PageInfo";
import MyPhotos from "../MyPhotos/MyPhotos";
import PostForm from "./Input/TodoList/PostForm";
import Posts from "./Input/TodoList/Posts";
import UserPosts from "./UserPosts/UserPosts";
import DefaultPost from "./UserPosts/DefaultPost/DefaultPost";

export default function  RightSide (props) {

        return (
            <div className={classes.RightSide}>
                <PageInfo profile={props}/>
                <MyPhotos/>
                {/*<Posts/>*/}
                <PostForm/>
                <UserPosts/>
                <Posts/>
                <DefaultPost/>
            </div>
        )
}