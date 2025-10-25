import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLeaf } from 'react-icons/fa';
import '../styles/Header.css';

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <FaLeaf />
          <span>Ayurvedic Prakriti</span>
        </Link>
        
        <nav>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li>
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/quiz" 
                className={`nav-link ${location.pathname === '/quiz' ? 'active' : ''}`}
              >
                Take Quiz
              </Link>
            </li>
          </ul>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span>☰</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
