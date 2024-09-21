import React from 'react';
import { useState } from "react";
import "../assets/styles/LoanForm.css";

const LoanForm = () => {
  const [payAmount, setPayAmount] = useState(0); 
  const [amount, setAmount] = useState(0); 
  const [month, setMonth] = useState(0); 

  const interestRate = 0.05; 

  
  const calculatePayment = (selectedAmount, selectedMonth) => {
    if (selectedAmount && selectedMonth) {
      const totalPayment = selectedAmount * (1 + interestRate * selectedMonth);
      setPayAmount(totalPayment.toFixed(2)); 
    } else {
      setPayAmount(0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
   
  };

  const handleAmountChange = (e) => {
    const selectedAmount = Number(e.target.value);
    setAmount(selectedAmount);
    calculatePayment(selectedAmount, month); 
  };

  const handleMonthChange = (e) => {
    const selectedMonth = Number(e.target.value);
    setMonth(selectedMonth);
    calculatePayment(amount, selectedMonth); 
  };

  return (
    <div className="loan-form-container">
      <h2>How much do you want?</h2>
      <p>
        We provide online instant cash loans with quick approval that suit your
        term length.
      </p>
      <form className="loan-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone no." required />
        <select required>
          <option value="">Purpose</option>
          <option value="personal">Personal Loan</option>
          <option value="business">Business Loan</option>
        </select>
        <select value={amount} onChange={handleAmountChange} required>
          <option value="">Amount</option>
          <option value="1000">$1000</option>
          <option value="5000">$5000</option>
          <option value="10000">$10000</option>
        </select>
        <select value={month} onChange={handleMonthChange} required>
          <option value="">Month</option>
          <option value="1">1 Month</option>
          <option value="6">6 Months</option>
          <option value="12">12 Months</option>
        </select>
        <p>You have to pay: ${payAmount}</p>
        <textarea placeholder="Message" rows="4"></textarea>
        <button type="submit">Apply Now</button>
      </form>
    </div>
  );
};

export default LoanForm;
