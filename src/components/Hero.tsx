'use client';

import { useState } from 'react';

export function Hero() {
    const [email, setEmail] = useState('');

    return (
        <section className="min-h-[80vh] flex items-center px-6 py-16 bg-[#0a1628]">
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <div>
                        {/* Badge - subtle */}
                        <div className="inline-flex items-center px-3 py-1 bg-[#1e3a5f] rounded-full mb-6">
                            <span className="text-cyan-400 text-xs font-medium">Private Access</span>
                        </div>

                        {/* Headline - Smaller, professional */}
                        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                            Freight Operations Software
                            <br />
                            <span className="text-cyan-400">for Complex Trade Lanes</span>
                        </h1>

                        {/* Subheadline - Professional copy */}
                        <p className="text-gray-400 text-base mb-8 max-w-md leading-relaxed">
                            Freightcode helps forwarding teams manage quotes, shipments, documentation,
                            compliance, and route-level risk from a single system.
                        </p>

                        {/* Email input + CTA */}
                        {/* Email input + CTA */}
                        <div className="flex flex-col sm:flex-row gap-3 mb-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="work@company.com"
                                className="flex-1 max-w-xs px-4 py-3 bg-[#0d1f35] border border-slate-700 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500"
                            />
                            <a
                                href="#access"
                                className="inline-flex items-center justify-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors text-sm"
                            >
                                Request Access
                            </a>
                        </div>

                        {/* Supporting line */}
                        <p className="text-slate-500 text-xs mb-6">
                            Designed for self-serve forwarders operating across regulated and volatile regions.
                        </p>

                        {/* Trust badges */}
                        <div className="flex gap-6 text-xs text-slate-400">
                            <span className="flex items-center gap-1.5">
                                <span className="text-emerald-400">✓</span> NO "CALL FOR PRICING"
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="text-emerald-400">✓</span> INSTANT SETUP
                            </span>
                        </div>
                    </div>

                    {/* Right: Dashboard preview */}
                    <div className="relative">
                        <div className="bg-[#0d1f35] rounded-xl border border-slate-700 shadow-2xl overflow-hidden">
                            {/* Window chrome */}
                            <div className="flex items-center gap-1.5 px-4 py-2 border-b border-slate-700">
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                                <span className="ml-auto text-xs text-slate-500">dashboard.freightcode.co.uk</span>
                            </div>

                            {/* Dashboard content preview */}
                            <div className="p-4 space-y-3">
                                {/* Stats row */}
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="bg-[#1e3a5f] rounded-lg p-3">
                                        <div className="text-[10px] text-slate-400 uppercase tracking-wide">Active Shipments</div>
                                        <div className="text-xl font-bold text-white">12</div>
                                    </div>
                                    <div className="bg-[#1e3a5f] rounded-lg p-3">
                                        <div className="text-[10px] text-slate-400 uppercase tracking-wide">Pending Quotes</div>
                                        <div className="text-xl font-bold text-white">5</div>
                                    </div>
                                    <div className="bg-transparent p-3">
                                        <div className="text-[10px] text-slate-400 uppercase tracking-wide">Critical Alerts</div>
                                        <div className="text-xl font-bold text-amber-400">1 ⚠️</div>
                                    </div>
                                </div>

                                {/* Route analysis card */}
                                <div className="bg-[#1e3a5f] rounded-lg p-3">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-white font-medium">📍 Route Analysis: LND → DXB</span>
                                        <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-[10px] font-medium rounded">HIGH RISK</span>
                                    </div>
                                    <div className="flex justify-between text-xs text-slate-400">
                                        <span>Score: 88/100</span>
                                        <span>Potential Delay: +4 Days</span>
                                    </div>
                                </div>

                                {/* Shipment row */}
                                <div className="bg-[#1e3a5f] rounded-lg p-3 flex justify-between items-center">
                                    <span className="text-sm text-white">PO-4921 • Shanghai</span>
                                    <span className="text-emerald-400 text-xs">Arrived 🚢</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
