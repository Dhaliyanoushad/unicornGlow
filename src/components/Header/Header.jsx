import React, { useEffect, useState } from "react";
import logo from "../../assets/beauty.png";
// import menu from "../../assets/menu-icon.png";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  // const [mobile, setMobile] = useState(false);
  // const toggleMenu = () => {
  //   mobile ? setMobile(false) : setMobile(true);
  // };

  return (
    <nav className={`navbar ${sticky ? "dark-nav" : ""}`}>
      <div className="logo-container">
        <img src={logo} alt="" className="logo" />
        <h1 className="logoname">GlowSync</h1>
      </div>
      <ul>
        <li>
          <Link to="home" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-260} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="tracker" smooth={true} offset={-150} duration={500}>
            Tracker
          </Link>
        </li>
        <li>
          <Link to="recipes" smooth={true} offset={-260} duration={500}>
            Recipes
          </Link>
        </li>
        <li>
          <Link to="mood" smooth={true} offset={-260} duration={500}>
            Mood?
          </Link>
        </li>
        <li>
          <Link to="listen" smooth={true} offset={-260} duration={500}>
            Listen
          </Link>
        </li>
        <li>
          <Link
            className="mood-btn"
            to="chatbot"
            smooth={true}
            offset={-260}
            duration={500}
          >
            ChatBot
          </Link>
        </li>
      </ul>
      {/* <img src={menu} alt="" className="menu" onClick={toggleMenu} /> */}
    </nav>
  );
};

export default Header;
