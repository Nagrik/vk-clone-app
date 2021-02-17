import React, {Component} from 'react'
import HomeAvatar from "./Avatar/HomeAvatar";
import classes from './LeftSide.module.css'
import Friends from "./Friends/Friends";
import FriendsOnline from "./FriendsOnline/FriendsOnline";
import Group from "./Group/Group";
import Album from "./Albums/Albums";

const LeftSide = (props) =>  {
        return (
            <div className={classes.LeftSide}>
                <HomeAvatar profile={props.profile}/>
                {console.log(props)}
                <Friends/>
                <FriendsOnline/>
                <Group/>
                <Album/>
            </div>
        )
}

export default LeftSide