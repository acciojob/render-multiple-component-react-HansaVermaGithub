import React, {Component, useState} from "react";
import '../styles/App.css';
import './Project1';
import Project1 from "./Project1";

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
      <Project1 name="My First Project" description="My First description"/>
      <Project1 name="My Second Project" description="My Second description"/>
      <Project1 name="My Third Project" description="My Third description"/>
   
    
    </div>
    </div>
  )
}
  


export default App ;
