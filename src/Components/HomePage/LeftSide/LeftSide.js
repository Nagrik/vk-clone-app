import React, {Component} from 'react'
import HomeAvatar from "./Avatar/HomeAvatar";
import classes from './LeftSide.module.css'

export default class LeftSide extends Component {
    render() {
        return (
            <div className={classes.LeftSide}>
                <HomeAvatar/>
            </div>
        )
    }
}