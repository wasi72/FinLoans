import React from 'react';
import '../assets/styles/LoanOffers.css';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SchoolIcon from '@mui/icons-material/School';

const LoanOffers = () => {
  const loanData = [
    {
      title: "Home Loan",
      icon: <HomeIcon style={{ fontSize: 60, color: 'white' }} />,
      range: "$3000-$10000",
      details: [
        "Borrow - $350 over 3 months",
        "Interest rate - 292% pa fixed",
        "Total amount payable - $525.12",
        "Representative - 1,286% APR"
      ],
      buttonText: "Apply Now",
    },
    {
      title: "Car Loan",
      icon: <DirectionsCarIcon style={{ fontSize: 60, color: 'white' }} />,
      range: "$3000-$10000",
      details: [
        "Borrow - $350 over 3 months",
        "Interest rate - 292% pa fixed",
        "Total amount payable - $525.12",
        "Representative - 1,286% APR"
      ],
      buttonText: "Apply Now",
    },
    {
      title: "Education Loan",
      icon: <SchoolIcon style={{ fontSize: 60, color: 'white' }} />,
      range: "$3000-$10000",
      details: [
        "Borrow - $350 over 3 months",
        "Interest rate - 292% pa fixed",
        "Total amount payable - $525.12",
        "Representative - 1,286% APR"
      ],
      buttonText: "Apply Now",
    }
  ];

  return (
    <div className="loan-offers">
      <h2>What we offer for you</h2>
      <p>We provide online instant cash loans with quick approval that suit your term</p>
      <div className="loan-card-container">
        {loanData.map((loan, index) => (
          <div key={index} className="loan-card">
            <div className="loan-icon">{loan.icon}</div>
            <h3>{loan.title}</h3>
            <p className="loan-range">{loan.range}</p>
            <ul>
              {loan.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <button className="apply-btn">{loan.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanOffers;
