import React from 'react';
import "../assets/styles/Footer.css";
import Img from '../assets/images/footer_logo.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-contact">
          <img src={Img} alt="Finloans" className="footer-logo" />
          <h3>Finloans</h3>
          <p>finloan@support.com</p>
          <p>+10 873 672 6782</p>
          <p>600/D, Green road, NewYork</p>
          <div className="footer-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-google"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-section footer-services">
          <h4>Services</h4>
          <ul>
            <li>SEO/SEM</li>
            <li>Web design</li>
            <li>Ecommerce</li>
            <li>Digital marketing</li>
          </ul>
        </div>
        <div className="footer-section footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="footer-section footer-subscribe">
          <h4>Subscribe</h4>
          <form>
            <input type="email" placeholder="Enter your mail" />
            <button type="submit">Subscribe</button>
          </form>
          <p>
            Esteem spirit temper too say adieus who direct esteem esteems
            luckily.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright ©2024 All rights reserved | This template is made with <i className="fa fa-heart"></i> by Wajih</p>
      </div>
    </footer>
  );
};

export default Footer;
