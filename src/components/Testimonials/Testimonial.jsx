import React, { useRef } from "react";
import "./Testmonial.css";
import user_1 from "../../assets/face1.jpg";
import user_2 from "../../assets/face2.jpg";
import user_3 from "../../assets/face3.jpg";
import user_4 from "../../assets/face4.jpg";

const Testimonial = () => {
  // back and next bautton logic

  const slider = useRef();
  let tx = 0;
  const sildeForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const sildeBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <span className="next-btn" onClick={sildeForward}>
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
      <span className="prev-btn" onClick={sildeBackward}>
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
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Abdulaziz Sadi</h3>
                  <span>VectarLabs, Tanzania</span>
                </div>
              </div>
              <p>
                Choosing to bring my children to embark their learning journey at Golden Trusct Schools was one of my best decisions, we have done as family.
                The supportive team, state-of-the-art facilities and commitment to academic excellence have trully exceeded our expectations
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Jenny Laurich</h3>
                  <span>VEMA, Tanzania</span>
                </div>
              </div>
              <p>
                Choosing to bring my children to embark their learning journey at Golden Trusct Schools was one of my best decisions, we have done as family.
                The supportive team, state-of-the-art facilities and commitment to academic excellence have trully exceeded our expectations
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Sophia Jackson</h3>
                  <span>Nala, Tanzania</span>
                </div>
              </div>
              <p>
                Choosing to bring my children to embark their learning journey at Golden Trusct Schools was one of my best decisions, we have done as family.
                The supportive team, state-of-the-art facilities and commitment to academic excellence have trully exceeded our expectations
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Enock Sindikwi</h3>
                  <span>Micro Bank, Tanzania</span>
                </div>
              </div>
              <p>
                Choosing to bring my children to embark their learning journey at Golden Trusct Schools was one of my best decisions, we have done as family.
                The supportive team, state-of-the-art facilities and commitment to academic excellence have trully exceeded our expectations
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
