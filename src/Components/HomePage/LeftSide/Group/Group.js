import React, {Component} from 'react'
import classes from './Group.module.css'

export default class Group extends Component{
    render(){

    return(
        <div className={classes.Group}>
        <div className={classes.Title}>
            <a href='/'>Noteworthy pages</a>
            <p>31</p>
        </div>
            <div className={classes.Wrapper}>
                <div className={classes.Circle}/>
                <div className={classes.ContentWrapper}>
                <a href='/'>Group Name</a>
                <p>description</p>
                </div>
            </div>
            <div className={classes.Wrapper}>
                <div className={classes.Circle}/>
                <div className={classes.ContentWrapper}>
                    <a href='/'>Group Name</a>
                    <p>description</p>
                </div>
            </div>
            <div className={classes.Wrapper}>
                <div className={classes.Circle}/>
                <div className={classes.ContentWrapper}>
                    <a href='/'>Group Name</a>
                    <p>description</p>
                </div>
            </div>
            <div className={classes.Wrapper}>
                <div className={classes.Circle}/>
                <div className={classes.ContentWrapper}>
                    <a href='/'>Group Name</a>
                    <p>description</p>
                </div>
            </div>
        </div>
    )
    }
}