import React from "react";
import "./Testmonial.css";
import user_1 from "../../assets/face1.jpg";
import user_2 from "../../assets/face2.jpg";
import user_3 from "../../assets/face3.jpg";
import user_4 from "../../assets/face4.jpg";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <span className="next-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" color="#fff" fill="#212ea0">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
          <path
            d="M10.5 8C10.5 8 13.5 10.946 13.5 12C13.5 13.0541 10.5 16 10.5 16"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <span className="prev-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" color="#fff" fill="#212ea0">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
          <path
            d="M13.5 16C13.5 16 10.5 13.054 10.5 12C10.5 10.9459 13.5 8 13.5 8"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <div className="slider"></div>
    </div>
  );
};

export default Testimonial;
