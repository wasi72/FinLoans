import React from 'react';
import '../assets/styles/HeroSection.css';
import { useState } from 'react';

const HeroSection = () => {
  const [amount, setAmount] = useState('');
  const [month, setMonth] = useState('');
  const [payment, setPayment] = useState(0);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    calculatePayment(e.target.value, month);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    calculatePayment(amount, e.target.value);
  };

  const calculatePayment = (amt, mnth) => {
    if (amt && mnth) {
      setPayment((amt * mnth * 0.05).toFixed(2));
    }
  };

  return (
    <div className="hero-section">
    
      <div className="hero-left">
        <h1>Get Loan for your Business growth or startup</h1>
        <button className="how-it-works-btn">How It Works</button>
      </div>

      <div className="hero-right">
        <div className="loan-form">
          <h2>How much do you want?</h2>
          <p>We provide online instant cash loans with quick approval</p>

          <div className="form-group">
            <select value={amount} onChange={handleAmountChange}>
              <option value="">Select Amount</option>
              <option value="1000">$1000</option>
              <option value="2000">$2000</option>
              <option value="5000">$5000</option>
            </select>
          </div>

          <div className="form-group">
            <select value={month} onChange={handleMonthChange}>
              <option value="">Select Month</option>
              <option value="1">1 Month</option>
              <option value="3">3 Months</option>
              <option value="6">6 Months</option>
            </select>
          </div>

          <p>You have to pay: ${payment}</p>

          <button className="continue-btn">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
