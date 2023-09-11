import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.js";
import Heroimg2 from "../components/Heroimg2";
import WorkCard from "../components/WorkCard";

function Project() {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS" text="My recent Projects" />
      <WorkCard />
      <Footer />
    </div>
  );
}

export default Project;
