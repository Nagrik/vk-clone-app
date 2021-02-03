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
                <div className={classes.Circle1}/>
                <div className={classes.ContentWrapper}>
                <a href='/'>LinkedIN</a>
                <p>Social network</p>
                </div>
            </div>
            <div className={classes.Wrapper}>
                <div className={classes.Circle2}/>
                <div className={classes.ContentWrapper}>
                    <a href='/'>React</a>
                    <p>React group for developers</p>
                </div>
            </div>
            <div className={classes.Wrapper}>
                <div className={classes.Circle3}/>
                <div className={classes.ContentWrapper}>
                    <a href='/'>JavaScript</a>
                    <p>Learn JS with us!</p>
                </div>
            </div>
            <div className={classes.Wrapper}>
                <div className={classes.Circle4}/>
                <div className={classes.ContentWrapper}>
                    <a href='/'>IT Books</a>
                    <p>Most useful IT books</p>
                </div>
            </div>
        </div>
    )
    }
}