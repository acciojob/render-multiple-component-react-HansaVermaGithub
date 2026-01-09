import React, {Component, useState} from "react";
import '../styles/App.css';

const App = (data-ns-test) => {
  return (
    <div id="main" >
    <h1>{data-ns-test.project-name}</h1>
  <h2>{data-ns-test.project-description}</h2>
    </div>
  )
}


export default App;
