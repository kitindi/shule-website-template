// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to ensure students with the knowledge , skills ans experience needed to excel in the dynamic field of
          education
        </p>
        <button className="btn">
          Explore more
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="25" color="#333" fill="none">
            <path d="M20 12L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;
