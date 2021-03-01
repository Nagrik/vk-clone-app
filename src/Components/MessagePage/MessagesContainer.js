import React from 'react'
import classes from './messages.module.css'


export default function MessageContainer({UserMessage}){
    return(
        <div className={classes.MyMessage}>
            {UserMessage.message}
        </div>
    )
}


