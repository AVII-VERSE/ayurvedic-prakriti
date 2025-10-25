import React from 'react';
import { usePrakriti } from '../../context/PrakritiContext';
import { FaSnowflake, FaSun } from 'react-icons/fa';
import '../../styles/FormSection.css';

function EnvironmentalReactions() {
  const { state, dispatch } = usePrakriti();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'UPDATE_ENVIRONMENTAL',
      payload: { [name]: value }
    });
  };

  return (
    <div className="form-section">
      <h2>Environmental Reactions</h2>
      <div className="form-group">
        <div className="input-with-icon">
          <FaSnowflake className="form-icon" />
          <label>How do you react to cold weather?</label>
        </div>
        <div className="options enhanced-options">
          <div className="option">
            <input
              type="radio"
              id="cold-dislike"
              name="coldReaction"
              value="vata"
              checked={state.environmentalReactions.coldReaction === 'vata'}
              onChange={handleChange}
            />
            <label htmlFor="cold-dislike">Strongly dislike cold</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="cold-moderate"
              name="coldReaction"
              value="pitta"
              checked={state.environmentalReactions.coldReaction === 'pitta'}
              onChange={handleChange}
            />
            <label htmlFor="cold-moderate">Moderate discomfort</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="cold-tolerate"
              name="coldReaction"
              value="kapha"
              checked={state.environmentalReactions.coldReaction === 'kapha'}
              onChange={handleChange}
            />
            <label htmlFor="cold-tolerate">Tolerate cold well</label>
          </div>
        </div>
      </div>

      <div className="form-group">
        <div className="input-with-icon">
          <FaSun className="form-icon" />
          <label>How do you react to hot weather?</label>
        </div>
        <div className="options enhanced-options">
          <div className="option">
            <input
              type="radio"
              id="hot-tolerate"
              name="hotReaction"
              value="vata"
              checked={state.environmentalReactions.hotReaction === 'vata'}
              onChange={handleChange}
            />
            <label htmlFor="hot-tolerate">Tolerate heat well</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="hot-dislike"
              name="hotReaction"
              value="pitta"
              checked={state.environmentalReactions.hotReaction === 'pitta'}
              onChange={handleChange}
            />
            <label htmlFor="hot-dislike">Strongly dislike heat</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="hot-moderate"
              name="hotReaction"
              value="kapha"
              checked={state.environmentalReactions.hotReaction === 'kapha'}
              onChange={handleChange}
            />
            <label htmlFor="hot-moderate">Moderate discomfort</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnvironmentalReactions;