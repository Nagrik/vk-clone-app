import React, {Component} from 'react'
import classes from './PageSearch.module.css'
import PageInput from "./PageInput/PageInput";

export default class PageSearch extends Component {
    render() {
        return (
            <div className={classes.PageSearch}>
                <PageInput/>
            </div>
        )
    }
}