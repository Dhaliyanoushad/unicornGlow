import React from "react";
import { motion } from "framer-motion";
import "./Hero.css"; // Import CSS file

export default function Hero() {
  return (
    <div className="hero-container">
      {/* Left Column - Text Content */}
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Hey Ladiesss
        </motion.h1>
        <motion.p
          className="hero-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Unleash your power, embrace your dreams, and shine like never before.
        </motion.p>
        <motion.button
          className="hero-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started 💕
        </motion.button>
      </div>

      {/* Right Column - Image */}
      <div className="hero-image">
        <motion.img
          src="https://wallpapercave.com/wp/wp2100347.jpg" // Replace with your own image
          alt="Empowered Woman"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
}
