import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePrakriti } from '../context/PrakritiContext';
import { FaLeaf, FaFire, FaWater, FaDownload } from 'react-icons/fa';
import '../styles/Results.css';
import '../styles/Quiz.css';

function Results() {
  const { state } = usePrakriti();
  const { vata, pitta, kapha } = state.results || { vata: 0, pitta: 0, kapha: 0 };
  const [downloadStatus, setDownloadStatus] = useState('');

  const getDominantDosha = () => {
    const doshas = { vata, pitta, kapha };
    return Object.keys(doshas).reduce((a, b) => doshas[a] > doshas[b] ? a : b);
  };

  const dominantDosha = getDominantDosha();

  const doshaDescriptions = {
    vata: "Vata types are typically creative, energetic, and quick-thinking. They tend to be thin with dry skin and hair, and may have irregular habits and sleep patterns.",
    pitta: "Pitta types are typically intelligent, focused, and ambitious. They tend to have a medium build with warm skin, and may have a strong appetite and metabolism.",
    kapha: "Kapha types are typically calm, grounded, and loyal. They tend to have a solid build with cool, oily skin, and may have a slow, steady approach to life."
  };
  
  const handleDownload = () => {
    const doshaResults = `
Your Prakriti Results

Vata: ${vata}%
Pitta: ${pitta}%
Kapha: ${kapha}%

Dominant Dosha: ${dominantDosha.charAt(0).toUpperCase() + dominantDosha.slice(1)}

${doshaDescriptions[dominantDosha]}

Recommendations:
- Balance your ${dominantDosha} dosha with appropriate diet and lifestyle choices
- Learn more about Ayurvedic practices suited for your constitution
- Consider consulting with an Ayurvedic practitioner for personalized guidance
`;
    
    const element = document.createElement('a');
    const file = new Blob([doshaResults], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'prakriti-results.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    setDownloadStatus('Downloaded!');
    setTimeout(() => setDownloadStatus(''), 2000);
  };

  return (
    <div className="results-container">
      <div className="results-header">
        <h1>Your Prakriti Results</h1>
        <p className="results-subtitle">Based on your responses, here's your unique Ayurvedic constitution</p>
      </div>
      
      <div className="results-card">
        <div className="dosha-results">
          <div className="dosha-bar-container">
            <div className="dosha-label">
              <FaWater className="dosha-icon vata-icon" />
              <span>Vata</span>
            </div>
            <div className="dosha-bar">
              <div className="dosha vata" style={{ width: `${vata}%` }}>
                <span className="dosha-percentage">{vata}%</span>
              </div>
            </div>
          </div>
          
          <div className="dosha-bar-container">
            <div className="dosha-label">
              <FaFire className="dosha-icon pitta-icon" />
              <span>Pitta</span>
            </div>
            <div className="dosha-bar">
              <div className="dosha pitta" style={{ width: `${pitta}%` }}>
                <span className="dosha-percentage">{pitta}%</span>
              </div>
            </div>
          </div>
          
          <div className="dosha-bar-container">
            <div className="dosha-label">
              <FaLeaf className="dosha-icon kapha-icon" />
              <span>Kapha</span>
            </div>
            <div className="dosha-bar">
              <div className="dosha kapha" style={{ width: `${kapha}%` }}>
                <span className="dosha-percentage">{kapha}%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="dominant-dosha">
          <h2>Your Dominant Dosha is <span className={`dosha-name ${dominantDosha}`}>
            {dominantDosha.charAt(0).toUpperCase() + dominantDosha.slice(1)}
          </span></h2>
          <p className="dosha-description">{doshaDescriptions[dominantDosha]}</p>
        </div>
      </div>

      <div className="results-actions">
        <button 
          className="btn-primary download-button" 
          onClick={handleDownload}
        >
          <FaDownload className="btn-icon" />
          Download Results
        </button>
        {downloadStatus && (
          <span className="download-status">{downloadStatus}</span>
        )}
        <Link to="/quiz" className="btn-secondary">
          Retake Quiz
        </Link>
      </div>
    </div>
  );
}

export default Results;