import React from 'react'
import classes from './PageInfoHeader.module.css'

export default function  PageInfoHeader(props){
    if(!props.profile.profile.profile.profile.match.params.userId) {
        return (
            <div className={classes.PageInfoHeader}>
                <div className={classes.Name}>
                    <h3>Roman Nahryshko</h3>
                    <span className={classes.State}>Online</span>
                </div>
                <div className={classes.StatusWrapper}>
                    <p className={classes.Status}>React JS Developer</p>
                </div>
            </div>
        )
    }else {
        return (
            <div className={classes.PageInfoHeader}>
                <div className={classes.Name}>
                    <h3>{props.profile.profile.profile.profile.profile.friends.profile.results[0].name.first
                    + ' ' + props.profile.profile.profile.profile.profile.friends.profile.results[0].name.last
                    }</h3>
                    <span className={classes.State}>Online</span>
                </div>
                <div className={classes.StatusWrapper}>
                    <p className={classes.Status}>React JS Developer</p>
                </div>
            </div>
        )
    }
}