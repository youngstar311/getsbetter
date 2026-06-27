// src/components/MissionSection.tsx
import React, { useState } from "react";
import "../components/MissionSection.css";
import { supabase } from "../supabaseClient.js";  // import client

const MissionSection: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase
      .from("get_in_touch")
      .insert([{ name, email, message }]);

    if (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } else {
      alert("Message sent successfully!");
      setShowForm(false);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section className="opt-mission fade-section">
      <img src="/mission.JPG" alt="Mission" className="mission-img" />
      <div className="mission-text">
        <h2>Our Mission</h2>
        <p>
          To improve the quality of life for those who have a goal. To be a
          company that is forthcoming and reliable...
        </p>
        <button className="contact-btn" onClick={() => setShowForm(true)}>
          Contact Us
        </button>
      </div>

      {showForm && (
        <div className="contact-popup">
          <div className="popup-content">
            <h3>Get in Touch</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                placeholder="Your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
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
