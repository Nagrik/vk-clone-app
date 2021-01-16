import React, {Component} from 'react'
import classes from './HomeAvatar.module.css'
import { FaChartBar } from 'react-icons/fa';

export default class HomeAvatar extends Component{
    render(){

    return(
        <div className={classes.HomeAvatar}>
            <div className={classes.Photo}/>
            <div className={classes.Wrapper}>
                <button type='button' className={classes.Button}>
                    Edit
                </button>
                <FaChartBar className={classes.Stats}/>
            </div>
        </div>
    )
    }
}