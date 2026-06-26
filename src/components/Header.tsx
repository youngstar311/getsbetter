// src/components/Header.tsx
import React, { useState } from "react";
import "../components/Header.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src="/images/logo.png" alt="Logo" />
        </div>

        {/* Hamburger Menu */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#mission">Mission</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* Hero Image + Overlay */}
      <div className="hero">
        <img src="/images/header-photo.jpg" alt="Hero" className="header-photo" />
        <div className="overlay">
          <h1 className="title">ConsultingPro</h1>
          <p className="subtitle">Empowering businesses with tailored solutions</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
