// src/components/Footer.tsx
import React from "react";
import "../components/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h3>Creditgetsbetterwithmonica</h3>
          <p>&copy; {new Date().getFullYear()} Creditgetsbetterwithmonica All rights reserved.</p>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@Creditgetsbetterwithmonica.com">support@Creditgetsbetterwithmonica.com</a>
          </p>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h4>Connect</h4>
          <p>
            <a
              href="https://linkedin.com/company/consultingpro"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whatsapp
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
