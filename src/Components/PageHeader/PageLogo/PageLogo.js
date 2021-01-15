import React, {Component} from 'react'
import { FaVk } from 'react-icons/fa';
import classes from './PageLogo.module.css'
export default class PageLogo extends Component {
    render() {
        return (
            <div className={classes.Container}>
                <a href="/"><FaVk className={classes.PageLogo}/></a>
    </div>
        )
    }
}