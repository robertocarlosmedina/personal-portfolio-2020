import React from "react"
import "./style.css"


const FrontPage = () =>{
    return (
    <div className="front">
        <img src="./images/photo.png" alt="Profile apresentation" className="photoId" />
        <h2 className="name">I'm Roberto</h2>
        <h1 className="phase">Let's talk about new ideias</h1>
        <h2 className="name1">Software Engineering Student</h2>
        <a href="#div" className="animated-button4"> 
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Use the slide buttons to see more about me
        </a> 
    </div>
    )
}
export default FrontPage