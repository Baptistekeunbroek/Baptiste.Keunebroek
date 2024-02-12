import React from "react";
import "../style/Home.css";

const Home = () => {
  return (
    <div className="HomePage">
      <div className="homeTopContainer">
        <div id="imagecontainer" className="WelcomeRight"></div>
        <div className="positionedText">Web Developer</div>
        <div className="positionedText">Web Developer</div>
        <div className="positionedText">Web Developer</div>
        <div className="positionedText">Web Developer</div>
      </div>
      <div className="homeBottomContainer">
        <div className="Welcome">
          <p>
            Welcome To my Web Site. I'm a French developer full stack ! I like
            working on web and app development. Welcome To my Web Site. I'm a
            French developer full stack ! I like working on web and app
            development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
