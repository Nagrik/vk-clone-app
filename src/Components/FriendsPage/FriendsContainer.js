import React, { Component} from 'react'
import HomePage from "../HomePage/HomePage";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/Friends";
import axios from "axios";
import {withRouter} from "react-router-dom";
import {friendsApi} from "../Elements/Api/api";

class FriendsContainer extends Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        console.log(this.props.match)
        if (!userId){
            userId = 2
        }
       friendsApi.getFriends(userId).then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <HomePage profile={this.props}/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        profile: state
    }
}


let WithUrlDataContainerComponent =  withRouter(FriendsContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)