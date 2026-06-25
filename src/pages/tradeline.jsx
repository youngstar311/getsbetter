import { useEffect, useState } from "react";
import "../pages/tradeline.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Tradeline() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
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
        <h2>
            Interested in making passive income while helping other achieve their financial goals?
        </h2>
        <button className="cta-btn">Become a Member</button>
      </section>

      {/* Document Section */}
      <section id="documents" className="documents">
        <h2>Important sources </h2>
        <div className="document-grid">
            <div className="document-card whitepapers">
            <img src="/link_1.JPG" alt="Whitepapers" className="doc-cover" />
            </div>


            <div className="document-card whitepapers">
            <img src="/link_2.JPG" alt="Whitepapers" className="doc-cover" />
            </div>

            <div className="document-card whitepapers">
            <img src="/link_3.JPG" alt="Whitepapers" className="doc-cover" />
            </div>

            <div className="document-card whitepapers">
            <img src="/link_4.JPG" alt="Whitepapers" className="doc-cover" />
            </div>
        </div>
    </section>

      {/* Knowledge Hub Style Grid */}
      <section className="opt-documents fade-section">
        <div className="opt-doc-grid">
          {/* cards */}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="opt-mission fade-section">
        <img src="/mission.JPG" alt="Mission" className="mission-img" />
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>To improve the quality of life for those who have a goal. To be a company that is forthcoming and reliable. To help those in need and to be a part of their journey to achieve financial freedom.</p>
          <button className="contact-btn" onClick={() => document.getElementById("contact-form").scrollIntoView({behavior:"smooth"})}>
            Contact Us
          </button>
        </div>
      </section>

      {/* Divider */}
      <div className="opt-divider fade-section">
      </div>

      {/* Contact Form */}
      <section id="contact-form" className="opt-form fade-section">
        <h2>Non-Posting Assistance</h2>

        <p>If it has been 14 days after your statement date and the tradeline isn’t showing
        on any of three bureaus, please fill out the form below so that we can give further instructions.</p>

        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />

          <p>If it has been 14 days after your statement date and the tradeline isn’t showing
          on any of three bureaus, please fill out the form below so that we can give further instructions.</p>

          <textarea placeholder="PLEASE INCLUDE THE FOLLOWING:
                USERNAME:
                PASSWORD: 
                SECURITY QUESTION ANSWER:
                4 DIGIT PIN:">

          </textarea>


          <button type="submit">Submit</button>
        </form>
      </section>
      {/* Divider */}
      <div className="opt-divider fade-section">
      </div>

      {/* FAQ Section */}
      <section className="opt-faq fade-section">
        <h2>Frequently Asked Questions</h2>
        {[
          { q: "What Do We Do?", a: "We provide authorized user tradelines to help your personal credit profile look favorable." },
          { q: "What is an Authorized User Tradeline?", a: "It is someone that is “authorized” to be placed on a primary cardholder’s account. When you become an authorized user on someone’s credit card account, you agree to adopt the future and past credit history of the account." },
          { q: "What is the Process?", a: "Essentially, a credit card holder with perfect payment history adds you to their card. You do not get a physical card to use, but you do get the perfect credit history imprinted on your credit report. They generally stay active for 60-90 days unless otherwise stated. All cards are 15% utilization or less. In the time the cards are active on your credit report you should have a blueprint or plan on what financial goals you are trying to achieve during the time they are active." },
          { q: "How Long Do Your Tradelines Report ?", a: "All of our lines are active for 60 days. We do have cards that are for 90 day terms and we also offer custom prices for longer terms. If you purchase a 60 or 90 day term tradeline and feel that you need more time we can always extend your term for a lesser price." },
          { q: "What happen after a Tradeline Removed ?", a: "After a tradeline is “terminated” or “closed”, it will still have a large, positive effect on your credit history and scores. Most tradelines will stay on your reports forever, or at the very least for many years. Tradeline Genie LLC cannot guarantee the exact amount of time they will show on your credit reports." },
          { q: "Is it Legal To Buy Tradelines?", a: " t is 100% legal to add authorized users to your account. As a matter of fact, many banks and lenders encourage it. It is no different than you adding a family member or friend on your card.Unfortunately, there are many people out there that don’t have the luxury of another family member with good credit to help them move forward or overcome financial challenges. That is where we come in. The only difference is that we do not allow our clients to use the cards or have any contact with the cardholders. The cardholders are paid for their time. Win-Win" },
          { q: "How is Our Information Protected?", a: "Confidentially is important for both our cardholders  and clients. We have worked with a number of attorneys and local law enforcement to provide protection and set precautionary measures for both our clients and our cardholders. There are softwares that we use to check all information provided to us when adding clients to cards. We will not tolerate individuals that try to misuse our services to perform fraudulent acts." },
          { q: "How much of an impact will it have on my credit score?", a: "Everybody’s credit profile is unique. Some people have a great score, but high utilization. Others may have many negative items or excessive inquiries. Then there are those that barely have anything, not even a score. If you have bad/fair credit with minimal negative items, little to no credit, or currently have good credit, then tradelines would be a perfect addition. If you have a lot of collections, inquiries, or late payments then you would need credit repair before adding tradelines. If you are currently in the process of credit repair, we  highly recommend you that wait until you are finished before adding tradelines to achieve the best result. With any derogatory, charge-off’s, late payments, etc. Those negative accounts take a huge toll on the potential the tradelines have to offer." },
          { q: "What Makes Our Company Different Than Other Tradeline Companies?", a: " We are affordable & reliable. We work with many individuals nationwide and we understand that our clients are going through credit challenges, financial hardships, and are simply trying to move up in life." },
          { q: "Do The American Express Cards Backdate?", a: "No, they do not. Clients added to any of our American Express cards (other than certain store cards banked through American Express) DO NOT SHOW HISTORY. Many of our clients who purchase these cards pair them with other tradelines that have good age. You then get a mix of age and credit limit ." },
          { q: "Do The Tradeline Report To All Three Bureaus?", a: "Given the short timeframe these tradelines are actively on your credit report, they typically report to at least two credit bureaus." },
          { q: "Do You Provide Consultations?", a: " Most certainly. If you are interested in purchasing a tradeline, but unsure of which to choose or would like to know if you are a good candidate you can send us an email." }
        ].map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.q}</span>
              <span className="arrow"></span>
            </button>
            <div className="faq-answer">
              <p>{faq.a}</p>
            </div>
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
}
