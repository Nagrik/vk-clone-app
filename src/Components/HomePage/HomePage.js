import React, {Component} from 'react'
import classes from './HomePage.module.css'
import PageMenu from "../PageMenu/PageMenu";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

const HomePage = (props) => {

    return(
        <div className={classes.HomePage}>
            <PageMenu/>
            <LeftSide profile={props.profile}/>
            <RightSide profiel={props.profile}/>
        </div>
    )
}

export default HomePage