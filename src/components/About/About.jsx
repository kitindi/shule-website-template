import React from "react";
import "./About.css";
import playIcon from "../../assets/playicon.png";
import about from "../../assets/about.jpg";

// eslint-disable-next-line react/prop-types
const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about} alt="" className="about-img" />
        <img src={playIcon} alt="" className="play-icon" onClick={() => setPlayState(true)} />
      </div>
      <div className="about-right">
        <h3>ABOUT GOLDEN TRUST SCHOOLS</h3>
        <h2>Nurtuting Tomorrow's Leaders Today</h2>
        <p>
          Embark on a transformative education programs. Our cytting-edge curriculum is designed to empwer students with the knowlwdge, skills, and experiences
          needed to excel in the dynamic field of education
        </p>
        <p>
          With focus on innovation, hands-on learning, and personalised mentership, our programs prepare aspiring educators to make a meaningful impact in
          classrooms, schools and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor , or educational leader, our diverse range of programs offere the perfect pathway to
          achieve your goals and unlock your full potential in shaping the future o education.
        </p>
      </div>
    </div>
  );
};

export default About;
