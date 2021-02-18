import React from 'react'
import classes from './PageInfo.module.css'
import PageInfoHeader from "./PageInfoHeader/PageInfoHeader";
import PageInfoContent from "./PageInfoContent/PageInfoContent";

export default function PageInfo(props) {
        return (
            <div className={classes.PageInfo}>
                <PageInfoHeader profile={props}/>
                <PageInfoContent profile={props.profile}/>
            </div>
        )

}