import React from "react";
import "./header.css";
const Header = () => {
  return (
    <>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/formData">Register Employe</a>
        </li>
        
        <li style={{ float: "right" }}>
          <a class="active" href="https://github.com/aironside7" target="_blank" >
            About
          </a>
        </li>
      </ul>
      <br></br>
      <br></br>
    </>
  );
};
export default Header;
