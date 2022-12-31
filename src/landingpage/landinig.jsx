import React from "react";
import "./landing.css"
import myImage from './images/employee-data-collection-cover.jpg';

const LandingPage=()=>{
    return(
        <>
            <div className="sidebar">
  <a href="/"><i class="fa fa-fw fa-home"></i> Home</a>
  <br></br>
  <a href="/formData"><i className="fa fa-fw fa-wrench"></i> Register New Employe</a>
  <br></br>
  <a href="/postView"><i className="fa fa-fw fa-user"></i> Employe Data</a>
  <br></br>
  <a href="https://github.com/aironside7" target="_blank"><i className="fa fa-fw fa-envelope"></i>My Github</a>
</div>

<div className="main">
 <img src={myImage}></img>
</div>
        </>
    )
}
export default LandingPage
