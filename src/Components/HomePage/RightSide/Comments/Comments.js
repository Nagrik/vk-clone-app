import React from 'react'
import {connect} from 'react-redux'
import Comment from "./Comment";
import classes from './CommentStyles/Comments.module.css'

const Comments = ({syncComments}) => {
    if(!syncComments.length){
        return <p className={classes.Text}>No comment yet, be the first</p>
    }
    return syncComments.map(comment => <Comment comment={comment} key={comment.id}/>)
}

const mapStateToProps = state =>{
    return {
        syncComments:state.posts.comments
    }
}

export default connect(mapStateToProps,null)(Comments)

