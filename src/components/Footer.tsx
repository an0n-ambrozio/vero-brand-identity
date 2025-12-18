
import React from 'react';
import logoFull from '../assets/logo-white-orange.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-vero-black py-20 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <img src={logoFull} alt="VERO" className="h-8" />
          </div>
          <p className="text-vero-gray max-w-xs text-sm leading-relaxed">
            Private Platform for Elite Supplier Ecosystems.
            Invisible Infrastructure for High-Standard Projects.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div>
            <h5 className="text-white text-xs uppercase tracking-widest font-bold mb-6">Access</h5>
            <ul className="text-vero-gray text-xs space-y-4">
              <li><a href="#" className="hover:text-vero-orange transition-colors">Client Login</a></li>
              <li><a href="#" className="hover:text-vero-orange transition-colors">Supplier Portal</a></li>
              <li><a href="#" className="hover:text-vero-orange transition-colors">Request Trial</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white text-xs uppercase tracking-widest font-bold mb-6">Connect</h5>
            <ul className="text-vero-gray text-xs space-y-4">
              <li><a href="#" className="hover:text-vero-orange transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-vero-orange transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-vero-orange transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="hidden md:block">
            <h5 className="text-white text-xs uppercase tracking-widest font-bold mb-6">Global</h5>
            <ul className="text-vero-gray text-xs space-y-4">
              <li>São Paulo, BR</li>
              <li>New York, US</li>
              <li>London, UK</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] text-vero-gray uppercase tracking-widest">
        <p>&copy; 2024 VERO Platform. All rights reserved.</p>
        <p>Private Property</p>
      </div>
    </footer>
  );
};
