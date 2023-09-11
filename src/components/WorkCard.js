import React from "react";
import "./WorkCardStyles.css";
import { NavLink } from "react-router-dom";
import Loader from "./Loader";

function CardSection(props) {
  return (
    <div className="work-container">
      <h1 className="project-heading">{props.title}</h1>
      <div className="project-container">
        {/*props.projects*/}
        <Loader />
      </div>
    </div>
  );
}

function WorkCard() {
  return (
    <>
      <CardSection
        title="Stay tuned for my most recent projects!"
        projects={
          <div className="project-card">
            <img alt="projectimg" />
            <h2 className="project-title">Project title</h2>
            <div className="pro-details">
              <p>This is text</p>
              <div className="pro-btns">
                <NavLink to="url.com" className="btn">
                  View
                </NavLink>
                <NavLink to="url.com" className="btn">
                  Source
                </NavLink>
              </div>
            </div>
          </div>
        }
      />
    </>
  );
}

export default WorkCard;
