import React from 'react';

export const Background: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#0A0A0F]">
            {/* Deep Ambient Noise */}
            <div className='absolute inset-0 opacity-[0.03] mix-blend-overlay' style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}></div>

            {/* Spotlight Effects - Central Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-vero-orange/5 blur-[120px] rounded-full"></div>

            {/* Subtle Gradient Grid - Optional Tech Feel */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

            {/* Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0A0A0F]/50 to-[#0A0A0F]"></div>
        </div>
    );
};
