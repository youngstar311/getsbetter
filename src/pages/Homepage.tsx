import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../pages/Homepage.css"; // Import the CSS file for styling
import "../pages/Tradeline.tsx";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

const Homepage: React.FC = () => {
  //const [aboutOpen, setAboutOpen] = useState<boolean>(false);
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
      {/* Navigation Bar */}
      <Navbar />

      {/* Header Section */}
      <header className="header">
        <img src="/profile.jpg" alt="Profile" className="header-photo" />
      </header>

      {/* Services Section */}
      <section id="services" className="services">
        <section className="riskplay-teach">
          <button className="swing-btn">Our Services</button>
        </section>
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-card strategy">
            <h3>Cpn (Premades and Blank profile)</h3>
            <p>FULLY TRI-MERGE CPN.</p>
            <Link to="/services/strategy" className="service-link">Learn More →</Link>
          </div>
          <div className="service-card optimization">
            <h3>Tradeline</h3>
            <p>Primaries Tradeline and AU’s Tradeline available</p>
            <Link to="/services/optimization" className="service-link">Learn More →</Link>
          </div>
          <div className="service-card risk">
            <h3>Credit repair</h3>
            <p>Removing negative accounts from your credit score (Includes boosting of your credit profile)</p>
            <Link to="/services/risk" className="service-link">Learn More →</Link>
          </div>
          <div className="service-card performance">
            <h3>Get My Exact Book</h3>
            <p>To shut down debt collectors and force deletions in 30 days or less.</p>
            <Link to="/services/performance" className="service-link">Learn More →</Link>
          </div>
          <div className="service-card technology">
            <h3>Car & Apartment Packages</h3>
            <p>Full CPN House Car and Apartment Package</p>
            <Link to="/services/technology" className="service-link">Learn More →</Link>
          </div>
          <div className="service-card change">
            <h3>Grant Funding</h3>
            <Link to="/services/changee" className="service-link">Learn More →</Link>
          </div>
          <div className="service-card change">
            <h3>Get all Documents Done</h3>
            <p>Do you need docs?</p>
            <Link to="/services/change" className="service-link">Learn More →</Link>
          </div>
        </div>
      </section>

      

      {/* Mission & About Section */}
        <section className="opt-mission fade-section">
          <img src="/mission.JPG" alt="Mission" className="mission-img" />
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>To improve the quality of life for those who have a goal. To be a company that is forthcoming and reliable...</p>
            <button
              className="contact-btn"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Us
            </button>
          </div>
        </section>


      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>"ConsultingPro transformed our operations. Efficiency improved and costs dropped significantly."</p>
            <h4>- Sarah, Startup Founder</h4>
          </div>
          <div className="testimonial-card">
            <p>"Their risk management strategies gave us confidence to expand globally."</p>
            <h4>- James, CEO</h4>
          </div>
          <div className="testimonial-card">
            <p>"Professional, insightful, and results‑driven. Highly recommended."</p>
            <h4>- Anita, Operations Manager</h4>
          </div>
        </div>
      </section>

      
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Homepage;
