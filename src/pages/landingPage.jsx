import React from 'react';
import Navbar from '../components/navbar';
import HeroSec from '../components/HeroSection';
import '../assets/styles/landingPage.css';
import LoanSection from '../components/LoanOffers';
import ChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import Fqa from '../components/FAQSection';
import TestimonialSlider from '../components/TestimonialSlider';
import LoanApplicationBanner from '../components/LoanApplicationBanner';
import Footer from '../components/Footer';
const HomePage = () => {
    return (
        <>
        <div className="background">
        <Navbar />
            <div className="heroSection">
        <HeroSec />
            </div>
            <LoanSection/>
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

export default HomePage;
