import React from 'react'
import classes from './HomePage.module.css'
import PageMenu from "../PageMenu/PageMenu";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

const HomePage = (props) => {

    return(
        <div className={classes.HomePage}>
            <PageMenu/>
            <LeftSide profile={props}/>
            <RightSide profile={props}/>
        </div>
    )
}

export default HomePage