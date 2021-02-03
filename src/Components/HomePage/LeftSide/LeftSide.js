import React, {Component} from 'react'
import HomeAvatar from "./Avatar/HomeAvatar";
import classes from './LeftSide.module.css'
import Friends from "./Friends/Friends";
import FriendsOnline from "./FriendsOnline/FriendsOnline";
import Group from "./Group/Group";
import Album from "./Albums/Albums";

export default class LeftSide extends Component {
    render() {
        return (
            <div className={classes.LeftSide}>
                <HomeAvatar/>
                <Friends/>
                <FriendsOnline/>
                <Group/>
                <Album/>
            </div>
        )
    }
}