import React from "react";
import "./FooterStyles.css";
import { FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={30} style={{ color: "#fff", marginRight: "2rem" }} />
            <p>Nicaragua</p>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +505 82097463
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              yisharshelevy@outlook.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            I am a fast learner, a self-taught person who always enjoys getting
            into new challenges. I have developed a high sense of commitment and
            quality in every project I have been working on. My main goal is to
            become a well-experienced Software Developer through constant
            learning and keeping up to date with the last technologies to
            deliver effective web platforms and applications for all kinds of
            the social and business environment. I am always self-motivated to
            experience new challenges that make me grow personally and
            professionally.
          </p>
          <div className="social">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/yishar-rigoberto-shelevy-carballo-319060157/"
              rel="noreferrer"
            >
              <FaLinkedin
                size={45}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
