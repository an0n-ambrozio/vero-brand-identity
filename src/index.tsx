import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Hero } from './components/Hero';
import { Background } from './components/Background';
import { BrandStatement } from './components/BrandStatement';
import { Pillars } from './components/Pillars';
import { Palette } from './components/Palette';
import { Typography } from './components/Typography';
import { VisualTone } from './components/VisualTone';
import { Applications } from './components/Applications';

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
    <div className="bg-vero-black font-sans text-white selection:bg-vero-orange selection:text-white relative min-h-screen">
      <Background />

      <main className="relative z-10">
        <section id="hero">
          <Hero />
        </section>

        {/* Keeping the sections standard and clean */}
        <section id="brand-statement" className="reveal px-6 py-24 md:px-20 lg:py-40">
          <BrandStatement />
        </section>

        <section id="pillars" className="reveal px-6 py-24 md:px-20 lg:py-40 bg-black/20 backdrop-blur-sm">
          <Pillars />
        </section>

        <section id="palette" className="reveal px-6 py-24 md:px-20 lg:py-40">
          <Palette />
        </section>

        <section id="typography" className="reveal px-6 py-24 md:px-20 lg:py-40 bg-white text-vero-black">
          <Typography />
        </section>

        <section id="tone" className="reveal px-6 py-24 md:px-20 lg:py-40">
          <VisualTone />
        </section>

        <section id="applications" className="reveal px-6 py-24 md:px-20 lg:py-40 bg-white text-vero-black">
          <Applications />
        </section>


      </main>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
