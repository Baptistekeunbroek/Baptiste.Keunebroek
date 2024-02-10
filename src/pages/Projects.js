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
