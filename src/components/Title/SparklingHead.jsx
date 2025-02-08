import React from "react";
import "./SparklingHead.css"; // Import CSS file for styles

const SparklingHeading = () => {
  return (
    <div className="container">
      {/* Decorative Sparkly Bow */}
      <div className="sparkly-bow">
        <div className="bow-left"></div>
        <div className="bow-right"></div>
        <div className="knot"></div>
      </div>

      {/* Sparkling Text */}
      <h1 className="sparkling-text">
        I’m Just a Girl
        <span className="sparkle-overlay">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-sparkle"></span>
          ))}
        </span>
      </h1>

      {/* Floating Sparkles */}
      <div className="sparkles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="sparkle"></div>
        ))}
      </div>
    </div>
  );
};

export default SparklingHeading;
