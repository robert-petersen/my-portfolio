import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <footer id="contact">
        <h1>CONTACT</h1>
        <div className="contact-flex">
          <p>
            If you would like to contact me feel free to do so by messaging me on LinkedIn or sending an email to my buisness email <span>robert.petersen808@gmail.com</span>. 
          </p>
          <div className="social-links-container">
            <div className="social-links">
              <div className="social-link">
                <img className="icon" src="https://cdn0.iconfinder.com/data/icons/flat-social-media-icons-set-round-style-1/550/linkedin-512.png" alt="linked in icon"></img>
                <a href="https://www.linkedin.com/in/robert-petersen808/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
              <div className="social-link">
                <img className="icon" src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="git hub icon"></img>
                <a href="https://github.com/robert-petersen" target="_blank" rel="noreferrer">GitHub</a>
              </div>
              <div className="social-link">
                <img className="icon" src="https://cdn.iconscout.com/icon/free/png-512/medium-47-433328.png" alt="medium icon"></img>
                <a href="https://robert-petersen.medium.com/" target="_blank" rel="noreferrer">Medium</a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">Robert Petersen &copy; 2021 </div>
      </footer>
    </div>
  );
}

export default Footer;