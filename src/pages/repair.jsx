import "./repair.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Repair() {
  return (
    <div className="homepage">
      <Navbar />

      {/* Bold Intro */}
      <section className="risk-intro">
        <h1>LEARN HOW TO REMOVE NEGATIVE ACCOUNTS FROM YOUR CREDIT REPORT IN AS LITTLE AS 5 DAYS!</h1>
      </section>

      {/* Header Card */}
      <section className="risk-header-card">
        <h2>PREVIEW BELOW</h2>
      </section>

      {/* Video Section */}
      <section className="risk-video">
        <iframe
          src="/risks.JPG"
          title="Risk Management Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        <div className="video-cta">
          <button className="cta-btn"> $350 ONLY </button>
        </div>
      </section>

      {/* Introducing Section */}
      <section className="risk-introducing">
        <h2>Introducing:</h2>
        <h3>HOW tO REMOVE NEGATIVE ACCOUNTS IN AS LITTLE AS 5 DAYS</h3>
        <p>Stop sending BASIC disputes that get ignored. Learn the exact methods I use to get deletions FAST. 💨</p>
        <div className="price-highlight">$300 ONLY</div>
      </section>

      {/* Discover Section */}
      <section className="risk-discover">
        <h2>Here's what you'll DISCOVER:</h2>
        <div className="discover-grid">
          {[
            { img: "/collection.WEBP", title: "Collection Removal Mastery", desc: "A step-by-step guide on how to wipe collections off your credit report in as little as 30 days.." },
            { img: "/charge.WEBP", title: "The Charge Off Eliminator", desc: "Learn how to zero out charge-off balances using powerful leverage under the Truth In Lending Act and other credit laws they don't want you to know" },
            { img: "/backruptcy.WEBP", title: "Bankruptcy Removal", desc: "Understand how to challenge outdated, unverifiable bankruptcy reporting and rebuild strong credit from scratch.." },
            { img: "/loan.WEBP", title: "Student Loan Hackt", desc: "Learn the RIGHT ways to attack student loans on all of your credit reports!" }
          ].map((item, i) => (
            <div key={i} className="discover-card">
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="risk-learn">
        <h2>What You'll Learn:</h2>
        <div className="learn-card">
          <ul>
            <li>✔ <b>The Exact Dispute Method That Can Trigger Deletions Within 24-72 Hours</b> learn the step-by-step strategy used to challenge negative accounts in a way that forces faster deletions and responses and increases your chances of removal.</li>
            <li>✔ <b>Why most disputes fail</b> understand why disputes get ignored and what actually gets attention from the credit Bureaus.</li>
            <li>✔ <b>how to apply pressure using consumer law </b>discover how to use key consumer protections laws to strengthen your disputes and hold them accountable.</li>
            <li>✔ <b>what to say, how to say it, and when to escalate</b> Get Clear on the exact wording that you can use over the phone, structure and timing needed to Make your disputes more effective!</li>
            <li>✔ <b>how to Target any negative account </b>learn how to approach all Negative accounts using the same method, making it more simple to follow.</li>
          </ul>
        </div>
      </section>

      {/* Animated Pricing */}
      <section className="risk-pricing">
        <h2>JOIN TODAY FOR ONLY $300</h2>
        <h3></h3>
        <button className="cta-btn zoom-btn">CLICK HERE TO GET ACCESS!</button>
        <p className="midnight">ONLY $300!</p>
      </section>

      <Footer />
    </div>
  );
}
