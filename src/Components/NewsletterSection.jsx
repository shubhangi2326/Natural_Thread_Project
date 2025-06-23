import React from 'react';


const NewsletterSection = () => {
  return (
    <div className="newsletter-container">
      <div className="left-section">
        <h1>Wardrobe Essentials</h1>
        <p>
          100% authentic handmade products 💎💎⭐Ethnic | designer wear | wedding 💰👉Worldwide order✈️ 👉💰Bank /COD
        </p>
        <button className="view-more">VIEW MORE</button>
      </div>

      <div className="right-section">
        <h2>Join Our<br />Newsletter Now</h2>
        <p className="quote">
          A client that's unhappy for a reason is a problem, a client that's unhappy though can't.
        </p>

        <form className="newsletter-form">
          <label htmlFor="email">Email <span>*</span></label>
          <input type="email" id="email" placeholder="Enter your email" />

          <div className="recaptcha-mock">
            <div className="checkbox"></div>
            <span>I'm not a robot</span>
            <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" />
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>

        <p className="privacy-note">
          Will be used in accordance with our <strong>Privacy Policy</strong>
        </p>
      </div>
    </div>
  );
};

export default NewsletterSection;
