import React from "react";

import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation-container">
      <a className="nav-link name-link" href="/">Robert Petersen</a>
      <div className="nav-links">
        <a className="nav-link" href="about">About</a>
        <a className="nav-link" href="projects">Projects</a>
        <a className="nav-link" href="contact">Contact</a>
      </div>
    </div>
  );
}

export default Navigation;