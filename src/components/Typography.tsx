import React from 'react';

export const Typography: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto h-full flex flex-col justify-center">
      <div className="mb-12">
        <span className="text-vero-orange font-bold uppercase tracking-widest text-xs">Hierarchy</span>
        <h2 className="font-heading font-bold text-4xl mt-4">Typography</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 h-[600px] border border-vero-black/10">

        {/* Left Side: IBM Plex Sans (Technical) */}
        <div className="relative bg-vero-black text-white p-12 flex flex-col justify-between overflow-hidden group">
          {/* Massive Background Glyph */}
          <span className="absolute -top-12 -left-12 text-[400px] font-heading font-bold opacity-10 select-none leading-none">Ag</span>

          <div className="relative z-10">
            <span className="font-mono text-vero-orange text-xs uppercase tracking-widest border border-vero-orange/30 px-2 py-1">Heading Font</span>
            <h3 className="font-heading font-bold text-5xl mt-6">IBM Plex Sans</h3>
          </div>

          <div className="relative z-10 grid grid-cols-2 gap-8 border-t border-white/20 pt-8 mt-auto">
            <div>
              <h4 className="text-vero-gray text-xs uppercase tracking-widest mb-2">Weights</h4>
              <p className="font-heading font-bold text-xl">Bold / 700</p>
              <p className="font-heading font-medium text-xl opacity-60">Medium / 500</p>
            </div>
            <div>
              <h4 className="text-vero-gray text-xs uppercase tracking-widest mb-2">Character</h4>
              <p className="text-sm font-light leading-relaxed">
                Geometric, technical, precise. Engineered for impact and authority.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Inter (Functional) */}
        <div className="relative bg-vero-light p-12 flex flex-col justify-between group">
          {/* Massive Background Glyph */}
          <span className="absolute -bottom-24 -right-12 text-[400px] font-sans font-black text-vero-black/5 select-none leading-none">Aa</span>

          <div className="relative z-10">
            <span className="font-mono text-vero-black/50 text-xs uppercase tracking-widest border border-vero-black/10 px-2 py-1">Body Font</span>
            <h3 className="font-sans font-bold text-5xl mt-6 text-vero-black">Inter</h3>
          </div>

          <div className="relative z-10">
            <div className="bg-white p-6 shadow-sm border border-black/5 max-w-sm ml-auto">
              <p className="font-sans text-vero-black text-lg leading-relaxed">
                "Good design is obvious. Great design is transparent."
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-vero-orange"></div>
                <p className="text-xs uppercase tracking-widest text-vero-gray">Readability Optimized</p>
              </div>
            </div>
          </div>

          <div className="relative z-10 border-t border-black/10 pt-8 flex justify-between items-end">
            <div>
              <h4 className="text-vero-gray text-xs uppercase tracking-widest mb-2">Weights</h4>
              <p className="font-sans font-bold text-xl text-vero-black">Bold</p>
              <p className="font-sans font-normal text-xl text-vero-black opacity-60">Regular</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
