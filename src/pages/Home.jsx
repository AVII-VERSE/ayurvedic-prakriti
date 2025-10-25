import { Link } from 'react-router-dom';
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
          <Link to="/quiz" className="btn-primary btn-large">
            Start Your Journey
          </Link>
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
    </div>
  );
}

export default Home;
