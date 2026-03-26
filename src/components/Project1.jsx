import React from 'react'

const Project1 = (props) => {
  return (
    <div>
       <h1  data-ns-test="project-name">{props.name}</h1> 
       <h6 data-ns-test="project-description">{props.description}</h6>
    </div>
  )
}

export default Project1;