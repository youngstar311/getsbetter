import React from "react";
import "./PackagePage.css";
import "./Homepage.css";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

const PackagePage: React.FC = () => {
  return (
    <div className="homepage">
      <Navbar />

      {/* Intro Section */}
      <section className="package-intro">
        <h1>Car & Apartment Packages</h1>
        <p>FULL Risk‑Free Maintenance of House, Car, and Apartment Package</p>
        <div className="price-tag">$850</div>
      </section>

      {/* Featured Service Card */}
      <section id="featured-service" className="featured-service">
        <div className="service-highlight">
          <h2>Car & Apartment Packages</h2>
          <h3 className="price">$850</h3>
          <p><strong>Includes:</strong></p>
          <ul>
            <li>CPN</li>
            <li>750 Score</li>
            <li>2 Pay-Stubs</li>
            <li>Digital SSC</li>
            <li>DL and 2 Tradelines</li>
            <li>Paystub verification</li>
          </ul>
        </div>
      </section>

      {/* Replay CTA Row */}
      <section className="riskplay-row1">
        <div className="row-right1">
          <img src="/proofs.JPG" alt="Credit Fix" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="package-cta">
        <button className="cta-btn">➡️ Secure Your Package Now</button>
        <p className="limited">LIMITED TIME OFFER</p>
      </section>

      <Footer />
    </div>
  );
};

export default PackagePage;
