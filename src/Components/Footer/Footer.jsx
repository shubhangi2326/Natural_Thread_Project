import React from "react";
import "./Footer.css";
import logo from "../../assets/NT-logo.png";
import instagram from "../../assets/instagram.svg";
import youtub from "../../assets/youtub.svg";
import whatapp from "../../assets/whatapp.svg";
import facebook from "../../assets/facebook.svg";
import { Link } from "react-router-dom";
import certificates from "../../assets/certificate.png";
import payment from "../../assets/payment.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section logo-section">
          <img src={logo} alt="Nature Thread Logo" className="footer-logo" />
          <p className="desc">
            Nature Thread® is a women oriented business. In our company 98% of
            the employees and workers are women.
          </p>
          <div className="social-icons">
            <Link>
              <img src={whatapp} alt="WhatsApp" />
            </Link>
            <Link>
              <img src={instagram} alt="Instagram" />
            </Link>
            <Link>
              <img src={youtub} alt="YouTube" />
            </Link>
            <Link>
              <img src={facebook} alt="Facebook" />
            </Link>
          </div>
        </div>

        <div className="footer-section contact-section">
          <h2>Contact us</h2>
          <p>
            <strong>Our phone number:</strong>
            <br />
            <br />
            +91 522-3178349
          </p>
          <p>
            <strong>Our Address:</strong>
            <br />
            <br />
            Lucknow GolDarwaza, Chowk.
          </p>
          <p>
            <strong>Our Email:</strong>
            <br />
            <br />
            contact@naturethread.in
          </p>
        </div>

        <div className="footer-section links-section">
          <h2>Useful Links</h2>
          <ul>
            <li>Terms & Conditions</li>
            <li>Shipping - policy</li>
            <li>Privacy Policy</li>
            <li>Cancellation & Refund Policy</li>
            <li>Track Your Order</li>
            <li>Latest News</li>
            <li>Our Sitemap</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-section newsletter-section">
          <div className="newsletter-heading">
            <h3>GET LATEST MINIMALISM NEWS</h3>
            <p>Newsletter Subscribe</p>
          </div>
          <hr />
          <form className="newsletter-form">
            <label>Email *</label>
            <input type="email" placeholder="Enter your email" required />
            <div className="recaptcha-mock">
              <div className="checkbox"></div>
              <span>I'm not a robot</span>
              <img
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                alt="reCAPTCHA"
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="certificates">
          <span>Certificates</span>
          <img src={certificates} alt="Cert1" />
        </div>
        <p>Naturethread® | © 2022 All rights reserved.</p>
        <div className="payment-partners">
          <span>Payment Partners</span>
          <img src={payment} alt="Visa" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
