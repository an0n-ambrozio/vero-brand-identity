import React from 'react';

export const VisualTone: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto h-full flex flex-col justify-center py-20">
      <div className="mb-20 text-center relative">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-vero-orange/20 -z-10"></div>
        <span className="text-vero-orange font-bold uppercase tracking-widest text-xs bg-vero-black px-4 relative">Brand Philosophy</span>
        <h2 className="font-heading font-bold text-5xl md:text-7xl mt-8 tracking-tighter text-white relative inline-block">
          VERO does not introduce itself.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-vero-orange to-white italic">VERO operates.</span>
        </h2>
      </div>

      {/* Deconstructed Grid */}
      <div className="relative h-[600px] w-full mt-12">

        {/* Layer 1: Minimalist (Background Wireframe) */}
        <div className="absolute top-0 left-0 w-2/3 h-2/3 border border-white/10 p-8 flex flex-col justify-between group hover:border-vero-orange/30 transition-colors duration-500">
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-vero-orange"></div>
          <div>
            <span className="font-mono text-vero-gray/50 text-xs">P01</span>
            <h3 className="font-heading font-bold text-3xl text-white mt-2">Minimalist</h3>
          </div>
          <p className="text-vero-gray text-sm leading-relaxed max-w-sm">
            "We eliminate noise to focus on operation." <br />
            <span className="text-white/30 text-xs mt-2 block">Reduction to essential forms.</span>
          </p>
        </div>

        {/* Layer 2: Negative Space (Floating Center) */}
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-vero-black border border-white/20 p-8 flex flex-col justify-center z-10 shadow-2xl group hover:border-white/40 transition-all duration-500">
          <div className="absolute -top-4 right-12 text-[120px] font-heading font-medium text-white/5 pointer-events-none">Ø</div>
          <h3 className="font-heading font-bold text-3xl text-white mb-4">Negative Space</h3>
          <p className="text-vero-gray text-sm leading-relaxed">
            Breathing room is a luxury. We use emptiness to elevate importance.
          </p>
          <div className="w-full h-[1px] bg-gradient-to-r from-vero-orange to-transparent mt-6"></div>
        </div>

        {/* Layer 3: Functionality (Bottom Anchor) */}
        <div className="absolute bottom-0 left-12 w-1/2 h-1/3 bg-vero-light p-8 text-black flex items-center justify-between z-20 group">
          <div>
            <h3 className="font-heading font-bold text-3xl mb-2">Functionality</h3>
            <p className="text-black/60 text-sm max-w-xs">Technical aesthetic. Surgical precision only.</p>
          </div>
          <div className="h-12 w-12 border-2 border-black/10 rounded-full flex items-center justify-center group-hover:border-vero-orange transition-colors duration-300">
            <div className="w-2 h-2 bg-vero-orange"></div>
          </div>
        </div>

        {/* Decorative Lines */}
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/5 border-l border-dashed border-white/10"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-white/5 border-t border-dashed border-white/10"></div>

      </div>
    </div>
  );
};
