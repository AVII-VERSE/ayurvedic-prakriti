import { usePrakriti } from '../../context/PrakritiContext';
import '../../styles/FormSection.css';

function PhysicalTraits() {
  const { state, dispatch } = usePrakriti();

  const handleChange = (field, value) => {
    dispatch({
      type: 'UPDATE_PHYSICAL',
      payload: { [field]: value }
    });
  };

  return (
    <div className="form-section">
      <h2>Physical Traits</h2>
      
      <div className="form-group">
        <label>Skin Type</label>
        <select 
          value={state.physicalTraits.skinType || ''} 
          onChange={(e) => handleChange('skinType', e.target.value)}
        >
          <option value="">Select...</option>
          <option value="dry">Dry</option>
          <option value="oily">Oily</option>
          <option value="balanced">Balanced</option>
        </select>
      </div>

      <div className="form-group">
        <label>Body Build</label>
        <select 
          value={state.physicalTraits.bodyBuild || ''} 
          onChange={(e) => handleChange('bodyBuild', e.target.value)}
        >
          <option value="">Select...</option>
          <option value="thin">Naturally thin</option>
          <option value="muscular">Muscular/Medium</option>
          <option value="heavy">Heavier build</option>
        </select>
      </div>

      <div className="form-group">
        <label>Hair Type</label>
        <select 
          value={state.physicalTraits.hairType || ''} 
          onChange={(e) => handleChange('hairType', e.target.value)}
        >
          <option value="">Select...</option>
          <option value="dry">Dry and thin</option>
          <option value="oily">Oily</option>
          <option value="thick">Thick and smooth</option>
        </select>
      </div>

      <div className="form-group">
        <label>Eye Size</label>
        <select 
          value={state.physicalTraits.eyeSize || ''} 
          onChange={(e) => handleChange('eyeSize', e.target.value)}
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
