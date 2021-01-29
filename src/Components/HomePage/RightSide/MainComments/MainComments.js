import React from 'react'
import CommentForm from "../Comments/CommentForm";
import Comments from "../Comments/Comments";

function MainComments(){
    return(
        <div>
            <div>
                <Comments/>
            </div>
            <div>
                <CommentForm/>
            </div>
        </div>
    )
}

export default MainComments