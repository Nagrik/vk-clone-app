import React from 'react'
import classes from './FriendsPage.module.css'
import PageMenu from "../PageMenu/PageMenu";
import FriendsPageContainer from "./FriendsPageContainer";
import AccordionFriends from "./AccordionFriends";

export default function FriendsPage() {
    return (
        <div className={classes.PageFriends}>
            <PageMenu/>
            <div className={classes.Test}>
            <div className={classes.FriendsSwitcherWrapper}>
                <div className={classes.FriendsSwitcher}>
                    <div className={classes.All}>
                        All friends
                    </div>
                    <div className={classes.Online}>
                        Friends online
                    </div>
                </div>
            </div>
            <FriendsPageContainer/>
            </div>
            <AccordionFriends/>
        </div>
    )
}