import React from 'react';
import logoFull from '../assets/logo-white-orange.svg';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden z-10">

      <div className="relative z-10 p-12 flex flex-col items-center animate-fade-in-up">
        {/* Glow behind logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-vero-orange/5 blur-[100px] rounded-full pointer-events-none"></div>

        <img
          src={logoFull}
          alt="VERO"
          className="w-[300px] md:w-[500px] lg:w-[600px] relative z-20 drop-shadow-2xl mb-12 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        />

        <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <p className="text-vero-gray/60 font-mono text-[10px] uppercase tracking-[0.5em] backdrop-blur-sm bg-black/20 py-2 px-4 border border-white/5">
            Private Supply Chain Ecosystems
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-vero-gray/40">Scroll</span>
          <div className="w-[1px] h-12 bg-white/10 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-vero-orange animate-scroll-down"></div>
          </div>
        </div>
      </div>

    </div>
  );
};
