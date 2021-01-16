import React from "react";
import classes from './App.module.css'
import PageHeader from "./Components/PageHeader/PageHeader";
import PageMenu from "./Components/PageMenu/PageMenu";

function App() {
  return (
      <div className={classes.App}>
            <PageHeader/>
            <PageMenu/>
      </div>
  )
}

export default App;
