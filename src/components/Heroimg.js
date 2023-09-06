import React from "react";
import "./HeroImgStyles.css";
import IntroImg from "../assets/hero-img.jpg";
import { Link } from "react-router-dom";

function Heroimg() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="hero-img" />
      </div>
      <div className="content">
        <p>Hello, I am Yishar Shelevy</p>
        <h1>Web Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Heroimg;
