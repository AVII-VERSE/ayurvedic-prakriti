import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const location = useLocation();
  
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>Ayurvedic Prakriti</h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
