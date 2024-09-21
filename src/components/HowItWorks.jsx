import '../assets/styles/HowItWorks.css';
import React from 'react';
const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Apply for loan',
      description: 'We will customize a loan based on the amount of cash your company needs.'
    },
    {
      number: '02',
      title: 'Application review',
      description: 'We will review the application and provide quick feedback.'
    },
    {
      number: '03',
      title: 'Get funding fast',
      description: 'We ensure that your funding is processed swiftly after approval.'
    }
  ];

  return (
    <div className="background">
    <div className="how-it-works-container">
      <h2 className="how-it-works-title">How it Works</h2>
      <p className="how-it-works-subtitle">
        We provide online instant cash loans with quick approval that suit your term
      </p>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <div className="step-number">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default HowItWorks;
