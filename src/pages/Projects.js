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
          <h1>UNO Project</h1>
          This is my UNO project : text text text
        </div>
      </div>
      <div className="second_project">
        <div className="project_text">
          <h1>BlindTest Project</h1>
          This is my BlindTest project : text text text
        </div>
        <NavLink
          className="Project_BlindTest"
          to="https://github.com/Malo-LC/BlindTest"
        ></NavLink>
      </div>
      <div className="positionedTextProjects">Projects</div>
      <div className="positionedTextProjects">Projects</div>
      <div className="positionedTextProjects">Projects</div>
    </div>
  );
};

export default Projects;
