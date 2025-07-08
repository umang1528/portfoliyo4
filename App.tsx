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
import ProjectDetailPage from './pages/ProjectDetailPage';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text-primary)] transition-colors duration-300 ease-in-out">
      <Navbar />

      <main className="flex-grow pt-0 md:pt-24 z-0">
        {/* Page transition animation wrapper */}
        <div key={location.pathname} className="animate-fadeInUp">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:projectId" element={<ProjectDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
