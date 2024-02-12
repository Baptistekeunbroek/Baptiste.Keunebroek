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
          <p>Welcome To my Web Site.</p>
          <p>
            I'm a French developer full stack. I like working on web and app
            development. I am passionate about building products with
            best-in-class user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
