import React from 'react';
import '../assets/styles/LoanApplicationBanner.css';

const LoanApplicationBanner = () => {
  return (
    <section className="loan-banner">
      <div className="loan-banner-content">
        <h1>Apply for a Loan for your startup, education or company</h1>
        <a href="#apply" className="apply-btn">
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default LoanApplicationBanner;
