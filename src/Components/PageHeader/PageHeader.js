import React, {Component} from 'react'
import classes from './PageHeader.module.css'
import PageLogo from "./PageLogo/PageLogo";
import PageSearch from "./PageSearch/PageSearch";
import PageBell from "./PageBell/PageBell";
import PageUser from "./PageUser/PageUser";

export default class PageHeader extends Component {
    render() {
        return (
            <div className={classes.PageHeader}>
                <div className={classes.ContainerHeader}>
                    <PageLogo/>
                    <PageSearch/>
                    <PageBell/>
                    <PageUser/>
                </div>
            </div>
        )
    }
}