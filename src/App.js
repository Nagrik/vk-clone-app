import React from "react";
import classes from './App.module.css'
import PageHeader from "./Components/PageHeader/PageHeader";
import HomePage from "./Components/HomePage/HomePage";
import {Route} from "react-router-dom";
import NewsPage from "./Components/PageNews/PageNews";
import Auth from "./Components/Auth/Auth";

function App() {
  return (
      <div className={classes.App}>
          <PageHeader/>
                <Route exact path='/' component={HomePage}/>
                <Route path='/News' component={NewsPage}/>
                <Route path='/Auth' component={Auth}/>
      </div>
  )
}

export default App;
