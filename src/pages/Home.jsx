import { Link } from 'react-router-dom';
import { FaLeaf, FaHeartbeat, FaBalanceScale, FaAppleAlt } from 'react-icons/fa';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>Discover Your Prakriti</h1>
          <p className="subtitle">
            Understand your unique body constitution through Ayurvedic wisdom
          </p>
          <div className="hero-buttons">
            <Link to="/quiz" className="btn-primary btn-large">
              Start Your Journey
            </Link>
            <a href="#about" className="btn-secondary btn-large">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="doshas">
        <div className="container">
          <h2>Three Doshas of Ayurveda</h2>
          
          <div className="dosha-grid">
            <div className="dosha-card">
              <h3>Vata</h3>
              <p>Element: Air & Space</p>
              <ul>
                <li>Thin body frame</li>
                <li>Dry skin</li>
                <li>Quick thinking</li>
                <li>Restless energy</li>
              </ul>
            </div>

            <div className="dosha-card">
              <h3>Pitta</h3>
              <p>Element: Fire & Water</p>
              <ul>
                <li>Medium build</li>
                <li>Oily skin</li>
                <li>Sharp intellect</li>
                <li>Intense nature</li>
              </ul>
            </div>

            <div className="dosha-card">
              <h3>Kapha</h3>
              <p>Element: Earth & Water</p>
              <ul>
                <li>Heavier build</li>
                <li>Smooth skin</li>
                <li>Calm mindset</li>
                <li>Steady energy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <h2>What is Ayurveda?</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Ayurveda is an ancient holistic healing system that originated in India over 5,000 years ago. 
                The term "Ayurveda" combines two Sanskrit words: "Ayur" (life) and "Veda" (science or knowledge), 
                literally translating to "the science of life."
              </p>
              <p>
                At its core, Ayurveda views health as a perfect balance between body, mind, and spirit. 
                It emphasizes prevention of illness through lifestyle practices, diet, herbal remedies, 
                and personalized healthcare based on your unique constitution or "Prakriti."
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <FaLeaf className="placeholder-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container">
          <h2>Benefits of Knowing Your Prakriti</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaHeartbeat />
              </div>
              <h3>Personalized Health</h3>
              <p>Discover dietary and lifestyle recommendations specifically tailored to your unique constitution.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaBalanceScale />
              </div>
              <h3>Balance & Harmony</h3>
              <p>Learn how to maintain balance in your life and prevent imbalances that lead to disease.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaAppleAlt />
              </div>
              <h3>Optimal Nutrition</h3>
              <p>Understand which foods are most beneficial for your body type and which ones to avoid.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Discover Your Prakriti?</h2>
          <p>Take our comprehensive quiz to understand your unique Ayurvedic constitution.</p>
          <Link to="/quiz" className="btn-primary">
            Take the Quiz Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
