import React from 'react';
import { useState } from 'react';
import '../assets/styles/TestimonialSlider.css';
import Img from '../assets/images/author.png';

const testimonials = [
  {
    id: 1,
    name: 'Micky Mouse',
    text: 'Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering through animal welfare when people might depend on livestock as their only source of income or food.',
    image: Img,
  },
  {
    id: 2,
    name: 'John Doe',
    text: 'Their support for various social initiatives has improved the lives of many, from rural communities to city centers. A great team to work with!',
    image: Img,
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const { name, text, image } = testimonials[currentIndex];

  return (
    <div className="testimonial-slider">
      <div className="testimonial-content">
        <div className="testimonial-image">
          <img src={image} alt={name} />
        </div>
        <div className="testimonial-text">
          <p>{text}</p>
          <span>- {name}</span>
        </div>
      </div>
      <div className="testimonial-nav">
        <button className="nav-btn prev-btn" onClick={prevTestimonial}>
          &lt;
        </button>
        <button className="nav-btn next-btn" onClick={nextTestimonial}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
