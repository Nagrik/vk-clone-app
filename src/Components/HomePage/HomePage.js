import React, {Component} from 'react'
import classes from './HomePage.module.css'
import PageMenu from "../PageMenu/PageMenu";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

export default class HomePage extends Component{
    render(){

    return(
        <div className={classes.HomePage}>
            <PageMenu/>
            <LeftSide/>
            <RightSide/>
        </div>
    )
    }
}