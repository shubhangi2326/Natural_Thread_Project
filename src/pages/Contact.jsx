import React from "react";
import "./style.css";
import bannerImage from "../assets/nature-thread-banner.jpg";
import location from "../assets/location.svg";
import message from "../assets/message.svg";
import contact from "../assets/contact.svg";
import ContactPage from "../Components/ContactPage";

const Contact = () => {
  return (
    <>
      <div className="contact-page">
        <img src={bannerImage} alt="Banner" className="contact-banner" />

        <div className="contact-info-section">
          <div className="contact-box">
            <img src={location} alt="Location" />
            <p>Lucknow GolDarwaza, Chowk.</p>
          </div>
          <div className="contact-box">
            <img src={message} alt="Email" />
            <p>Contact@naturethread.in</p>
          </div>
          <div className="contact-box">
            <img src={contact} alt="Phone" />
            <p>
              <span>+91</span> <strong>6307000109</strong>
            </p>
          </div>
        </div>
      </div>
      <ContactPage />
    </>
  );
};

export default Contact;
