
import React from 'react';

const pillarList = [
  {
    title: 'EXCLUSIVITY',
    subtitle: 'ACCESS RESTRICTED',
    desc: 'Only the top 1% of market providers are invited to the network.',
    id: '01',
    icon: '🔒'
  },
  {
    title: 'CURATION',
    subtitle: 'RIGOROUS SELECTION',
    desc: 'Technical vetting based on 50+ data points of historical performance.',
    id: '02',
    icon: '💎'
  },
  {
    title: 'CONTROL',
    subtitle: 'ABSOLUTE MANAGEMENT',
    desc: 'Real-time oversight of timelines, budgets, and quality standards.',
    id: '03',
    icon: '⚡'
  },
  {
    title: 'EXECUTION',
    subtitle: 'PREMIUM DELIVERY',
    desc: 'Where detail is not just a priority, it is the only metric that matters.',
    id: '04',
    icon: '✨'
  }
];

export const Pillars: React.FC = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto min-h-screen flex flex-col justify-center px-4">

      <div className="flex justify-between items-end mb-20 px-4 border-b border-white/10 pb-8">
        <div>
          <span className="text-vero-orange font-mono text-[10px] uppercase tracking-[0.4em] block mb-4">03 // Fundamentals</span>
          <h2 className="font-heading font-bold text-5xl md:text-6xl text-white">THE CORE <span className="text-gray-700">KERNEL</span></h2>
        </div>
        <div className="hidden md:block text-right">
          <div className="flex gap-2 justify-end mb-2">
            <div className="w-2 h-2 bg-vero-orange rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-vero-orange rounded-full"></div>
          </div>
          <div className="text-vero-gray text-xs font-mono tracking-widest">SYSTEM_INTEGRITY: 100%</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px]">
        {pillarList.map((pillar, idx) => (
          <div key={idx} className="group relative bg-[#0A0A0A] border border-white/5 hover:border-vero-orange/50 transition-all duration-700 flex flex-col overflow-hidden hover:flex-[1.5]">

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-vero-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Header */}
            <div className="p-8 border-b border-white/5 flex justify-between items-start relative z-10">
              <span className="font-mono text-vero-gray/50 text-xs">0{idx + 1}</span>
              <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">{pillar.icon}</span>
            </div>

            {/* Main Body */}
            <div className="flex-1 p-8 flex flex-col justify-end relative z-10 transition-transform duration-500 group-hover:-translate-y-4">
              <h3 className="font-heading font-bold text-3xl text-white mb-2 tracking-tight group-hover:text-vero-orange transition-colors">
                {pillar.title}
              </h3>
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-6 border-l-2 border-vero-orange/50 pl-2">
                {pillar.subtitle}
              </p>

              <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
                <p className="text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-4">
                  {pillar.desc}
                </p>
              </div>

              {/* Decorative Tech Lines */}
              <div className="absolute bottom-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                <div className="w-1 h-4 bg-vero-orange"></div>
                <div className="w-1 h-2 bg-gray-600"></div>
                <div className="w-1 h-3 bg-gray-600"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
