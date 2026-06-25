import React from "react";
import "./playbook.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Playbook: React.FC = () => {
  return (
    <div className="homepage">
      <Navbar />

      {/* Bold Intro */}
      <section className="riskplay-intro">
        <h1>LIMITED-TIME BONUS AVAILABLE!</h1>
      </section>

      {/* Rectangle Background Section */}
      <section className="riskplay-rect">
        <div className="rect-content">
          <h2>Get my exact playbook to shut down debt collectors and force deletions in 30 days or less</h2>
          <h3>Stop Letting Debt Collectors Run Your Life — Make Them Prove It Or Delete It.</h3>
        </div>
      </section>

      {/* Replay CTA Row */}
      <section className="riskplay-row">
        <div className="row-left">
          <img src="/mission.JPG" alt="Credit Fix" />
          <button className="swing-btn">Send me the Playbook</button>
          <button className="animated-btn"><b>Secure Your Copy For $300</b></button>
        </div>
        <div className="row-right">
          <img src="/playbook.webp" alt="Credit Fix" />
          <form>
            <input type="text" placeholder="Full Name*" required />
            <small>Full Name is required</small>
            <input type="tel" placeholder="Phone*" required />
            <input type="email" placeholder="Email*" required />
            <label>
              <input type="checkbox" required /> I agree to terms & conditions provided by Icon 818 LLC.
            </label>
            <button className="animated-btn">➡️ YES, I'M READY TO GET RESULTS</button>
          </form>
        </div>
      </section>

      {/* What's Included */}
      <section className="riskplay-included">
        <h2>What’s Included?</h2>
        <div className="included-grid">
          <div className="included-card">
            <p>✔ The complete debt collector shutdown system</p>
            <p>✔ MY DEBT VALIDATION LETTER</p>
          </div>
          <div className="included-card">
            <p>✔ The exact letter that forces collectors to prove the debt is yours or remove it</p>
            <p>✔ No guessing, no Googling, no weak templates from Reddit. This is the real one.</p>
          </div>
          <div className="included-card">
            <p>✔ A step-by-step method that walks you through the entire process</p>
            <p>✔ When to send it</p>
            <p>✔ How to send it</p>
            <p>✔ What to say if they call</p>
            <p>✔ What to do when they violate the law</p>
          </div>
        </div>
      </section>

      {/* Teach Me CTA */}
      <section className="riskplay-teach">
        <button className="swing-btn">Teach Me How To Shut Down Collectors — LIMITED TIME ONLY</button>
      </section>

      {/* Divider */}
      <div className="opt-divider fade-section"></div>

      <h2>We've personally helped over 1k students and removed hundreds of thousands in debt</h2>

      {/* Replay CTA Row */}
      <section className="riskplay-row">
        <div className="row-left">
          <img src="/playbook.webp" alt="Credit Fix" />
        </div>
        <div className="row-right">
          <h2>If you don't fight back against collectors, expect:</h2>
          <ul>
            <li>❌ Collectors calling your phone 5x a day</li>
            <li>❌ Balances growing from fees and interest</li>
            <li>❌ Collections dragging your score down 100+ points</li>
            <li>❌ Getting denied for apartments, car loans, and credit cards</li>
            <li>❌ Paying a debt you might not even legally owe</li>
            <li>❌ Living in fear every time your phone rings</li>
          </ul>
        </div>
      </section>

      {/* Animated Ready Section */}
      <section className="riskplay-ready">
        <button className="animated-btn"><h3>➡️ YES, I'M READY TO GET RESULTS</h3></button>
      </section>

      {/* Why This Method */}
      <section className="riskplay-method">
        <h2>Why This 90 Method is the Best Path to Success</h2>
        <p>With countless other paths out there, here's why this method is the best.</p>
        <div className="riskplay-row">
          <div className="method-old">
            <h3>The Old Way:</h3>
            <img src="/old_way.webp" alt="Old Way" />
            <ul>
              <li>Waiting 7 years to get negative items off</li>
              <li>Paying debt collectors you don’t actually owe</li>
              <li>Disputing tirelessly without results</li>
            </ul>
          </div>
          <div className="method-new">
            <h3>The New Way:</h3>
            <img src="/new_way.webp" alt="New Way" />
            <ul>
              <li>Force them to prove the debt or delete it</li>
              <li>Send one legally-backed letter with a 30-day clock</li>
              <li>Dispute items stay off for good</li>
            </ul>
          </div>
        </div>
        <section className="riskplay-teach">
          <button className="swing-btn">➡️ YES, I'M READY TO GET RESULTS</button>
        </section>
      </section>

      {/* What You Will Learn */}
      <section className="riskplay-learn">
        <h2>What You Will Learn: The 3 Stages</h2>
        <p>Learn exactly how to shut down collectors, force deletions, and protect yourself using federal law.</p>
        <div className="riskplay-row">
          <div className="learn-stage">
            <img src="/old_way.webp" alt="Stage 1" />
            <h3>SECRET METHOD #1</h3>
            <p>Use debt validation to force collectors to prove every dollar — or delete the account</p>
          </div>
          <div className="learn-stage">
            <img src="/old_way.webp" alt="Stage 2" />
            <h3>SECRET METHOD #2</h3>
            <p>Use cease & desist letters to legally stop all collector contact</p>
          </div>
          <div className="learn-stage">
            <img src="/old_way.webp" alt="Stage 3" />
            <h3>SECRET METHOD #3</h3>
            <p>Advanced strategies to protect yourself and permanently remove risks</p>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="riskplay-case">
        <h2>You Can Be Our Next Case Study!</h2>
        <p>Take a look at our student's results! My Deletion Blueprint can take everything to the next level.</p>
        <div className="case-grid">
          <div className="case-card"><img src="/case1.webp" alt="Case Study 1" /></div>
          <div className="case-card"><img src="/case2.webp" alt="Case Study 2" /></div>
          <div className="case-card"><img src="/case3.webp" alt="Case Study 3" /></div>
        </div>
        <div className="case-cta">
          <button className="case-btn">I'M READY TO GET RESULTS</button>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="riskplay-intro">
        <h1>LIMITED-TIME BONUS AVAILABLE!</h1>
      </section>
      <section className="riskplay-rect">
        <div className="rect-content">
          <h2>Here's a breakdown of everything you get today.</h2>
          <p>Get an exclusive look into everything you'll be learning to start succeeding.</p>
        </div>
      </section>

      {/* Replay CTA Row */}
      <section className="riskplay-row1">
        <div className="row-right1">
          <img src="/playbook.webp" alt="Playbook" />
          <h1>You get instant access to:</h1>
          <p>✅ <strong>The Collection Playbook</strong> — $300 Value</p>
          <p>✅ <strong>Debt Validation Letter</strong> — $300 Value</p>
          <p>✅ <strong>Debt Tracker</strong> — $300 Value</p>
          <section className="riskplay-teach">
            <button className="swing-btn">Today's Special Price $26.00</button>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Playbook;
``