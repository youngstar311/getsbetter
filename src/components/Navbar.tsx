import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li><Link to="/services/strategy" onClick={closeMenu}>Cpn</Link></li>
          <li><Link to="/services/optimization" onClick={closeMenu}>Tradeline</Link></li>
          <li><Link to="/services/risk" onClick={closeMenu}>Credit repair</Link></li>
          <li><Link to="/services/performance" onClick={closeMenu}>Books</Link></li>
          <li><Link to="/services/technology" onClick={closeMenu}>Cars </Link></li>
          <li><Link to="/services/changee" onClick={closeMenu}>Docs</Link></li>
          <li><Link to="/services/change" onClick={closeMenu}>Grants</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;