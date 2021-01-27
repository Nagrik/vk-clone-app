import React, {Component} from 'react'
import classes from './DefaultPost.module.css'
import { FaAngleDown } from "react-icons/fa";

export default class DefaultPost extends Component{
    render(){

    return(
        <div className={classes.DefaultPost}>
            <div className={classes.Header}>
                <div className={classes.UserInfo}>
                    <div className={classes.UserProfile}>
                        <div className={classes.photo}/>
                        <a href='/' className={classes.userName}>
                            Roman Nahryshko
                        </a>
                    </div>
                        <div className={classes.arrowWrapper}>
                        <FaAngleDown className={classes.arrow}/>
                        </div>
                </div>
            </div>
        </div>
    )
    }
}