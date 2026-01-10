import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const projects = [
    {
      name:"Project1",
      description : "my first project"
    },
    {
      name:"Project2",
      description : "my second project"
    }
    
  ];
  return (
    <div id="main" >
    <div className="ns-wrapper">
  {projects.map((project,index)=>(
    <div key={index}>
    <h1 data-ns-test="project-name">{project.name}</h1>
  <h6 data-ns-test="project-description">{project.description}</h6>
    </>
  )}
 
    </div>
    </div>
  )
}


export default App;
