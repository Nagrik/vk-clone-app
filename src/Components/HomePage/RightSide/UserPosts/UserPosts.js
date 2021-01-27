import React, {Component} from 'react'
import classes from './UserPosts.module.css'
import { FaSearch } from "react-icons/fa";

export default class UserPosts extends Component{
    render(){
    return(
        <div className={classes.Wrapper}>
            <div className={classes.Inside}>
                <div>
                <a href='/' className={classes.Link}>
                  All posts
                </a>
                <a href='/' className={classes.LinkActive}>
                    My posts
                </a>
                </div>
                <div className={classes.SearchWrapper}>
                <FaSearch className={classes.Search}/>
                </div>
            </div>
        </div>
    )
    }
}