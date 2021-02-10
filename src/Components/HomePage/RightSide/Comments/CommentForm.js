import React, {Component} from 'react'
import {connect} from 'react-redux'
import classes from './CommentStyles/CommentForm.module.css'
import {createComment} from "../../../../redux/actionCreator";
import {FaPaperclip} from "react-icons/fa";
import {FaCamera} from "react-icons/fa";
import {FaRegSmile} from "react-icons/fa";
import {FaTelegramPlane} from "react-icons/fa";
import CommentsExample from "./CommentsExample";

 class CommentForm extends Component{
    constructor(props) {
        super(props);

        this.state ={
            title:''
        }
    }

    submitHandler = event => {
        event.preventDefault()

        const {title} = this.state

        const newPost = {
            title,id:Date.now().toString()
        }
        this.props.createComment(newPost)
        this.setState({title:''})
    }


    changeInputHandler = event => {
        event.persist()
    this.setState(prev => ({...prev,...{
            [event.target.name]:event.target.value
        }}))
    }



    render() {
    return(
        <form onSubmit={this.submitHandler} className={classes.Form}>
            <div className={classes.UserPhoto}/>
            <div className={classes.Wrapper}>
            <input
                type='text'
                id='title'
                value={this.state.title}
                name='title'
                onChange={this.changeInputHandler}
                className={classes.Input}
                placeholder='Write a comment...'
                autoComplete="off"
            />
            <div className={classes.IconWrapper}>
                <FaPaperclip className={classes.Icon}/>
                <FaCamera className={classes.Icon}/>
                <FaRegSmile className={classes.Icon}/>
            </div>
        </div>
            <button type='submit' className={classes.Send}>
                <FaTelegramPlane className={classes.IconButton}/>
            </button>

        </form>
)
}
}

const mapDispatchToProps = {
    createComment
}

export default connect(null, mapDispatchToProps)(CommentForm)