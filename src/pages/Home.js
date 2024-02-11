import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Home.css";

const Home = () => {
  return (
    <div>
      <div className="container1">
        <div className="Welcome">
          <h1>Welcome To my Web Site</h1>
          <br />

          <p> I'm a French student in Software Engineering !</p>
          <p>I Like working on web and app development.</p>

          <a href="mailto:baptiste.keunebroek@gmail.com">
            <button type="button" className="buttonWelcome">
              Contact Me
            </button>
          </a>
        </div>
        <div id="imagecontainer" className="WelcomeRight"></div>
      </div>
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
      </div>
    </div>
  );
};

export default Home;
