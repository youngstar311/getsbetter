import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../pages/Homepage.css"; // Import the CSS file for styling
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Homepage: React.FC = () => {
  //const [aboutOpen, setAboutOpen] = useState<boolean>(false);

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

      {/* Document Section */}
      <section id="documents" className="documents">
        <h2>Knowledge Hub</h2>
        <div className="document-grid">
          <div className="document-card whitepapers">
            <img src="/covers/whitepapers.jpg" alt="Whitepapers" className="doc-cover" />
            <h3>Whitepapers</h3>
            <p>In‑depth insights into operational excellence and consulting strategies.</p>
            <Link to="/docs/whitepapers" className="doc-link">Explore →</Link>
          </div>
          <div className="document-card case">
            <img src="/covers/case-studies.jpg" alt="Case Studies" className="doc-cover" />
            <h3>Case Studies</h3>
            <p>Real‑world examples showcasing successful transformations.</p>
            <Link to="/docs/case-studies" className="doc-link">Explore →</Link>
          </div>
          <div className="document-card guides">
            <img src="/covers/guides.jpg" alt="Guides & Templates" className="doc-cover" />
            <h3>Guides & Templates</h3>
            <p>Practical resources to streamline your business processes.</p>
            <Link to="/docs/guides" className="doc-link">Explore →</Link>
          </div>
          <div className="document-card reports">
            <img src="/covers/whitepapers.jpg" alt="Research Reports" className="doc-cover" />
            <h3>Research Reports</h3>
            <p>Data‑driven analysis of industry trends and opportunities.</p>
            <Link to="/docs/reports" className="doc-link">Explore →</Link>
          </div>
        </div>
      </section>

      {/* Mission & About Section */}
      <section id="about" className="about-card">
        <h2 className="about-title">Our Mission & Company</h2>
        <div className="about-content">
          <p className="mission">
            <strong>Mission Statement:</strong>  
            To empower businesses with innovative consulting solutions that drive sustainable growth, operational excellence, and long‑term success.
          </p>
          <div className="divider"></div>
          <p className="about-company">
            <strong>About the Company:</strong>  
            ConsultingPro is a trusted partner for organizations seeking transformation. We combine industry expertise, data‑driven insights, and tailored strategies to deliver measurable results.
          </p>
          <div className="divider"></div>
          <div className="about-details">
            <h3>Requirements</h3>
            <p>Provide a clear outline of your operational challenges and goals.</p>
            <div className="divider"></div>
            <h3>Pricing</h3>
            <p>Flexible models — hourly consulting, project packages, and retainers.</p>
            <h3>Payment</h3>
            <p>Secure payments via bank transfer, credit card, or online platforms.</p>
          </div>
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

      {/* Contact Section */}
      <section id="contact-proof" className="contact-proof">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you. Reach out for inquiries or collaborations:</p>
        <p><strong>Email:</strong> <a href="mailto:info@consultingpro.com">info@consultingpro.com</a></p>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Homepage;
