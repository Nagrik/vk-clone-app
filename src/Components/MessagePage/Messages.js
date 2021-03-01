import React from 'react'
import {connect} from 'react-redux'
import MessagesContainer from "./MessagesContainer";

const Messages = ({messages}) => {
    return messages.map(message => <MessagesContainer UserMessage={message} key={message.id}/>)

}

const mapStateToProps = state =>{
    return {
        messages: state.posts.messages
    }
}

export default connect(mapStateToProps,null)(Messages)

