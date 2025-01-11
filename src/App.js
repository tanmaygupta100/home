import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import { Route, Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
