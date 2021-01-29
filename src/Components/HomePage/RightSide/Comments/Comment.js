import React from 'react'
import classes from './CommentStyles/Comment.module.css'

export default ({comment}) => {
    return(
        <div className={classes.Wrapper}>
            <div className={classes.Photo}/>
            <div className={classes.commentWrapper}>
                <div className={classes.Name}>
                    Roman Nahryshko
                </div>
                <p className={classes.Text}>{comment.title}</p>
                <div className={classes.TimeWrapper}>
                    <div className={classes.Time}>
                        Now
                    </div>
                    <a className={classes.Answer} href='/'>
                        Answer
                    </a>
                </div>
            </div>
        </div>
    )
}

