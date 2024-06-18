import React from "react";
import "./Footer.css";
import fb from '../assets/fb.svg';
import inst from '../assets/inst.svg';
import link from '../assets/linkedin.svg';
import twitt from '../assets/xtwit.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <h2 id="contact">Contact Me</h2>
      <div className="footer-container">
        <div className="card">
          <div className="card-content">
            <h3>Leave a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  maxLength="150"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="card card2">
          <div className="card-content">
            <h3>Social Info</h3>
            <div className="footer-info">
              <p>
                <strong>Email:</strong> nikhilprince973@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +91 926-322-6570
              </p>
              <p>
                <strong>Address:</strong> Patna,Bihar
              </p>
              <p>
                <strong>Other Information:</strong> None
              </p>
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=100009084964260&mibextid=JRoKGi">
                <img src={fb} alt="Facebook" />
              </a>
              <a href="https://x.com/NikhilSoni18992?t=OPnQ3pam9WwuuraVytya0w&s=09" >
                <img id="twitter" src={twitt} alt="Twitter" />
              </a>
              <a href="#">
                <img src={inst} alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com/in/nikhilsoni973/">
                <img src={link}  alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
