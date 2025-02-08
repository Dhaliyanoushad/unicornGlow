import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Header.css"; // Import external CSS

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <h1 className="logo">UnicornGlow 🦄🌟🍽️</h1>

      {/* Navigation for Desktop */}
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Recipes</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>

      {/* Mood Selection Button */}
      <button className="mood-btn">Select Mood 😊</button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="#">Home</a>
          <a href="#">Recipes</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      )}
    </header>
  );
}
