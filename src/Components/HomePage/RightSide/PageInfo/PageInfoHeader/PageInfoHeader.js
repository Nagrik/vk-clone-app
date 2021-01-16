import React, {Component} from 'react'
import classes from './PageInfoHeader.module.css'

export default class PageInfoHeader extends Component {
    render() {
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
    }
}