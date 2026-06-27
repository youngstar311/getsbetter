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
    text: "I was nervous about starting the credit repair process, but the team explained everything clearly and kept me updated every step of the way. My credit profile is in much better shape now, and I feel more confident about my financial future. Highly recommend!",
    author: "James",
    rating: 4,
  },
  {
    text: "The tradeline process was smooth and professional. Every question I had was answered promptly, and the experience was exactly as explained. I'm very happy with the service and would definitely work with them again.",
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
    text: "Finding an apartment had been stressful, but the advice and credit assistance I received helped me become a stronger applicant. I'm grateful for the support and excited to be in my new place.",
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
