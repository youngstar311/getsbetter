// ServicePage.jsx

import React, { useEffect, useState } from "react";

import "../pages/Homepage.css";
import "../pages/ServiceCpn.css";
import "../pages/RiskFreePage.css"
import "../components/Testimonials.css"
import "../components/MissionSection.css"



import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import MissionSection from "../components/MissionSection.tsx";
import Testimonials from "../components/Testimonials.tsx";


export default function ServiceCpn() {
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

        {/* Header sessions */}
        <section className="service-detail">
        <div className="service-hero">
            <img src="/profile.jpg" alt="Operational Strategy" />
            <div className="hero-overlay">
            <h1>Cpn (Premades and Blank profile) </h1>
            
            </div>
        </div>

        {/* Intro Section */}
        <section className="riskfree-intro">
          <h1>FULLY TRI-MERGE CPN</h1>
          <h2>$750 for 700+ credit score</h2>
          
          <p>
            
                    Comes with: ⁠ ⁠ID, 
           ⁠Documents,
          ⁠Digital SSN, 
           ⁠credit karma login,
           ⁠email access,
           ⁠new phone #
          </p>
          <div className="price-tag">$450 Deposits</div>
          <button className="cta-btn">Get Started</button>
          <img src="/premade.JPG" alt="Risk Free Blueprint" className="intro-img" />
        </section>

        {/* Popup Card */}
        <section className="riskfree-card">
          <h2>Get approved/Apply/ use for </h2>
          
          <ul>
            <li>📱 iPhones</li>
            <li>🏢 Apartments</li>
            <li>🚗 Car Notes</li>
            <li>🏠 Rentals</li>
            <li>💳 Loans</li>
            <li>🏢 Businesses</li>
            <li>…and much more</li>
            </ul>
        </section>

         {/* Intro Section */}
        <section className="package-intro">
          <h1>Blanks CPN costs $350.</h1>
          <p>Comes with •⁠  ⁠blank credit no score-  credit karma login-  new phone #-  email access</p>
          <div className="price-tag"> Deposits $150</div>

          <br></br>
          <img src="/blank.JPG" alt="Risk Free Blueprint" className="intro-img" />

          

          
        </section>

        {/* Testimonials Section */}
        <MissionSection />

          {/* Testimonials Section */}
          <Testimonials />
        
        </section>
        

        {/* Footer Section */}
               <Footer />
    </div>



  );
}
