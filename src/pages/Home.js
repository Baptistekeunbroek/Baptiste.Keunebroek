import React from "react";
import "../style/Home.css";

const Home = () => {
  return (
    <div className="HomePage">
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
        <div className="positionedText">Web Designer</div>
        <div className="positionedText">Web Designer</div>
        <div className="positionedText">Web Designer</div>
        <div className="positionedText">Web Designer</div>
      </div>
      <div className="homeBottom">test</div>
    </div>
  );
};

export default Home;
