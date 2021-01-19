import React, {Component} from 'react'
import classes from './FriendsOnline.module.css'
import FriendsAPI from "../Friends/FriendsAPI";

export default class FriendsOnline extends Component{
    render(){

    return(
        <div className={classes.FriendsOnline}>
            <div className={classes.WrapperTitle}>
                <div className={classes.Number}>
                    <div>Friends Online</div>
                    <p>124</p>
                </div>
            </div>
            <FriendsAPI/>
        </div>
    )
    }
}