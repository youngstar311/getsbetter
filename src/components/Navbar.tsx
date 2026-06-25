import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#documents">Knowledge Hub</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact-proof">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
