import React from 'react';
import { usePrakriti } from '../../context/PrakritiContext';
import { FaUser, FaDumbbell, FaCut, FaEye } from 'react-icons/fa';
import '../../styles/FormSection.css';

function PhysicalTraits() {
  const { state, dispatch } = usePrakriti();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'UPDATE_PHYSICAL',
      payload: { [name]: value }
    });
  };
  
  // Alternative handler for direct name/value pairs
  const handleDirectChange = (name, value) => {
    dispatch({
      type: 'UPDATE_PHYSICAL',
      payload: { [name]: value }
    });
  };

  return (
    <div className="form-section">
      <h2>Physical Traits</h2>
      
      <div className="form-group">
        <div className="input-with-icon">
          <FaUser className="form-icon" />
          <label>Skin Type</label>
        </div>
        <select 
          name="skinType"
          value={state.physicalTraits.skinType || ''} 
          onChange={handleChange}
          className="enhanced-select"
        >
          <option value="">Select...</option>
          <option value="dry">Dry</option>
          <option value="oily">Oily</option>
          <option value="balanced">Balanced</option>
        </select>
      </div>

      <div className="form-group">
        <div className="input-with-icon">
          <FaDumbbell className="form-icon" />
          <label>Body Build</label>
        </div>
        <select 
          name="bodyBuild"
          value={state.physicalTraits.bodyBuild || ''} 
          onChange={handleChange}
          className="enhanced-select"
        >
          <option value="">Select...</option>
          <option value="thin">Naturally thin</option>
          <option value="muscular">Muscular/Medium</option>
          <option value="heavy">Heavier build</option>
        </select>
      </div>

      <div className="form-group">
        <div className="input-with-icon">
          <FaCut className="form-icon" />
          <label>Hair Type</label>
        </div>
        <select 
          name="hairType"
          value={state.physicalTraits.hairType || ''} 
          onChange={handleChange}
          className="enhanced-select"
        >
          <option value="">Select...</option>
          <option value="dry">Dry and thin</option>
          <option value="oily">Oily</option>
          <option value="thick">Thick and smooth</option>
        </select>
      </div>

      <div className="form-group">
        <div className="input-with-icon">
          <FaEye className="form-icon" />
          <label>Eye Size</label>
        </div>
        <select 
          name="eyeSize"
          value={state.physicalTraits.eyeSize || ''} 
          onChange={handleChange}
          className="enhanced-select"
        >
          <option value="">Select...</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
    </div>
  );
}

export default PhysicalTraits;
