// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Schoollife from "./components/SchoolLife/Schoollife";
import Testimonial from "./components/Testimonials/Testimonial";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Our PROGRAM" title="What We Offer" />
        <Programs />
        <About />
        <Title subtitle="Gallary" title="School Life" />
        <Schoollife />
        <Title subtitle="TESTIMONIALS" title="What Student Says" />
        <Testimonial />
      </div>
    </div>
  );
};

export default App;
