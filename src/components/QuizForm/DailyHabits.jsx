import React from 'react';
import { usePrakriti } from '../../context/PrakritiContext';
import { FaBed, FaUtensils } from 'react-icons/fa';
import '../../styles/FormSection.css';

function DailyHabits() {
  const { state, dispatch } = usePrakriti();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'UPDATE_HABITS',
      payload: { [name]: value }
    });
  };

  return (
    <div className="form-section">
      <h2>Daily Habits</h2>
      <div className="form-group">
        <div className="input-with-icon">
          <FaBed className="form-icon" />
          <label>How would you describe your sleep pattern?</label>
        </div>
        <div className="options enhanced-options">
          <div className="option">
            <input
              type="radio"
              id="sleep-light"
              name="sleepPattern"
              value="vata"
              checked={state.dailyHabits.sleepPattern === 'vata'}
              onChange={handleChange}
            />
            <label htmlFor="sleep-light">Light and interrupted sleep</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="sleep-moderate"
              name="sleepPattern"
              value="pitta"
              checked={state.dailyHabits.sleepPattern === 'pitta'}
              onChange={handleChange}
            />
            <label htmlFor="sleep-moderate">Moderate but sound sleep</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="sleep-deep"
              name="sleepPattern"
              value="kapha"
              checked={state.dailyHabits.sleepPattern === 'kapha'}
              onChange={handleChange}
            />
            <label htmlFor="sleep-deep">Deep and long sleep</label>
          </div>
        </div>
      </div>

      <div className="form-group">
        <div className="input-with-icon">
          <FaUtensils className="form-icon" />
          <label>How is your appetite?</label>
        </div>
        <div className="options enhanced-options">
          <div className="option">
            <input
              type="radio"
              id="appetite-variable"
              name="appetite"
              value="vata"
              checked={state.dailyHabits.appetite === 'vata'}
              onChange={handleChange}
            />
            <label htmlFor="appetite-variable">Variable and unpredictable</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="appetite-strong"
              name="appetite"
              value="pitta"
              checked={state.dailyHabits.appetite === 'pitta'}
              onChange={handleChange}
            />
            <label htmlFor="appetite-strong">Strong and regular</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="appetite-slow"
              name="appetite"
              value="kapha"
              checked={state.dailyHabits.appetite === 'kapha'}
              onChange={handleChange}
            />
            <label htmlFor="appetite-slow">Slow but steady</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyHabits;