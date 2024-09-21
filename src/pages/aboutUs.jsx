import React from 'react';
import Navbar from '../components/navbar';
import '../assets/styles/aboutUs.css';
import ChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import Fqa from '../components/FAQSection';
import TestimonialSlider from '../components/TestimonialSlider';
import LoanApplicationBanner from '../components/LoanApplicationBanner';
import Footer from '../components/Footer';
const About = () => {
    return (
        <>
        <div className="AboutBackground">
        <Navbar />
            <div className="About-content">
                <h2>About Us</h2>
            </div>
           <ChooseUs/>
           <HowItWorks/>
           <Fqa/>
           <TestimonialSlider/>
           <LoanApplicationBanner/>
           <Footer/>
        </div>
           
        </>
    );
};

export default About;
