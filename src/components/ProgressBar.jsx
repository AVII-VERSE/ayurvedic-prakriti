import React from 'react';
import '../styles/ProgressBar.css';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="progress-steps">
        <span>{currentStep} of {totalSteps}</span>
      </div>
    </div>
  );
};

export default ProgressBar;