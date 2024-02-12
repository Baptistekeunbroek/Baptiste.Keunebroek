import React from "react";
import "../style/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutme">
      <div className="container_Top_about">
        <div className="container_presentation">
          <h1>Hello,</h1>
          <h1>I'm Baptiste !</h1>
          <br />

          <p>
            I'm a recently graduated engineer in computer science with a Master
            is Software Development. I'm currently living in Norway working for
            a company.
          </p>
        </div>
      </div>
      <div className="container_Bottom_about">
        <div className="experience">
          <h1> Experience</h1>
          <ul className="odlaMer">
            <li>2022-2023 : React Native developer at Odlamer</li>
            <p>
              Build a gardening community and smart tools mobile app using React
              Native.
            </p>
          </ul>

          <ul className="odlaMer">
            <li>2019-2024 : CS School and Personnal Projects</li>
            <p>Multiple projects in different languages and frameworks.</p>
          </ul>
        </div>
        <div className="education">
          <h1>Education</h1>
          <ul>
            <li>2019-2024 : MS - Computer Science, EFREI Paris</li>
            <p>
              Specialization in software design, web and app develop- ment,
              devOps.
            </p>
          </ul>
          <ul>
            <li>
              Fall 2021 : International engineering program, Technical
              University of Ostrava
            </li>
            <p>Computer networks, hardware, C, Java, JavaScript.</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
