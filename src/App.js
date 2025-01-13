import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import { Route, Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <div className="main-wrapper">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
}

export default App;
