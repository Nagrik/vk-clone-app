import React, {Component} from 'react'
import classes from './HomePage.module.css'
import PageMenu from "../PageMenu/PageMenu";
import HomeAvatar from "./HomeAvatar/HomeAvatar";

export default class HomePage extends Component{
    render(){

    return(
        <div className={classes.HomePage}>
            <PageMenu/>
            <HomeAvatar/>
        </div>
    )
    }
}