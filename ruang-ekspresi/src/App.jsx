import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PillarsSection from './components/PillarsSection';
import ScheduleSection from './components/ScheduleSection';
import CardGallery from './components/CardGallery';
import ProjectShowcase from './components/ProjectShowcase';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-14 md:pt-12">
        <HeroSection />
        <PillarsSection />
        <ScheduleSection />
        <CardGallery />
        <ProjectShowcase />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;