import React from "react";
import "./About.css";
import Navbar from "../Navbar/Navbar";

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about-page">
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          Welcome to <strong>Job Portal</strong> — your trusted platform for
          finding jobs, discovering trending skills, and connecting with top
          companies.
        </p>
        <p>
          Our mission is to bridge the gap between job seekers and employers by
          providing a smooth and modern recruitment experience.
        </p>
        <p>
          Whether you are a fresher looking for your first opportunity or a
          professional aiming for the next big career move, Job Portal is here
          to help you succeed.
        </p>
      </div>
    </div>
    </>
  );
};

export default About;
