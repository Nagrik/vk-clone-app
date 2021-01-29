import React from 'react'
import classes from './CommentStyles/Comment.module.css'

export default () => {
    return(
        <div>
        <div className={classes.Wrapper}>
            <div className={classes.PhotoMusk}/>
            <div className={classes.commentWrapper}>
                <div className={classes.Name}>
                    Elon Musk
                </div>
                <p className={classes.Text}>Great words!</p>
                <div className={classes.TimeWrapper}>
                    <div className={classes.Time}>
                        2 days ago
                    </div>
                    <a className={classes.Answer} href='/'>
                        Answer
                    </a>
                </div>
            </div>
            </div>
    <div className={classes.Wrapper}>
        <div className={classes.PhotoMark}/>
        <div className={classes.commentWrapper}>
            <div className={classes.Name}>
                Mark Zuckerberg
            </div>
            <p className={classes.Text}>
                <a  className={classes.NameLink} href='/'>Elon,</a> I agree with you
            </p>
            <div className={classes.TimeWrapper}>
                <div className={classes.Time}>
                    1 days ago
                </div>
                <a className={classes.Answer} href='/'>
                    Answer
                </a>
            </div>
        </div>
    </div>
    </div>
    )
}
