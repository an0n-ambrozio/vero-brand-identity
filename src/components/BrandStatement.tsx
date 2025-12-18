
import React from 'react';

export const BrandStatement: React.FC = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto h-full flex items-center justify-center relative overflow-hidden">
      {/* Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none opacity-[0.03]">
        <h1 className="text-[400px] font-heading font-bold text-center leading-none tracking-tighter text-white">
          VERO
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full px-8 relative z-10">
        {/* Left: The "Hook" - Big & Bold */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="mb-12">
            <span className="bg-vero-orange/20 text-vero-orange px-3 py-1 font-mono text-xs tracking-widest uppercase mb-6 inline-block">
              02_Manifesto
            </span>
            <h2 className="font-heading text-5xl md:text-7xl font-bold text-white leading-[0.9] tracking-tight">
              THE <br />
              INVISIBLE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-vero-orange to-white">INFRASTRUCTURE.</span>
            </h2>
          </div>
        </div>

        {/* Right: The "Explanation" - Technical & Precision */}
        <div className="md:col-span-5 flex flex-col justify-end pb-4">
          <div className="border-l border-vero-orange/50 pl-8 relative">
            {/* Animated Scanner Line */}
            <div className="absolute top-0 left-[-1px] w-[1px] h-24 bg-vero-orange animate-pulse"></div>

            <p className="text-xl md:text-2xl text-white font-medium mb-8 leading-snug">
              We don't just smooth the process. <br />
              <span className="text-vero-gray">We engineer the outcome.</span>
            </p>

            <div className="space-y-6 text-sm text-gray-400 font-mono">
              <p>
                <span className="text-vero-orange mr-2">&gt;&gt;</span>
                VERO is the operating system for high-value execution.
              </p>
              <p>
                <span className="text-vero-orange mr-2">&gt;&gt;</span>
                Assembling elite ecosystems for residential & commercial projects.
              </p>
              <p>
                <span className="text-vero-orange mr-2">&gt;&gt;</span>
                Eliminating friction through radical transparency and control.
              </p>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};
