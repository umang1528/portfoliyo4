

import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import SkillsPage from './pages/SkillsPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ProjectDetailPage from './pages/ProjectDetailPage'; // Import ProjectDetailPage

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen"> {/* Removed bg-[var(--theme-bg)] */}
      <Navbar />
      <main className="flex-grow pt-20 md:pt-24 z-0">
        {/* The div for page transition animations now wraps the Routes */}
        <div key={location.pathname} className="animate-fadeInUp">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:projectId" element={<ProjectDetailPage />} /> {/* Added new route */}
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;