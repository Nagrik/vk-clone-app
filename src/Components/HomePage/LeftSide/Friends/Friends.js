import React, {Component} from 'react'
import classes from './Friends.module.css'
import FriendsAPI from "./FriendsAPI";

export default class Friends extends Component{
    render(){

    return(
        <div className={classes.Friends}>
        <div className={classes.WrapperTitle}>
            <div className={classes.Number}>
                <div>Friends</div>
                <p>334</p>
            </div>
            <a href='/'>Updates</a>
        </div>
            <FriendsAPI/>
        </div>
    )
    }
}