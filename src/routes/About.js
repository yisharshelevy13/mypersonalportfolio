import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.js";
import Heroimg2 from "../components/Heroimg2";
import TechCards from "../components/TechCards";

function About() {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="ABOUT" text="Front-end Developer" />
      <TechCards />
      <Footer />
    </div>
  );
}

export default About;
