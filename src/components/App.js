import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Protfolio from './Protfolio';
import Navbar from './Navbar';

const App = () => {
  const [activeLink, setActiveLink] = useState('home');

  return (
    <Router>
      {/* Navbar with active link */}
      <Navbar activeLink={activeLink} />

      {/* Routes definition */}
      <Routes>
        <Route path="/" element={<Home setActiveLink={setActiveLink} />} />
        <Route path="/protfolio" element={<Protfolio setActiveLink={setActiveLink} />} />
      </Routes>
    </Router>
  );
};

export default App;
