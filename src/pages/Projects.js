import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Projects.css";

const Projects = () => {
  return (
    <div className="projects_page">
      <div className="projects_container">
        <div className="first_project">
          <NavLink
            className="Project_UNO"
            to="https://github.com/VengaGames/Uno"
          ></NavLink>
          <div className="project_text_UNO">
            <h1>UNO Project</h1>
            Me and my friends made a remake of the famous game, using JavaScript
            and Node.js
          </div>
        </div>
        <div className="second_project">
          <NavLink
            className="Project_BlindTest"
            to="https://github.com/Malo-LC/BlindTest"
          ></NavLink>
          <div className="project_text_BlindTest">
            <h1>BlindTest Project</h1>
            Here is a school project, an online BlindTest that allows you to
            play with you friends ! Made with React, Tailwind, Node.js ans
            Socket.io.
          </div>
        </div>
        <div className="positionedTextProjects">Projects</div>
        <div className="positionedTextProjects">Projects</div>
        <div className="positionedTextProjects">Projects</div>
      </div>
      <div className="projects_container_bottom"></div>
    </div>
  );
};

export default Projects;
