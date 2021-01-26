import React from 'react'
import {NewsContextProvider} from "./PostsAPI";

function Posts(){
    return(
        <NewsContextProvider>
    <div>
        Hello
    </div>
        </NewsContextProvider>
    )
}

export default Posts