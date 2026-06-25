// Footer.jsx
export default function Footer() {
    return (
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} ConsultingPro. All rights reserved.</p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@consultingpro.com">info@consultingpro.com</a>
        </p>
        <p>
          Follow us on 
          <a href="https://linkedin.com/company/consultingpro" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
        </p>
      </footer>
    );
  }
  