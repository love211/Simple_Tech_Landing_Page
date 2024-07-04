
import React from 'react';
import Header from './components/Header';
import OpeningSection from './components/OpeningSection';
import ProductSection from './components/ProductSection';
import ContactSection from './components/ContactSection';

import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
      
      <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<OpeningSection />} />
        <Route exact path="/product" element={<ProductSection />} />
        <Route exact path="/contact" element={<ContactSection />} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
