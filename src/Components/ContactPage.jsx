import React from "react";
import { faqs } from "../contact";

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* FAQs */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, idx) => (
          <details key={idx} className="faq-item">
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>

      {/* Contact Form */}
      <div className="form-section">
        <h2>Contact Us For Any Questions</h2>
        <form>
          <div className="name-fields">
            <div>
              <label>Your Name *</label>
              <input type="text" placeholder="First" required />
            </div>
            <div>
              <label>&nbsp;</label>
              <input type="text" placeholder="Last" />
            </div>
          </div>

          <label>Your Email</label>
          <input type="email" placeholder="you@example.com" />

          <label>Your Mobile no *</label>
          <input
            type="tel"
            placeholder="10-digit mobile no"
            maxLength="10"
            required
          />

          <label>Your message (optional)</label>
          <textarea rows="4" placeholder="Write your message here..." />

          {/* Placeholder for reCAPTCHA */}
          <div className="recaptcha-mock">
              <div className="checkbox"></div>
              <span>I'm not a robot</span>
              <img
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                alt="reCAPTCHA"
              />
            </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
