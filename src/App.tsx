
import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { BrandStatement } from './components/BrandStatement';
import { Pillars } from './components/Pillars';
import { Palette } from './components/Palette';
import { Typography } from './components/Typography';
import { VisualTone } from './components/VisualTone';
import { Applications } from './components/Applications';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-vero-black font-sans text-white selection:bg-vero-orange selection:text-white">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="foundation" className="reveal px-6 py-24 md:px-20 lg:py-40">
          <BrandStatement />
        </section>

        <section id="pillars" className="reveal px-6 py-24 md:px-20 lg:py-40 bg-white text-vero-black">
          <Pillars />
        </section>

        <section id="palette" className="reveal px-6 py-24 md:px-20 lg:py-40">
          <Palette />
        </section>

        <section id="typography" className="reveal px-6 py-24 md:px-20 lg:py-40 bg-vero-light text-vero-black">
          <Typography />
        </section>

        <section id="tone" className="reveal px-6 py-24 md:px-20 lg:py-40 border-t border-vero-black/10">
          <VisualTone />
        </section>

        <section id="applications" className="reveal px-6 py-24 md:px-20 lg:py-40 bg-white text-vero-black">
          <Applications />
        </section>
      </main>
    </div>
  );
};

export default App;
