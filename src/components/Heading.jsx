import React from 'react'
import "./header.css"

function Heading(props) {
  return (
    <div className="col">
        <h1>{props.heading}</h1>
       
    </div>
  )
}

export default Heading