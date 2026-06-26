import React, { useState } from "react";
import "./Header.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">

        <div className="logo">
          <img src="/images/logo.png" alt="Logo" />
        </div>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#services" onClick={closeMenu}>
                Services
              </a>
            </li>

            <li>
              <a href="#mission" onClick={closeMenu}>
                Mission
              </a>
            </li>

            <li>
              <a href="#testimonials" onClick={closeMenu}>
                Testimonials
              </a>
            </li>

            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

      </div>

      <div className="hero">
        <img
          src="/images/header-photo.jpg"
          alt="Hero"
          className="header-photo"
        />

        <div className="overlay">
          <h1 className="title">ConsultingPro</h1>
          <p className="subtitle">
            Empowering businesses with tailored solutions
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;