import React from "react";
import "./document.css";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

const Document: React.FC = () => {
  return (
    <div className="homepage">
      <Navbar />

      {/* Intro Section */}
      <section className="docs-intro">
        <h1>Get all Documents Done</h1>
        <p>You never have to stress about documents. No hassle and no stress!</p>
        <button className="cta-btn">Get Started</button>
      </section>

      {/* Featured Service Card */}
      <section id="featured-service" className="featured-service">
        <div className="service-highlight">
          <h2>Get all Documents Done</h2>
          <h3 className="price">Starting from $250</h3>
          <p><strong>Do you need docs?</strong></p>
          <ul>
            <li>PayStubs $250/$350 (3 Months History)</li>
            <li>Bank Notes: $200 Each / $350 for 3 Month History. Pricing may vary depending on bank templates.</li>
            <li>Digital SS card: $250 / 12 hour or less delivery</li>
            <li>Blank CPN: $400 with Digital SS card and 2 stubs</li>
            <li>CPN number lookup: $200</li>
            <li>Public Records Registration: $300</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="docs-cta">
        <button className="cta-btn">➡️ Secure Your Documents Now</button>
        <p className="limited">LIMITED TIME OFFER</p>
      </section>

      <Footer />
    </div>
  );
};

export default Document;
