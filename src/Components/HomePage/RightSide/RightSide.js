import React, {Component} from 'react'
import classes from './RightSide.module.css'
import PageInfo from "./PageInfo/PageInfo";
import MyPhotos from "../MyPhotos/MyPhotos";
import InputActive from "./Input/TodoList/PostForm";
import PostForm from "./Input/TodoList/PostForm";
import Posts from "./Input/TodoList/Posts";

export default class RightSide extends Component {
    render() {
        return (
            <div className={classes.RightSide}>
                <PageInfo/>
                <MyPhotos/>
                {/*<Posts/>*/}
                <PostForm/>
                <Posts/>
            </div>
        )
    }
}