import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePrakriti } from '../context/PrakritiContext';
import { calculateDosha } from '../utils/calculateDosha';
import PhysicalTraits from '../components/QuizForm/PhysicalTraits';
import MentalTraits from '../components/QuizForm/MentalTraits';
import DailyHabits from '../components/QuizForm/DailyHabits';
import EnvironmentalReactions from '../components/QuizForm/EnvironmentalReactions';
import ProgressBar from '../components/ProgressBar';
import { FaArrowRight, FaArrowLeft, FaClipboardCheck } from 'react-icons/fa';
import '../styles/Quiz.css';
import '../styles/FormSection.css';

function Quiz() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const { state, dispatch } = usePrakriti();

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep === totalSteps) {
      const results = calculateDosha(state);
      dispatch({ type: 'SET_RESULTS', payload: results });
      navigate('/results');
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PhysicalTraits />;
      case 2:
        return <MentalTraits />;
      case 3:
        return <DailyHabits />;
      case 4:
        return <EnvironmentalReactions />;
      default:
        return null;
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>Discover Your Prakriti</h1>
        <p className="quiz-description">
          Answer the following questions about your natural tendencies and traits.
          Choose the option that best describes you throughout your life, not just currently.
        </p>
      </div>

      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      
      <div className="quiz-form">
        <div className="quiz-step-indicator">
          <span className="step-number">{currentStep}</span>
          <span className="step-title">
            {currentStep === 1 && 'Physical Traits'}
            {currentStep === 2 && 'Mental Traits'}
            {currentStep === 3 && 'Daily Habits'}
            {currentStep === 4 && 'Environmental Reactions'}
          </span>
        </div>

        {renderStep()}
      </div>

      <div className="quiz-navigation">
        {currentStep > 1 && (
          <button 
            className="btn-secondary" 
            onClick={handlePrevious}
          >
            <FaArrowLeft className="btn-icon" />
            <span>Previous</span>
          </button>
        )}
        <button 
          className="btn-primary" 
          onClick={handleNext}
        >
          <span>{currentStep === totalSteps ? 'See Results' : 'Next'}</span>
          {currentStep === totalSteps ? <FaClipboardCheck className="btn-icon" /> : <FaArrowRight className="btn-icon" />}
        </button>
      </div>
    </div>
  );
}

export default Quiz;