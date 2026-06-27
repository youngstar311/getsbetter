// src/components/Testimonials.tsx
import React from "react";
import "../components/Testimonials.css";

const testimonials = [
  {
    text: "creditgetsbetterwithmonica transformed my credits. She's proffessional, and effiecient. I always recommend her service",
    author: "Sarah",
    rating: 5,
  },
  {
    text: "Their credit management strategies is indeed effective. Monica you are greatly appreciated",
    author: "James",
    rating: 4,
  },
  {
    text: "Professional, insightful, and results‑driven. Highly recommended.",
    author: "Anita",
    rating: 5,
  },
  {
    text: "Monica is responsive and guided us through complex challenges with ease.",
    author: "David ,",
    rating: 4,
  },
  {
    text: "Our credits skyrocketed after their proffesional strategies was used for me.",
    author: "Maria ",
    rating: 5,
  },
  {
    text: "Reliable, trustworthy, and always delivering beyond expectations.",
    author: "Chris & Gabrriella, ",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials fade-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p>"{t.text}"</p>
            <h4>- {t.author}</h4>
            <div className="stars">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={i < t.rating ? "star filled" : "star"}>
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
