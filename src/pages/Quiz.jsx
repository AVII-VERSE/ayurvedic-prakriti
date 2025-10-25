import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePrakriti } from '../context/PrakritiContext';
import { calculateDosha } from '../utils/calculateDosha';
import PhysicalTraits from '../components/QuizForm/PhysicalTraits';
import MentalTraits from '../components/QuizForm/MentalTraits';
import DailyHabits from '../components/QuizForm/DailyHabits';
import EnvironmentalReactions from '../components/QuizForm/EnvironmentalReactions';
import ProgressBar from '../components/ProgressBar';
import '../styles/Quiz.css';

function Quiz() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const { state } = usePrakriti();

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
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      
      <div className="quiz-form">
        {renderStep()}
      </div>

      <div className="quiz-navigation">
        {currentStep > 1 && (
          <button 
            className="btn-secondary" 
            onClick={handlePrevious}
          >
            Previous
          </button>
        )}
        <button 
          className="btn-primary" 
          onClick={handleNext}
        >
          {currentStep === totalSteps ? 'See Results' : 'Next'}
        </button>
      </div>
    </div>
  );
}

export default Quiz;