import React from "react";
import PageHeader from "./Components/PageHeader/PageHeader";
import {Route,Redirect} from "react-router-dom";
import NewsPage from "./Components/NewsPage/NewsPage";
import Auth from "./Components/Auth/Auth";
import {connect} from "react-redux";
import Logout from "./Components/LogOut/Logout";
import {authLogin} from "./redux/authAction";
import FriendsPage from "./Components/FriendsPage/FriendsPage";
import FriendsContainer from "./Components/FriendsPage/FriendsContainer";

class App extends React.Component {

    componentDidMount() {
        this.props.authLogin()
    }

    render() {
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
                </div>
            )
        }



        // return (
        //     <div className={classes.App}>
        //         {routes}
        //     </div>
        // )

    }
}

function mapStateToProps(state){
    console.log(!!state.auth.token)
    return {
        isAuthenticated: !!state.auth.token
    }
}

function mapDispatchToProps(dispatch){
    return{
        authLogin: () => dispatch(authLogin())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
