import React, {Component} from 'react'
import classes from './PageInfo.module.css'
import PageInfoHeader from "./PageInfoHeader/PageInfoHeader";
import PageInfoContent from "./PageInfoContent/PageInfoContent";

export default class PageInfo extends Component {
    render() {
        return (
            <div className={classes.PageInfo}>
                <PageInfoHeader/>
                <PageInfoContent/>
            </div>
        )
    }
}