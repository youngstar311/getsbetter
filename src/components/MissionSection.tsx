// src/components/MissionSection.tsx
import React, { useState } from "react";
import "../components/MissionSection.css";

const MissionSection: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="opt-mission fade-section">
      <img src="/mission.JPG" alt="Mission" className="mission-img" />
      <div className="mission-text">
        <h2>Our Mission</h2>
        <p>
          To improve the quality of life for those who have a goal. To be a
          company that is forthcoming and reliable...
        </p>
        <button
          className="contact-btn"
          onClick={() => setShowForm(true)}
        >
          Contact Us
        </button>
      </div>

      {/* Popup Contact Form */}
      {showForm && (
        <div className="contact-popup">
          <div className="popup-content">
            <h3>Get in Touch</h3>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Your message..." required />
              <button type="submit">Send</button>
            </form>
            <button className="close-btn" onClick={() => setShowForm(false)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MissionSection;
