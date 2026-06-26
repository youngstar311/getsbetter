import React, { useEffect, useState } from "react";


import "../pages/packagePage.css";
import "../pages/Homepage.css";
import "../components/Testimonials.css";
import "../components/MissionSection.css";

import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import Testimonials from "../components/Testimonials.tsx";
import MissionSection from "../components/MissionSection.tsx";

const PackagePage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
      const toggleFAQ = (index: number) => {
          setActiveIndex(activeIndex === index ? null : index);
        };
      
        useEffect(() => {
          const sections = document.querySelectorAll(".fade-section");
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("visible");
                }
              });
            },
            { threshold: 0.2 }
          );
          sections.forEach((sec) => observer.observe(sec));
          return () => observer.disconnect();
        }, []);
  return (
    <div className="homepage">
      <Navbar />

      {/* Intro Section */}
      <section className="package-intro">
        <h1>Car & Apartment Packages</h1>
        <p>FULL Risk‑Free Maintenance of House, Car, and Apartment Package</p>
        <div className="price-tag"></div>
      </section>

      {/* Featured Service Card */}
      <section id="featured-service" className="featured-service">
      <div className="service-highlight">

        <span className="premium-badge">⭐ PREMIUM PACKAGE</span>

        <h2>Car & Apartment Package</h2>

        <div className="price-box">
          <span className="currency">$</span>
          <span className="amount">850</span>
          <span className="once">One-Time Payment</span>
        </div>

        <p className="package-desc">
          Everything you need to get started with a complete premium package.
        </p>

        <div className="feature-grid">

          <div className="feature-card">
            ✅ Fully Tri-Merge CPN
          </div>

          <div className="feature-card">
            ✅ 750 Credit Score
          </div>

          <div className="feature-card">
            ✅ 2 Professional Paystubs
          </div>

          <div className="feature-card">
            ✅ Digital Social Security Card
          </div>

          <div className="feature-card">
            ✅ Driver's License
          </div>

          <div className="feature-card">
            ✅ 2 Premium Tradelines
          </div>

          <div className="feature-card">
            ✅ Paystub Verification
          </div>

          <div className="feature-card">
            🔒 Risk-Free Package
          </div>

        </div>

        <button className="buy-now-btn">
          Secure This Package →
        </button>

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

      {/* Mission */}
      <MissionSection />
      <Testimonials />


      <Footer />
    </div>
  );
};

export default PackagePage;
