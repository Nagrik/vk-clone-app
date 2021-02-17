import React, {Component} from 'react'
import {FaVk} from 'react-icons/fa';
import classes from './PageLogo.module.css'
import {NavLink} from "react-router-dom";

export default class PageLogo extends Component {
    render() {
        return (
            <div className={classes.Container}>
                <NavLink to={'/Profile'}><FaVk className={classes.PageLogo}/></NavLink>
            </div>
        )
    }
}