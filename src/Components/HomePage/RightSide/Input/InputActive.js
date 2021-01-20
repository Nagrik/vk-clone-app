import React, {Component} from 'react'
import classes from "./Input.module.css";
import {FaCog, FaMusic, FaRegImage, FaRegSmile, FaSortAmountDown, FaVideo} from "react-icons/fa";

export default class InputActive extends Component {
    render() {

        let newPostElement = React.createRef()
        let addPost = () => {
            let text = newPostElement.current.value;
                console.log(text)
        }



        return (
            <div className={classes.AllComponent}>
                <div className={classes.InputActiveWrapper}>
                    <div className={classes.photo}/>
                    <textarea
                        className={classes.InputActive}
                        ref={newPostElement}
                        placeholder="What's new?"
                    />
                    <div className={classes.IconActiveWrapper}>
                        <FaRegSmile className={classes.IconActive}/>
                    </div>
                </div>
                <div className={classes.UnderInput}>
                    <div className={classes.UnderIcon}>
                        <FaRegImage className={classes.Icon}/>
                        <FaMusic className={classes.Icon}/>
                        <FaVideo className={classes.Icon}/>
                        <FaSortAmountDown className={classes.Icon}/>
                    </div>
                    <div>
                        <FaCog className={classes.Icon}/>
                        <button className={classes.Button} onClick={addPost}>Send</button>
                    </div>
                </div>
            </div>
        )
    }
}