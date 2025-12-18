
import React from 'react';
import logoFull from '../assets/logo-white-orange.svg';
import logoIcon from '../assets/icone.svg';

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

                {/* 1. LOGIN PORTAL (Dark/Premium) */}
                <div className="w-full bg-[#050505] border border-white/10 shadow-2xl relative h-[500px] flex flex-col overflow-hidden group hover:border-vero-orange/30 transition-colors">
                    {/* Header */}
                    <div className="h-8 bg-black border-b border-white/5 flex items-center px-4 justify-between">
                        <div className="flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500/20"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
                        </div>
                        <div className="text-[8px] text-vero-gray/40 font-mono">auth.vero.network</div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 flex relative">
                        {/* Brand Side */}
                        <div className="w-1/2 h-full bg-[#020202] relative flex flex-col justify-between p-8 border-r border-white/5">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                            <img src={logoFull} className="w-24 relative z-10" />
                            <div className="relative z-10">
                                <p className="text-white font-heading font-bold text-3xl leading-tight">
                                    Legacy <br />
                                    <span className="text-vero-orange italic">Redefined.</span>
                                </p>
                            </div>
                            <div className="text-vero-gray text-[8px] font-mono tracking-widest relative z-10">EST. 2025</div>
                        </div>
                        {/* Form Side */}
                        <div className="w-1/2 h-full bg-[#080808] flex items-center justify-center p-8">
                            <div className="w-full space-y-6">
                                <div className="space-y-4">
                                    <div className="border-b border-white/20 pb-2">
                                        <p className="text-[10px] text-vero-gray uppercase">Email</p>
                                        <p className="text-white text-sm">admin@vero.com</p>
                                    </div>
                                    <div className="border-b border-white/20 pb-2">
                                        <p className="text-[10px] text-vero-gray uppercase">Pass</p>
                                        <p className="text-white text-sm">•••••••••</p>
                                    </div>
                                </div>
                                <button className="w-full bg-white text-black font-bold uppercase tracking-widest text-[10px] py-3 hover:bg-vero-orange transition-colors">
                                    Enter
                                </button>
                                <div className="flex items-center gap-2 justify-center opacity-50">
                                    <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></div>
                                    <span className="text-[8px] text-vero-gray uppercase">FaceID Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. CLIENT PORTAL (Clean/White) */}
                <div className="w-full bg-[#F5F5F5] border border-white/10 shadow-2xl relative h-[500px] flex flex-col overflow-hidden group hover:border-vero-orange/30 transition-colors">
                    <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center px-4 justify-between text-black">
                        <div className="flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        </div>
                        <div className="text-[8px] text-gray-400 font-mono">client.portal</div>
                    </div>
                    <div className="flex-1 flex relative">
                        <div className="w-16 bg-white border-r border-gray-100 flex flex-col items-center py-6 gap-6">
                            <img src={logoIcon} className="w-4 opacity-20" />
                            <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-[10px] rounded">P</div>
                            <div className="w-6 h-6 bg-gray-100 text-gray-400 flex items-center justify-center text-[10px] rounded">H</div>
                        </div>
                        <div className="flex-1 p-8 overflow-hidden">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <span className="text-vero-orange text-[8px] font-bold uppercase tracking-widest">New Booking</span>
                                    <h3 className="font-heading font-bold text-2xl text-black">Interior Paint</h3>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] text-gray-400 uppercase">Property</p>
                                    <p className="text-xs font-bold text-black">Penthouse 4B</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="border border-gray-200 p-4 bg-white opacity-50">
                                    <div className="h-1 w-8 bg-gray-300 mb-2"></div>
                                    <p className="font-bold text-xs text-black">Standard</p>
                                    <p className="text-[9px] text-gray-400">Basic Prep</p>
                                </div>
                                <div className="border-2 border-vero-orange bg-vero-orange/5 p-4 relative">
                                    <div className="absolute top-2 right-2 text-vero-orange">★</div>
                                    <div className="h-1 w-8 bg-vero-orange mb-2"></div>
                                    <p className="font-bold text-xs text-black">VERO Ultra</p>
                                    <p className="text-[9px] text-gray-500">Level 5 Skim Coat</p>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <div className="flex justify-between items-center bg-black text-white p-4">
                                    <div className="text-xs">
                                        <p className="text-gray-400 text-[8px] uppercase">Est. Total</p>
                                        <p className="font-mono">$ 8,200.00</p>
                                    </div>
                                    <button className="bg-vero-orange text-black px-4 py-2 text-[9px] font-bold uppercase hover:bg-white transition-colors">
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. PRO PORTAL (Dark/App-like) */}
                <div className="w-full bg-[#111] border border-white/10 shadow-2xl relative h-[500px] flex flex-col overflow-hidden group hover:border-vero-orange/30 transition-colors">
                    <div className="h-8 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4 justify-between">
                        <div className="flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-white/10"></div>
                        </div>
                        <div className="text-[8px] text-vero-gray/40 font-mono">pro.app</div>
                    </div>
                    <div className="flex-1 p-8 flex flex-col items-center justify-center relative">
                        <div className="w-full max-w-[300px]">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-10 h-10 bg-vero-orange text-black font-bold flex items-center justify-center text-sm">MS</div>
                                <div className="flex-1">
                                    <p className="text-white text-sm font-bold">Mike Smith</p>
                                    <div className="h-1 w-20 bg-gray-800 rounded-full mt-2 overflow-hidden">
                                        <div className="h-full w-[90%] bg-green-500"></div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-vero-gray text-[8px] uppercase">Wallet</p>
                                    <p className="text-white font-mono text-sm">$12.4k</p>
                                </div>
                            </div>

                            <div className="bg-[#1a1a1a] border border-white/10 p-5 hover:border-vero-orange transition-colors cursor-pointer relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-vero-orange"></div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-[9px] bg-vero-orange/20 text-vero-orange px-1 font-bold uppercase">New Job</span>
                                    <span className="text-[9px] text-gray-500">Just now</span>
                                </div>
                                <h4 className="text-white font-bold text-lg">Las Olas Penthouse</h4>
                                <p className="text-gray-400 text-xs mt-1">Full Interior • Level 5</p>
                                <div className="mt-4 flex justify-between items-center border-t border-white/5 pt-3">
                                    <span className="text-white font-mono text-sm">$ 8,200</span>
                                    <span className="text-xs text-gray-300 uppercase font-bold tracking-widest">Accept &gt;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. ADMIN PORTAL (Data Dense) */}
                <div className="w-full bg-white border border-white/10 shadow-2xl relative h-[500px] flex flex-col overflow-hidden group hover:border-vero-orange/30 transition-colors">
                    <div className="h-8 bg-black border-b border-white/5 flex items-center px-4 justify-between shrink-0">
                        <div className="text-white text-[9px] font-bold uppercase tracking-widest">VERO Admin</div>
                        <div className="text-[8px] text-gray-500 font-mono">hq.control</div>
                    </div>
                    <div className="flex-1 flex">
                        <div className="w-12 bg-gray-50 border-r border-gray-100 flex flex-col items-center py-4 gap-4">
                            <div className="w-6 h-6 bg-black text-white text-[10px] flex items-center justify-center">QC</div>
                            <div className="w-6 h-6 text-gray-300 text-[10px] flex items-center justify-center">📊</div>
                        </div>
                        <div className="flex-1 p-6">
                            <div className="flex justify-between items-end mb-6">
                                <h3 className="font-heading font-bold text-xl text-black">Quality Queue</h3>
                                <div className="text-right">
                                    <p className="text-[8px] text-gray-400 uppercase">Pending Review</p>
                                    <p className="text-xl font-mono text-vero-orange">04</p>
                                </div>
                            </div>

                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-black md:text-[9px] text-[7px] uppercase tracking-widest text-gray-400">
                                        <th className="pb-2">ID</th>
                                        <th className="pb-2">Pro</th>
                                        <th className="pb-2">Proof</th>
                                        <th className="pb-2 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-xs">
                                    <tr className="border-b border-gray-100">
                                        <td className="py-3 font-mono text-gray-400">#8821</td>
                                        <td className="py-3 font-bold">Mike S.</td>
                                        <td className="py-3 text-blue-600 underline text-[10px]">IMG_2204.jpg</td>
                                        <td className="py-3 text-right"><span className="bg-green-100 text-green-700 px-2 py-1 text-[8px] font-bold uppercase">Pass</span></td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="py-3 font-mono text-gray-400">#8824</td>
                                        <td className="py-3 font-bold">Ana P.</td>
                                        <td className="py-3 text-blue-600 underline text-[10px]">IMG_9921.jpg</td>
                                        <td className="py-3 text-right"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 text-[8px] font-bold uppercase">Review</span></td>
                                    </tr>
                                    <tr className="border-b border-gray-100 opacity-50">
                                        <td className="py-3 font-mono text-gray-400">#8829</td>
                                        <td className="py-3 font-bold">Jorge L.</td>
                                        <td className="py-3 text-gray-400 text-[10px]">Pending...</td>
                                        <td className="py-3 text-right"><span className="bg-gray-100 text-gray-400 px-2 py-1 text-[8px] font-bold uppercase">Wait</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
