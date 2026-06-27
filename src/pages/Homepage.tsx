import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../pages/Homepage.css"; // Import the CSS file for styling
import "../pages/Tradeline.tsx";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import MissionSection from "../components/MissionSection.tsx";
import Testimonials from "../components/Testimonials.tsx";


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
        <h2></h2>
        <div className="service-grid">
          <div className="service-card strategy">
            <h3>Cpn (Premades and Blank profile)</h3>
            <p>FULLY TRI-MERGE CPN.</p>
            <Link to="/services/cpn" className="service-link">Learn More →</Link>
          </div>
          <div className="service-card optimization">
            <h3>Tradeline</h3>
            <p>Primaries Tradeline and AU’s Tradeline available</p>
            <Link to="/services/tradeline" className="service-link">Learn More →</Link>
          </div>
          <div className="service-card risk">
            <h3>Credit repair</h3>
            <p>Removing negative accounts from your credit score (Includes boosting of your credit profile)</p>
            <Link to="/services/repair" className="service-link">Learn More →</Link>
          </div>
          <div className="service-card performance">
            <h3>Get My Exact Book</h3>
            <p>To shut down debt collectors and force deletions in 30 days or less.</p>
            <Link to="/services/playbook" className="service-link">Learn More →</Link>
          </div>
          <div className="service-card technology">
            <h3>Car & Apartment Packages</h3>
            <p>Full CPN House Car and Apartment Package</p>
            <Link to="/services/package" className="service-link">Learn More →</Link>
          </div>
          <div className="service-card change">
            <h3>Get all Documents Done</h3>
            <p>Do you need docs?</p>
            <Link to="/services/docs" className="service-link">Learn More →</Link>
          </div>
          <div className="service-card changer">
            <h3> Grant Funding</h3>
            <p>Access to grants made easy  </p>
            <Link to="/services/grants" className="service-link">Learn More →</Link>
          </div>
        </div>
      </section>

      

      {/* Mission & About Section */}
        
        <MissionSection />


      {/* Testimonials Section */}
      <Testimonials />
      

      
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Homepage;
