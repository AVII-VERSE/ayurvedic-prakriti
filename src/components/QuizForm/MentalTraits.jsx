import React from 'react';
import { usePrakriti } from '../../context/PrakritiContext';
import { FaBrain, FaBalanceScale } from 'react-icons/fa';
import '../../styles/FormSection.css';

function MentalTraits() {
  const { state, dispatch } = usePrakriti();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'UPDATE_MENTAL',
      payload: { [name]: value }
    });
  };

  return (
    <div className="form-section">
      <h2>Mental Traits</h2>
      <div className="form-group">
        <div className="input-with-icon">
          <FaBrain className="form-icon" />
          <label>How would you describe your learning style?</label>
        </div>
        <div className="options enhanced-options">
          <div className="option">
            <input
              type="radio"
              id="learning-quick"
              name="learningStyle"
              value="vata"
              checked={state.mentalTraits.learningStyle === 'vata'}
              onChange={handleChange}
            />
            <label htmlFor="learning-quick">Quick to learn, quick to forget</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="learning-methodical"
              name="learningStyle"
              value="pitta"
              checked={state.mentalTraits.learningStyle === 'pitta'}
              onChange={handleChange}
            />
            <label htmlFor="learning-methodical">Methodical and focused learning</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="learning-slow"
              name="learningStyle"
              value="kapha"
              checked={state.mentalTraits.learningStyle === 'kapha'}
              onChange={handleChange}
            />
            <label htmlFor="learning-slow">Slow to learn, excellent retention</label>
          </div>
        </div>
      </div>

      <div className="form-group">
        <div className="input-with-icon">
          <FaBalanceScale className="form-icon" />
          <label>How do you handle stress?</label>
        </div>
        <div className="options enhanced-options">
          <div className="option">
            <input
              type="radio"
              id="stress-anxious"
              name="stressResponse"
              value="vata"
              checked={state.mentalTraits.stressResponse === 'vata'}
              onChange={handleChange}
            />
            <label htmlFor="stress-anxious">Become anxious and worried</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="stress-irritable"
              name="stressResponse"
              value="pitta"
              checked={state.mentalTraits.stressResponse === 'pitta'}
              onChange={handleChange}
            />
            <label htmlFor="stress-irritable">Become irritable and intense</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="stress-withdraw"
              name="stressResponse"
              value="kapha"
              checked={state.mentalTraits.stressResponse === 'kapha'}
              onChange={handleChange}
            />
            <label htmlFor="stress-withdraw">Withdraw and become stubborn</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentalTraits;