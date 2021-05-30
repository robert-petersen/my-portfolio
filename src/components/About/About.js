import React from "react";

import "./About.css";
import Robert from "../../Assets/20201020_130629.jpg";

function About() {
  return (
    <div className="about-section">
      <div className="about-container" id="about">
        {/* <div className="about-title-container">
          <h1>About</h1>
        </div> */}
        <div className="about-me-container" >
          <div className="picture-container">
            <img className="my-photo" src={Robert} alt="Robert Petersen" />
          </div>
          <div className="about-me" >
            <div className="about-who" >
              <h3>Hello, I am Robert Petersen.</h3>
              <p>
                I am a full-stack web developer who loves problem solving and building web applications from the ground up. When I'm not coding I enjoy playing video games, watching anything Star Wars, fishing, hiking, camping, and walking with my dog. I come from a retail background and have skills in customer service, sales, lower management, and time management.
              </p>
            </div>
            <div className="about-skills" >
              <h3>Languages and Libraries</h3>
              <div className="language-container">
                <div>
                  <img className="skill-logo" src="https://cdn2.iconfinder.com/data/icons/social-icon-3/512/social_style_3_html5-512.png" alt="HTML logo" />
                  <h4>HTML</h4>
                </div>
                <div>
                  <img className="skill-logo" src="https://cdn2.iconfinder.com/data/icons/social-icon-3/512/social_style_3_css3-512.png" alt="CSS Logo" />
                  <h4>CSS</h4>
                </div>
                <div>
                  <img className="skill-logo" src="https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png" alt="JavaScript Logo" />
                  <h4>JavaScript</h4>
                </div>
                <div>
                  <img className="skill-logo" src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" alt="Python Logo" />
                  <h4>Python</h4>
                </div>
                <div>
                  <img className="skill-logo" src="https://dataplatformlabs.com/wp-content/uploads/2017/07/azure-sql-cover-e1457998199378.png" alt="SQL Logo" />
                  <h4>SQL</h4>
                </div>
              </div>
              <div className="library-container">
                <div>
                  <img className="skill-logo" src="https://image.flaticon.com/icons/png/512/753/753244.png" alt="React.js Logo" />
                  <h4>React.js</h4>
                </div>
                <div>
                  <img className="skill-logo" src="https://cdn.iconscout.com/icon/free/png-512/redux-283024.png" alt="Redux.js Logo" />
                  <h4>Redux.js</h4>
                </div>
                <div>
                  <img className="skill-logo" src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="Node.js Logo" />
                  <h4>Node.js</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;