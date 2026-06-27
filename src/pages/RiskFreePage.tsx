import React, { useState} from "react";
import "./RiskFreePage.css";

import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import { supabase } from "../supabaseClient.ts";  // import Supabase client

const RiskFreePage: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase
      .from("riskfree_applications")   // create this table in Supabase
      .insert([{ name: fullName, email, details: info }]);

    if (error) {
      console.error(error);
      alert("Submission failed. Please try again.");
    } else {
      alert("Application submitted successfully!");
      setFullName("");
      setEmail("");
      setInfo("");
    }
  };
  return (
    <div className="homepage">
      <Navbar />

      {/* Intro Section */}
      <section className="riskfree-intro">
        <h1>Grants Funding Blueprint</h1>
        <p>
          You never have to pay back grants. No credit check to get approved, so you don't need good credit to qualify. It's basically free money you can use to grow your business!
        </p>
        <div className="price-tag">$250</div>
        <button className="cta-btn">Get Started</button>
      </section>

      {/* Popup Card */}
      <section className="riskfree-card">
        <h2>Ready To Get Approved For Grants?</h2>
        <p>Banks will turn you down because of your credit score, but not grants. Your credit score is not part of the approval process, so you don't need good credit.</p>
        <p>This course provides a step-by-step guide with videos on securing funding through grants.</p>
        <p>There are tons of grants for different categories of people. It doesn't matter who you are; there are grants that you can qualify for and get approved for. Grants for minorities, women, men, new business owners, small business owners, veterans, non-profits, etc.</p>
      </section>

      {/* What's Included */}
      <section className="riskfree-included">
        <h2>What's Included</h2>
        <ul>
          <li> Easy-to-understand videos explaining everything you need to know to start your business the right way</li>
          <li> Connected links for everything I talk about</li>
          <li> Thousands of different grants to apply for, with direct links</li>
          <li> Grants for several categories you can qualify for, including emergencies (hardships)</li>
          <li> Resources and secrets to get approved</li>
        </ul>
        <button className="cta-btn">Get Started</button>
      </section>

      {/* Consultant Section */}
      <section className="riskfree-consultant">
        <h2>I'm Monica, The Business Consultant Behind This CreditGetBetter-Monica</h2>
        <p>
          In my years of experience, I've helped many people get approved for over 100k in funding. I'm dedicated to helping entrepreneurs and business owners access capital to grow their business and become financially free.
        </p>
        <div className="consultant-video">
          <img src="/mission.JPG" alt="Brian Consultant" className="consultant-img" />
        </div>
      </section>

      {/* Course Overview + Form */}
      <section className="riskfree-course">
        <h2>Course Overview</h2>
        <p>Submit your details to request more information and start your journey.</p>
        <form onSubmit={handleSubmit}>

          <input 
            type="text" 
            placeholder="Full Name*" 
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required 
          />
          <input 
            type="email" 
            placeholder="Email*" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />

          <textarea 
            placeholder="Additional Information"
            value={info}
            onChange={(e) => setInfo(e.target.value)}

          />

          <button type="submit" className="apply-btn">Apply Now</button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default RiskFreePage;
