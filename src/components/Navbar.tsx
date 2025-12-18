
import React from 'react';
import logoFull from '../assets/logo-escrita.svg';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-vero-black/80 backdrop-blur-md border-b border-white/5 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src={logoFull} alt="VERO" className="h-8 md:h-10" />
      </div>
      <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-medium text-vero-gray">
        <a href="#foundation" className="hover:text-vero-orange transition-colors">Foundation</a>
        <a href="#pillars" className="hover:text-vero-orange transition-colors">Pillars</a>
        <a href="#palette" className="hover:text-vero-orange transition-colors">Palette</a>
        <a href="#typography" className="hover:text-vero-orange transition-colors">Typography</a>
        <a href="#applications" className="hover:text-vero-orange transition-colors">Applications</a>
      </div>
    </nav>
  );
};
