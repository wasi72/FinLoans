import React from 'react';
import '../assets/styles/WhyChooseUs.css';
import Img from '../assets/images/about.png'; 

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="choose-us-container">
        <div className="choose-us-image">
          <img src={Img} alt="Teamwork" />
        </div>
        <div className="choose-us-content">
          <h2>Why Choose Us?</h2>
          <p>
            Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing.
            Apartments frequently or motionless on reasonable.
          </p>
          <ul>
            <li>Loans with quick approval.</li>
            <li>Customize a loan based on the amount.</li>
            <li>Good credit profile and you have built your loan.</li>
            <li>We provide online instant cash loans.</li>
          </ul>
          <button className="about-btn">About Us</button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
