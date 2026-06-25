import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src="/images/header-photo.jpg" alt="Hero" className="header-photo" />
      <div className="overlay">
        <h1 className="title">ConsultingPro</h1>
        <p className="subtitle">Empowering businesses with tailored solutions</p>
      </div>
    </header>
  );
};

export default Header;
