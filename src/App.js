import React from "react";
import classes from './App.module.css'
import PageHeader from "./Components/PageHeader/PageHeader";
import PageMenu from "./Components/PageMenu/PageMenu";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
      <div className={classes.App}>
            <PageHeader/>
            <HomePage/>
      </div>
  )
}

export default App;
