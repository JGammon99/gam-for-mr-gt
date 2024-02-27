// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import DonatePage from './DonatePage';
import VideoPage from './VideoPage';
import NavigationBar from './NavigationBar';
import MissionsPage from './MissionsPage';
import './global.css';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/missions" element={<MissionsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
