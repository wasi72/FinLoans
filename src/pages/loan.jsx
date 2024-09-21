import React from 'react';
import Navbar from '../components/navbar';
import LoanForm from '../components/LoanForm';
import HowItWorks from '../components/HowItWorks';
import TestimonialSlider from '../components/TestimonialSlider';
import Footer from '../components/Footer';
const About = () => {
    return (
        <>
        <div className="AboutBackground">
        <Navbar />
            <div className="About-content">
                <h2>Apply Now</h2>
            </div>
            <LoanForm/>
           <HowItWorks/>
           <TestimonialSlider/>
           <Footer/>
        </div>
           
        </>
    );
};

export default About;
