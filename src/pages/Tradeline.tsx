import React, { useEffect, useState } from "react";
import "../pages/Tradeline.css";

import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import MissionSection from "../components/MissionSection.tsx";
import Testimonials from "../components/Testimonials.tsx";


const Tradeline: React.FC = () => {
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

  const faqs: { q: string; a: string }[] = [
    { q: "What Do We Do?", a: "We provide authorized user tradelines to help your personal credit profile look favorable." },
    { q: "What is an Authorized User Tradeline?", a: "It is someone that is 'authorized' to be placed on a primary cardholder’s account..." },
    { q: "What is the Process?", a: "A credit card holder with perfect payment history adds you to their card..." },
    { q: "How Long Do Your Tradelines Report?", a: "All of our lines are active for 60 days. Some are 90 days, and extensions are possible." },
    { q: "What happens after a Tradeline is Removed?", a: "It will still have a positive effect on your credit history and scores." },
    { q: "Is it Legal To Buy Tradelines?", a: "Yes, it is 100% legal to add authorized users to accounts." },
    { q: "How is Our Information Protected?", a: "We use strict confidentiality measures and legal protections." },
    { q: "How much of an impact will it have on my credit score?", a: "Results vary depending on your unique credit profile." },
    { q: "What Makes Our Company Different?", a: "We are affordable, reliable, and understand our clients’ challenges." },
    { q: "Do The American Express Cards Backdate?", a: "No, they do not. They show current history only." },
    { q: "Do The Tradelines Report To All Three Bureaus?", a: "Typically they report to at least two bureaus." },
    { q: "Do You Provide Consultations?", a: "Yes, we provide consultations to help you choose the right tradeline." }
  ];

  return (
    <div className="homepage">
      <Navbar />

      {/* Hero Header */}
      <header className="opt-header fade-section">
        <img src="/profile.jpg" alt="Process Optimization" className="opt-hero-img" />
        <div className="opt-overlay">
          <h1>Credit Gets Better With Monica Fix</h1>
          <p>Get your credit score where it needs to be. Fast, Simple and Easy</p>
        </div>
      </header>

      {/* Special Card */}
      <section className="opt-special-card fade-section">
        <h2>Interested in making passive income while helping others achieve their financial goals?</h2>
        <button className="cta-btn">Become a Member</button>
      </section>

      {/* Document Section */}
      <section id="documents" className="documents">
        <h1>Important sources</h1>
        <div className="document-grid">
          <div className="document-card"><img src="/link_1.JPG" alt="Source 1" className="doc-cover" /></div>
          <div className="document-card"><img src="/link_2.JPG" alt="Source 2" className="doc-cover" /></div>
          <div className="document-card"><img src="/link_3.JPG" alt="Source 3" className="doc-cover" /></div>
          <div className="document-card"><img src="/link_4.JPG" alt="Source 4" className="doc-cover" /></div>
        </div>
      </section>

      {/* Mission Statement */}
      <MissionSection/>

      {/* Contact Form */}
      <section id="contact-form" className="opt-form fade-section">
        <h1>Non-Posting Assistance</h1>
        <p>If it has been 14 days after your statement date and the tradeline isn’t showing, please fill out the form below.</p>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          {/* Pre-filled textarea with editable text */}
          <textarea required defaultValue={`PLEASE INCLUDE THE FOLLOWING:
USERNAME:
PASSWORD:
SECURITY QUESTION ANSWER:
4 DIGIT PIN:`}></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* FAQ Section */}
      <section className="opt-faq fade-section">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.q}</span>
              <span className="arrow"></span>
            </button>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Get in Touch */}
      <section className="opt-contact fade-section">
        <h2>Get in Touch</h2>
        <p>Email us at <a href="mailto:info@consultingpro.com">info@consultingpro.com</a></p>
      </section>

      <Footer />
    </div>
  );
};

export default Tradeline;
