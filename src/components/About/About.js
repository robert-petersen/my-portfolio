import React from "react";

import "./About.css";
import Robert from "../../Assets/20201020_130629.jpg";

function About() {
  return (
    <div className="about-section">
      <div className="about-container" id="about">
        <div className="about-title-container">
          <h1>About</h1>
        </div>
        <div className="about-me-container" >
          <div className="picture-container">
            <img className="my-photo" src={Robert} alt="Robert Petersen" />
          </div>
          <div className="about-me" >
            <h3>Who Am I?</h3>
            <p>
              I am a full-stack web developer who loves problem solving. Experienced in using languages such as HTML, CSS, SQL, Python, and JavaScript, including libraries such as React.js, Redux.js, and Node.js, to build web applications from the ground up.
            </p>
          </div>
        </div>
        <div className="about-skills" >
          <h3>Skills</h3>

        </div>
      </div>
    </div>
  );
}

export default About;