import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Projects.css";

const Projects = () => {
  return (
    <div className="projects_container">
      <div className="first_project">
        <NavLink
          className="Project_UNO"
          to="https://github.com/VengaGames/Uno"
        ></NavLink>
        <div className="project_text">
          {" "}
          This is my UNO project : text text text
        </div>
      </div>
      <div className="first_project">
        <NavLink
          className="Project_BlindTest"
          to="https://github.com/Malo-LC/BlindTest"
        ></NavLink>
        <div className="project_text">
          {" "}
          This is my BlindTest project : text text text
        </div>
      </div>
    </div>
  );
};

export default Projects;

/*
<div className="container2">
<h3 className="movingText">
  Javascript - React Native - React - TypeScript - HTML - CSS - Node -
  MySQL - UML
</h3>
</div>
<div className="bottom">
<h1 className="project-title">
  Click below to discover more about my projects
</h1>
<div className="container3">
  <NavLink to="/Projects" className="ProjectUNO"></NavLink>
  <NavLink to="/Projects" className="ProjectBLINDTEST"></NavLink>
</div>
</div>*/
