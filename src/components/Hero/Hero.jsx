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
          Hey Ladies 
        </motion.h1>
        <motion.p
          className="hero-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Dream big. Stay Positive. Welcome to the Self-Love Club 
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
          src="/aiImage3.webp" // Place image in 'public' folder OR use import method below
          alt="Empowered Woman"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
}
