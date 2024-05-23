import React from "react";
import "./Schoollife.css";
import gallary1 from "../../assets/school1.jpg";
import gallary2 from "../../assets/school2.jpg";
import gallary3 from "../../assets/school3.jpg";
import gallary4 from "../../assets/school4.jpg";

const Schoollife = () => {
  return (
    <div className="school-life">
      <div className="gallary">
        <img src={gallary1} alt="" />
        <img src={gallary2} alt="" />
        <img src={gallary3} alt="" />
        <img src={gallary4} alt="" />
      </div>
      <button className="btn dark-btn">See more here </button>
    </div>
  );
};

export default Schoollife;
