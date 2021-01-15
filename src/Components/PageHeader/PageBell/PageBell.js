import React, {Component} from 'react'
import { FaBell } from "react-icons/fa";
import classes from './PageBell.module.css'

export default class PageBell extends Component {
    render() {
        return (
            <div className={classes.PageBell}>
                <FaBell className={classes.Bell}/>
            </div>
        )
    }
}