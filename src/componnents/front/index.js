import React from "react"
import "./style.css"


const FrontPage = () =>{
    return (
    <div className="front">
        <img src="./images/photo.png" alt="Profile apresentation" className="photoId" />
        <h2 className="name">I'm Roberto</h2>
        <h1 className="phase">Let's talk about new ideias...</h1>
        <h2 className="name1">Software Engineering Student</h2>
        <button className="button">More about me</button>
        
    </div>
    )
}
export default FrontPage