import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import TargetAudience from './components/TargetAudience';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProblemSolution />
      <Services />
      <TargetAudience />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;