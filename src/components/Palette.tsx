import React from 'react';

export const Palette: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto h-full flex flex-col justify-center">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
        <div>
          <span className="text-vero-orange font-bold uppercase tracking-widest text-xs">Visual Language</span>
          <h2 className="font-heading font-bold text-4xl mt-4">Materiality</h2>
        </div>
      </div>

      {/* Mosaic Grid - "Bento" Style */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-px h-[600px] border border-white/10 bg-white/10">

        {/* Block 1: VERO Black (Dominant) */}
        <div className="md:col-span-2 md:row-span-2 bg-[#1E1E1E] p-8 relative group">
          <div className="absolute top-6 right-6 text-vero-gray/30 font-mono text-xs">01</div>
          <div className="h-full flex flex-col justify-between">
            <div>
              <h3 className="text-white font-heading font-bold text-3xl">VERO Black</h3>
              <p className="text-vero-gray mt-2 text-sm">#1E1E1E</p>
            </div>
            <div>
              <p className="text-vero-gray/60 text-xs uppercase tracking-widest mb-2">Usage</p>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                The foundation. Used for primary backgrounds, deep immersion, and authority.
              </p>
            </div>
          </div>
        </div>

        {/* Block 2: VERO Orange (Highlight) */}
        <div className="md:col-span-1 md:row-span-2 bg-[#FF8B25] p-8 relative group">
          <div className="absolute top-6 right-6 text-black/30 font-mono text-xs">02</div>
          <div className="h-full flex flex-col justify-between">
            <div>
              <h3 className="text-black font-heading font-bold text-3xl">Orange</h3>
              <p className="text-black/60 mt-2 text-sm">#FF8B25</p>
            </div>
            <p className="text-black font-medium text-sm leading-tight mt-auto">
              Energy. Focus points. Strategic indicators.
            </p>
          </div>
        </div>

        {/* Block 3: Light Gray */}
        <div className="md:col-span-1 bg-[#F2F2F2] p-6 relative">
          <div className="absolute top-4 right-4 text-black/20 font-mono text-xs">03</div>
          <h3 className="text-black font-heading font-bold text-xl">Concrete</h3>
          <p className="text-black/50 text-xs mt-1">#F2F2F2</p>
        </div>

        {/* Block 4: Medium Gray */}
        <div className="md:col-span-1 bg-[#9A9A9A] p-6 relative">
          <div className="absolute top-4 right-4 text-white/20 font-mono text-xs">04</div>
          <h3 className="text-white font-heading font-bold text-xl">Steel</h3>
          <p className="text-white/50 text-xs mt-1">#9A9A9A</p>
        </div>

      </div>

      {/* Bottom Technical Bar */}
      <div className="flex justify-between items-center mt-4 text-[10px] uppercase tracking-widest text-vero-gray/40 font-mono">
        <span>Color Space: sRGB</span>
        <span>Contrast Ratio: AAA</span>
      </div>
    </div>
  );
};
