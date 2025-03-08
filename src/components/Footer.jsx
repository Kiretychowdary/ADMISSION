import React from "react";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      {/* Contact Section */}
      <div className="footer-container">
        <div className="footer-grid">
          {/* Contact Info */}
          <div className="footer-contact">
            <h2 className="footer-title">Contact Us</h2>
            <p className="footer-description">
              Vignan's Foundation for Science, Technology and Research (Deemed
              to be University), Vadlamudi, Guntur-522213
            </p>
            <div className="footer-contact-details">
              <div className="footer-contact-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a href="mailto:info@vignan.ac.in">info@vignan.ac.in</a>
              </div>
              <div className="footer-contact-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <a href="tel:08632344700">0863-2344700 / 701</a>
              </div>
            </div>
            {/* Social Links */}
            <div className="footer-social-links">
              <a
                href="https://www.youtube.com/channel/UCzDKwPH7h79xDSOUgGSwjPQ"
                className="footer-social-icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/vignanuniversityofficial/?hl=en"
                className="footer-social-icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://in.linkedin.com/company/vignan-s-foundation-of-science-technology-research"
                className="footer-social-icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/vignanuniversityofficial?fref=ts"
                className="footer-social-icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="footer-heading">ADMISSION</h3>
            <ul>
              <li>
                <a href="#" className="footer-link">
                  Apply Online
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  International Students
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">STUDENT</h3>
            <ul>
              <li>
                <a href="#" className="footer-link">
                  Pay Tuition Fee
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Examinations
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Internship Portal
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Slam Book
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Student Exit Feedback
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Outlook (Access Mails)
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">INTERNAL PORTALS</h3>
            <ul>
              <li>
                <a href="#" className="footer-link">
                  DEO
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Faculty
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Student Portal
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Vignan Online
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  VU Today
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="footer-copyright">
            ©️ {new Date().getFullYear()} Vignan's Foundation. All rights
            reserved.
          </p>
          <div className="footer-legal-links">
            <a href="#" className="footer-link">
              Privacy Policy
            </a>
            <a href="#" className="footer-link">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;