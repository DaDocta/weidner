import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Skills from './pages/Skills';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Gallery />
      <Skills />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
