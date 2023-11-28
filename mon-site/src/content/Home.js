import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="container1">
        <div className="Welcome">
          <h1>Welcome </h1>

          <h1>To my Web Site</h1>

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
      <div className="container3">
        <div className="Project"> Project 1 </div>
        <div className="Project"> Project 2 </div>
        <div className="Project"> Project 3 </div>
      </div>
    </div>
  );
};

export default Home;
