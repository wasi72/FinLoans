import React from 'react';
import Navbar from '../components/navbar';
import ContactForm from '../components/ContactForm';
import TestimonialSlider from '../components/TestimonialSlider';
import Footer from '../components/Footer';
const About = () => {
    return (
        <>
        <div className="AboutBackground">
        <Navbar />
            <div className="About-content">
                <h2>Contact Us</h2>
            </div>
            <ContactForm/>
            <TestimonialSlider/>
           <Footer/>
        </div>
           
        </>
    );
};

export default About;
