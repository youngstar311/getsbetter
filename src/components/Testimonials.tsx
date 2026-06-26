// src/components/Testimonials.tsx
import React from "react";
import "../components/Testimonials.css";

const testimonials = [
  {
    text: "ConsultingPro transformed our operations. Efficiency improved and costs dropped significantly.",
    author: "Sarah, Startup Founder",
    rating: 5,
  },
  {
    text: "Their risk management strategies gave us confidence to expand globally.",
    author: "James, CEO",
    rating: 4,
  },
  {
    text: "Professional, insightful, and results‑driven. Highly recommended.",
    author: "Anita, Operations Manager",
    rating: 5,
  },
  {
    text: "The team was responsive and guided us through complex challenges with ease.",
    author: "David, Entrepreneur",
    rating: 4,
  },
  {
    text: "Our performance metrics skyrocketed after their optimization strategies.",
    author: "Maria, Product Manager",
    rating: 5,
  },
  {
    text: "Reliable, trustworthy, and always delivering beyond expectations.",
    author: "Chris, Business Owner",
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
