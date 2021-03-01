import React from 'react'
import {Field, reduxForm, reset} from "redux-form";
import classes from './messages.module.css'
import {sendMessageCreator} from "../../redux/InputReducer";
import {connect} from "react-redux";
import Messages from "./Messages";
import PageMenu from "../PageMenu/PageMenu";
import {FaSave} from "react-icons/fa";
import {FaTelegramPlane} from "react-icons/fa";
import Photo from '../../images/Photo.jpg'


function MessagesPage(props) {
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div>
            <div className={classes.MessagesWrapper}>
                <PageMenu/>
                <div className={classes.Friends}>
                    <div className={classes.Dialogs}>
                        <FaSave className={classes.Icon}/>
                        Saved Messages
                    </div>
                </div>
                <div className={classes.Field}>
                    <div className={classes.Messages}>
                        <Messages/>
                        <MessageFormRedux onSubmit={addNewMessage}/>
                    </div>
                </div>
            </div>

        </div>
    )
}


const MessageForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit} className={classes.Form}>
                <div className={classes.InputWrapper}>
                    <Field
                        component="input"
                        name='newMessageBody'
                        placeholder='Enter your message'
                        className={classes.Input}
                    />
                </div>
                <div>
                    <button className={classes.Button}><FaTelegramPlane/></button>
                </div>
            </form>
        </div>
    )
}


const MessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(MessageForm)


let mapStateToProps = (state) => {
    return {
        messages: state.posts.messages,
    }
}

let mapDispatchToProps = dispatch => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
            dispatch(reset('dialogAddMessageForm'))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPage)
