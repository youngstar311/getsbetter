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
          <Link to="/" onClick={closeMenu}>
            <img src="/logo.png" alt="Logo" />
          </Link>
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
          <li><Link to="/services/cpn" onClick={closeMenu}>Cpn</Link></li>
          <li><Link to="/services/tradeline" onClick={closeMenu}>Tradeline</Link></li>
          <li><Link to="/services/repair" onClick={closeMenu}>Credit repair</Link></li>
          <li><Link to="/services/playbook" onClick={closeMenu}>Books</Link></li>
          <li><Link to="/services/package" onClick={closeMenu}>Cars </Link></li>
          <li><Link to="/services/docs" onClick={closeMenu}>Docs</Link></li>
          <li><Link to="/services/grants" onClick={closeMenu}>Grants</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;