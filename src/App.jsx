import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrakritiProvider } from './context/PrakritiContext';
import Header from './components/Header';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import './styles/global.css';

function App() {
  return (
    <PrakritiProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Router>
    </PrakritiProvider>
  );
}

export default App;
