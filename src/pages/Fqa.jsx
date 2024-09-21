import React from 'react';
import Navbar from '../components/navbar';
import ChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import Fqa from '../components/FAQSection';
import LoanApplicationBanner from '../components/LoanApplicationBanner';
import Footer from '../components/Footer';
const HomePage = () => {
    return (
        <>
        <div className="AboutBackground">
        <Navbar />
            <div className="About-content">
                <h2>FQA</h2>
            </div>
           <ChooseUs/>
           <HowItWorks/>
           <Fqa/>
           <LoanApplicationBanner/>
           <Footer/>
        </div>
           
        </>
    );
};

export default HomePage;
