import React from "react";
import "./About.css";
import aiImage from "../../assets/aiImage.webp"; // Replace with the correct image path

const About = () => {
  return (
    <div className="about">

      <div className="about-right">
        <h3>About the App</h3>
        <h2>Supporting You Every Step of the Way</h2>
        <p>
          This platform is designed to **help girls during their menstrual cycle** by analyzing their mood and suggesting nourishing food recipes accordingly. 
          We understand that every cycle is different, and we aim to provide **comfort, support, and guidance** to make you feel your best.
        </p>
        <p>
          Whether you're craving something **sweet, savory, or refreshing**, our AI-powered recommendations will provide the **perfect food suggestions** to help balance your mood and energy levels.
        </p>
      </div>      <div className="about-left">
        <img src={aiImage} alt="Self-care illustration" className="aiImage" />
      </div>
    </div>
  );
};

export default About;
