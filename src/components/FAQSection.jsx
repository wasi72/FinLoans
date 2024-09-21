import React from 'react';
import { useState } from 'react';
import '../assets/styles/FAQSection.css'; 
import Img from '../assets/images/faq.png';
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-image">
        <img src={Img} alt="Businessman with coffee" />
      </div>

      <div className="faq-content">
        <h2>Frequently ask</h2>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(0)}>
            <span>Adieus who direct esteem It esteems luckily?</span>
            <span>{activeIndex === 0 ? '-' : '+'}</span>
          </div>
          {activeIndex === 0 && (
            <div className="faq-answer">
              <p>Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing.</p>
            </div>
          )}
        </div>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(1)}>
            <span>Who direct esteem It esteems?</span>
            <span>{activeIndex === 1 ? '-' : '+'}</span>
          </div>
          {activeIndex === 1 && (
            <div className="faq-answer">
              <p>Short explanation for this question.</p>
            </div>
          )}
        </div>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(2)}>
            <span>Duis consectetur feugiat auctor?</span>
            <span>{activeIndex === 2 ? '-' : '+'}</span>
          </div>
          {activeIndex === 2 && (
            <div className="faq-answer">
              <p>Short explanation for this question.</p>
            </div>
          )}
        </div>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(3)}>
            <span>Consectetur feugiat auctor?</span>
            <span>{activeIndex === 3 ? '-' : '+'}</span>
          </div>
          {activeIndex === 3 && (
            <div className="faq-answer">
              <p>Short explanation for this question.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
