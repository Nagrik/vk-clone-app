import React, {Component} from 'react'
import classes from './PageInput.module.css'
import { FaSearch } from "react-icons/fa";


export default class PageInput extends Component {
    render() {
        return (
            <div>
                <FaSearch className={classes.Search}/>
                <input type="text" placeholder='Search' className={classes.PageInput}/>
            </div>
        )
    }
}