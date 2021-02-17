import React, {useEffect, Component} from 'react'
import HomePage from "../HomePage/HomePage";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/Friends";
import axios from "axios";
import {withRouter} from "react-router-dom";

class FriendsContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = 2
        }
        axios.get(`https://randomuser.me/api/?` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <HomePage profile={this.props.profile}/>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    // console.log(state.friends.profile.results)
    profile:state.friends.profile.results
})


let WithUrlDataContainerComponent =  withRouter(FriendsContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)