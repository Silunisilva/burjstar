import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Layout & Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';
import AMCQuoteModal from './components/AMCQuoteModal';
import ProjectModal from './components/ProjectModal';
import ServiceModal from './components/ServiceModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import AMC from './pages/AMC';
import Projects from './pages/Projects';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

// Scroll to top helper on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Immediate scroll to top when page changes
    });
  }, [pathname]);

  return null;
}

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [defaultQuoteService, setDefaultQuoteService] = useState('');
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [activeServiceModal, setActiveServiceModal] = useState(null);

  const handleOpenQuoteModal = (serviceName = '') => {
    setDefaultQuoteService(serviceName || '');
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setDefaultQuoteService('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-neutral-900 font-sans selection:bg-[#D89828] selection:text-black">
      <ScrollToTop />

      {/* Global Vertical Navigation Sidebar & Mobile Header */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Routed Page Content & Footer Wrapper */}
      <div className="flex-1 flex flex-col pt-16 sm:pt-20 min-h-screen w-full">
        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  onOpenQuoteModal={handleOpenQuoteModal}
                  onSelectService={(srv) => setActiveServiceModal(srv)}
                  onSelectProject={(prj) => setActiveProjectModal(prj)}
                />
              } 
            />
            <Route 
              path="/about" 
              element={
                <About 
                  onOpenQuoteModal={handleOpenQuoteModal} 
                />
              } 
            />
            <Route 
              path="/services" 
              element={
                <Services 
                  onOpenQuoteModal={handleOpenQuoteModal}
                  onSelectService={(srv) => setActiveServiceModal(srv)}
                />
              } 
            />
            <Route 
              path="/amc" 
              element={
                <AMC 
                  onOpenQuoteModal={handleOpenQuoteModal}
                  onSelectService={(srv) => setActiveServiceModal(srv)}
                />
              } 
            />
            <Route 
              path="/projects" 
              element={
                <Projects 
                  onSelectProject={(prj) => setActiveProjectModal(prj)}
                  onOpenQuoteModal={handleOpenQuoteModal}
                />
              } 
            />
            <Route 
              path="/careers" 
              element={<Careers />} 
            />
            <Route 
              path="/contact" 
              element={
                <Contact 
                  onOpenQuoteModal={handleOpenQuoteModal} 
                />
              } 
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />
      </div>

      {/* Floating Interactive WhatsApp CTA */}
      <WhatsAppFloating />

      {/* AMC / Quote Modal */}
      <AMCQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        defaultService={defaultQuoteService}
      />

      {/* Project Case Study Details Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
        onEnquire={(prj) => {
          setActiveProjectModal(null);
          handleOpenQuoteModal(prj.categoryName || 'Construction & Contracting');
        }}
      />

      {/* Service Details & Specs Modal */}
      <ServiceModal
        service={activeServiceModal}
        onClose={() => setActiveServiceModal(null)}
        onEnquire={(srv) => {
          setActiveServiceModal(null);
          handleOpenQuoteModal(srv.title);
        }}
      />
    </div>
  );
}
