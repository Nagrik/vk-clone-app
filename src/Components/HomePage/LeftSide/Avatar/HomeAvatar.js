import React, {Component} from 'react'
import classes from './HomeAvatar.module.css'
import { FaRegChartBar } from 'react-icons/fa';
import Loader from "../../../NewsPage/Loader";

 const HomeAvatar = (props) =>{

     if(!props.profile){
         return <Loader/>
     }

    return(
        <div className={classes.HomeAvatar}>
            {/*<div className={classes.Photo}/>*/}
            <img src={props.profile[0].picture.large}/>
            <div className={classes.Wrapper}>
                <button type='button' className={classes.Button}>
                    Edit
                </button>
                <FaRegChartBar className={classes.Stats}/>
            </div>
        </div>
    )
}

export default HomeAvatar