import React from "react";
import PageHeader from "./Components/PageHeader/PageHeader";
import {Route, Redirect, withRouter} from "react-router-dom";
import NewsPage from "./Components/NewsPage/NewsPage";
import Auth from "./Components/Auth/Auth";
import {connect} from "react-redux";
import Logout from "./Components/LogOut/Logout";
import {authLogin} from "./redux/authAction";
import FriendsPage from "./Components/FriendsPage/FriendsPage";
import FriendsContainer from "./Components/FriendsPage/FriendsContainer";
import MessagesPage from "./Components/MessagePage/MessageForm";
import {initializeApp} from "./redux/AppReducer";
import Loader from "./Components/NewsPage/Loader";

class App extends React.Component {

    componentDidMount() {
        this.props.authLogin()
    }

    render() {
        // if(!this.props.initialized){
        //     return <Loader/>
        // }
        if(this.props.isAuthenticated === false) {
            return (
                    <div>
                        <PageHeader/>
                        <Redirect to='/Auth' component={Auth}/>
                        <Route path='/Auth' component={Auth}/>
                    </div>
            )
        }
        else{
            return (
                <div>
                    <PageHeader/>
                    <Route path='/Profile/:userId?' component={FriendsContainer}/>
                    <Redirect exact to='/Profile' component={FriendsContainer}/>
                    <Route path='/News' component={NewsPage}/>
                    <Route path='/Friends' component={FriendsPage}/>
                    <Route path='/Logout' component={Logout}/>
                    <Route path='/Message' component={MessagesPage}/>
                </div>
            )
        }
    }
}

function mapStateToProps(state){
    return {
        isAuthenticated: !!state.auth.token,
        initialized: state.app.initialized
    }
}
//
function mapDispatchToProps(dispatch){
    return{
        authLogin: () => dispatch(authLogin()),
         initializeApp
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
