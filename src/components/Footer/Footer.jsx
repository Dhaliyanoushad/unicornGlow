import React from "react";
import "./Footer.css"; // Import styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Made with loadss of Lovee</p>
        <div className="footer-links">
          <a href="/about" target="_blank" rel="noopener noreferrer">
            About
          </a>
          <a href="/privacy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          <a href="/contact" target="_blank" rel="noopener noreferrer">
            Contact
          </a>
        </div>
        <p className="footer-copyright">
          © 2023 GlowSync. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
