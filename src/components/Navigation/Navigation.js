import React from "react";

import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation-container">
      <a href="landing-section">Robert Petersen</a>
      <div className="nav-links">
        <a href="about-section">About</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
      </div>
    </div>
  );
}

export default Navigation;