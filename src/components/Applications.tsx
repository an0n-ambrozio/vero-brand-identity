
import React from 'react';
import logoFull from '../assets/logo-escrita.svg';
import logoIcon from '../assets/vero-icon.svg';
import homeownerImg from '../assets/homeowner.png';
import signupImg from '../assets/signup.png';

export const Applications: React.FC = () => {
    return (
        <div className="max-w-[1400px] mx-auto h-full flex flex-col justify-center py-20 px-8">
            <div className="mb-20 flex items-end justify-between">
                <div>
                    <span className="text-vero-orange font-bold uppercase tracking-widest text-xs">Full Ecosystem Preview</span>
                    <h2 className="font-heading font-bold text-4xl mt-4">The Platform</h2>
                </div>
                <div className="text-right hidden md:block">
                    <p className="text-vero-gray text-xs font-mono tracking-widest">4 MODULES ACTIVE</p>
                    <p className="text-white font-bold">LIVE ENVIRONMENT</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* 1. SIGNUP - Left Column, Normal Position */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-vero-orange/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
                    <img
                        src={signupImg}
                        alt="Sign Up"
                        className="w-full h-auto object-contain relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* 2. HOMEOWNER - Right Column, Staggered/Lower */}
                <div className="relative group md:mt-32">
                    <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
                    <img
                        src={homeownerImg}
                        alt="Homeowner"
                        className="w-full h-auto object-contain relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                </div>

            </div>
        </div>
    );
};
