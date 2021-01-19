import React, {Component} from 'react'
import classes from './RightSide.module.css'
import PageInfo from "./PageInfo/PageInfo";
import MyPhotos from "../MyPhotos/MyPhotos";

export default class RightSide extends Component {
    render() {
        return (
            <div className={classes.RightSide}>
                <PageInfo/>
                <MyPhotos/>
            </div>
        )
    }
}