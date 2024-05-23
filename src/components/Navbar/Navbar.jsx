/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  // eslint-disable-next-line no-undef
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <h1 className="logo">Golden Trust Schools</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>
          {" "}
          <button className="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
