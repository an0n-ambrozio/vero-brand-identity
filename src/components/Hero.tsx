import React from 'react';
import logoIcon from '../assets/vero-icon.svg';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden z-10">

      <div className="relative z-10 p-12 flex flex-col items-center animate-fade-in-up">
        {/* Glow behind logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-vero-orange/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="flex flex-col items-center gap-6 mb-12">
          <img
            src={logoIcon}
            alt="VERO"
            className="w-24 md:w-32 relative z-20 drop-shadow-2xl opacity-0 animate-fade-in"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          />
        </div>

        <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
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
