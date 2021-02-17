import React, {Component} from 'react'
import PageMenu from "../PageMenu/PageMenu";
import classes from './NewsPage.module.css'
import AccordionExampleFluid from "./Accordion";
import LoaderExampleInlineCentered from "./Loader";

export default class NewsPage extends Component{
    render(){
    return(
        <div className={classes.NewsPage}>
            <div className={classes.Wrapper}>
            <PageMenu/>
            <div className={classes.Loader}>
                <LoaderExampleInlineCentered/>
            </div>
            <AccordionExampleFluid/>
            </div>
        </div>
    )
    }
}