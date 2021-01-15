import React, {Component} from 'react'
import classes from './PageUser.module.css'
import { FaChevronDown } from "react-icons/fa"
import { FaChevronUp } from "react-icons/fa"



export default class PageUser extends Component {


    state = {
        isArrowIn: true
    }

    handleArrowUpClick = () => {
        this.setState({
            isArrowIn:false
        })
    }
    handleArrowDownClick = () =>{
        this.setState({
            isArrowIn:true
        })
    }
    render() {
        const isArrowIn = this.state.isArrowIn;
        return (
            <div className={classes.PageUser}>
                <span className={classes.Name}>Roman</span>
                <div className={classes.Photo}/>
                <div>
                    {isArrowIn === true
                        ? <FaChevronDown className={classes.ArrowDown} onClick={this.handleArrowUpClick}/>
                        : <FaChevronUp className={classes.ArrowDown} onClick={this.handleArrowDownClick}/>
                    }
                </div>
            </div>
        )
    }
}