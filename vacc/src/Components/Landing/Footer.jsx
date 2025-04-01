import React from "react";
import "./Footer.css";

// React Icons (optional)
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Left Section: Logo + Social Icons */}
      <div className="footer-left">
        <h2 className="footer-logo">VaxUp</h2>
        <div className="footer-socials">
          <FaInstagram />
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </div>

      {/* Middle Sections: Menu + Partners */}
      <div className="footer-column">
        <h3>Menu</h3>
        <ul>
          <li>Search</li>
          <li>Dashboard</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Our partners</h3>
        <ul>
          <li>Apollo hospitals</li>
          <li>SBS hospitals</li>
          <li>Fortis hospitals</li>
        </ul>
      </div>

      {/* Right Section: Contact */}
      <div className="footer-column">
        <h3>Contact Us</h3>
        <p>contact@vaxup.com</p>
      </div>
    </footer>
  );
};

export default Footer;
