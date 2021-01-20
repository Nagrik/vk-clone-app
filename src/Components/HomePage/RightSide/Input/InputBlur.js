import React, {Component} from 'react'
import classes from "./Input.module.css";
import {FaMusic, FaRegImage, FaSortAmountDown, FaVideo} from "react-icons/fa";

export default class InputBlur extends Component {
    render() {




        return (
            <div>
                <div className={classes.Input} >
                    <div className={classes.InputWrapper}>
                        <div className={classes.photo}/>
                        <textarea
                            className={classes.InputStyles}
                            placeholder="What's new?"
                        />

                        <div className={classes.IconWrapper}>
                            <FaRegImage className={classes.Icon}/>
                            <FaMusic className={classes.Icon}/>
                            <FaVideo className={classes.Icon}/>
                            <FaSortAmountDown className={classes.Icon}/>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}