import React from "react";
import classes from './App.module.css'
import PageHeader from "./Components/PageHeader/PageHeader";
import HomePage from "./Components/HomePage/HomePage";
import {Route, Redirect, withRouter} from "react-router-dom";
import NewsPage from "./Components/NewsPage/NewsPage";
import Auth from "./Components/Auth/Auth";
import {connect} from "react-redux";
import Logout from "./Components/LogOut/Logout";
import {authLogin} from "./redux/authAction";
import FriendsPage from "./Components/FriendsPage/FriendsPage";

class App extends React.Component {

    componentDidMount() {
        this.props.authLogin()
    }

    render() {
        let routes = (
            <div>
                <PageHeader/>
                <Redirect exact to='/Auth' component={Auth}/>
                <Route path='/Auth' component={Auth}/>
                {/*<Route exact path='/' component={HomePage}/>*/}
            </div>
        )

        if (this.props.isAuthenticated) {
            console.log('IM HERE')
            routes = (
                <div>
                    <PageHeader/>
                    <Route path='/News' component={NewsPage}/>
                    <Route path='/Friends' component={FriendsPage}/>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/Logout' component={Logout}/>
                    <Redirect exact to='/'/>
                </div>
            )
        }


        return (
            <div className={classes.App}>
                {routes}
            </div>
        )

    }
}

function mapStateToProps(state){
    return {
        isAuthenticated: !!state.auth.token
    }
}

function mapDispatchToProps(dispatch){
    return{
        authLogin: () => dispatch(authLogin())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
