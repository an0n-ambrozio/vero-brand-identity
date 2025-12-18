
import React from 'react';
import logoFull from '../assets/logo-escrita.svg';
import logoIcon from '../assets/vero-icon.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-24 px-6 relative overflow-hidden border-t border-white/10">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Lab Header */}
        <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div>
            <p className="text-vero-orange font-mono text-xs tracking-widest uppercase mb-2">System Architecture</p>
            <h2 className="text-white font-heading text-4xl font-bold">The Lab</h2>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-vero-gray/60 font-mono text-[10px]">VERSION 2.0.4</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-white text-xs font-bold uppercase tracking-widest">Systems Online</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left: Deconstructed Logo / Brand */}
          <div className="relative p-12 border border-white/5 bg-white/[0.02] backdrop-blur-sm group hover:border-vero-orange/30 transition-colors">
            {/* Corner Markers */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20"></div>

            <div className="flex flex-col items-center gap-8">
              <div className="relative">
                <img src={logoIcon} alt="Icon" className="w-16 opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 blur-xl" />
                <img src={logoIcon} alt="Icon" className="w-16 relative z-10 drop-shadow-[0_0_15px_rgba(255,163,47,0.3)]" />
              </div>
              <img src={logoFull} alt="VERO" className="h-10 opacity-80" />
              <p className="text-vero-gray/60 text-center font-mono text-[10px] max-w-xs leading-relaxed">
                Constructed for stability. Designed for elite performance.
                <br />
                The private infrastructure for the modern ecosystem.
              </p>
            </div>
          </div>

          {/* Right: Structure / Links */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs border-l-2 border-vero-orange pl-3">Modules</h4>
              <ul className="space-y-3 text-sm text-vero-gray">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-vero-orange/50 text-[10px]">01</span> Homeowner</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-vero-orange/50 text-[10px]">02</span> Pro App</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-vero-orange/50 text-[10px]">03</span> Admin Control</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-vero-orange/50 text-[10px]">04</span> Architecture</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs border-l-2 border-vero-orange pl-3">Protocol</h4>
              <ul className="space-y-3 text-sm text-vero-gray">
                <li><a href="#" className="hover:text-white transition-colors">Manifesto</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Lab</a></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-vero-gray/40 uppercase tracking-[0.2em] font-mono">
          <p>&copy; 2025 VERO LABS. INC.</p>
          <p>ALL SYSTEMS NOMINAL</p>
        </div>

      </div>
    </footer>
  );
};
