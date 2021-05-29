import React from "react";

import "./Landing.css";

function Landing() {
  return (
    <div className="landing-container">
      <header className="header">
        <h1 className="header-item" >Hello!</h1>
        <h2 className="header-item" >My name is Robert Petersen.</h2>
        <p className="header-item" >I'm a full-stack web developer who loves creating web applications that people enjoy.</p>
        <button className="header-item" >
          About Me 
          <div className="button-arrow">&#8250;</div>
        </button>
      </header>
    </div>
  );
}

export default Landing;