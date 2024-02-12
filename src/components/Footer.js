import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import "./FooterStyles.css";

import React from "react";

const Footer = () => {
  const handlePhoneClick = () => {
    // Construct the tel URI with the phone number
    const telURI = "tel:+91-9611143984";
    window.location.href = telURI;
  };

  const handleEmailClick = () => {
    // Construct the mailto URI with the email address
    const mailtoURI = "https://mail.google.com/mail/u/1/#inbox?compose=new";
    window.location.href = mailtoURI;
  };

  const handleLinkedInClick = () => {
    // Provide the URL of your LinkedIn profile
    const linkedinURL = "https://www.linkedin.com/in/noor-banu-3369031b4";
    window.location.href = linkedinURL;
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Razaqmulla compound belapu</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone" onClick={handlePhoneClick}>
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91-9611143984
            </h4>
          </div>
          <div className="email" onClick={handleEmailClick}>
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              noorbanu119@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About the company</h4>
          <p>
            This is me noor banu i'm a front-end developer i would like to hear
            new projects and design challenges
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
              onClick={handleLinkedInClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
