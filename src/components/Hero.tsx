'use client';

import { useState } from 'react';
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

export function Hero() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const joinWaitlist = useMutation(api.marketing.joinWaitlist);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);
        try {
            await joinWaitlist({
                email,
                source: 'marketing-hero',
            });
            setSubmitted(true);
        } catch (error) {
            console.error("Waitlist error:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

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
                            Freight Operations for the
                            <br />
                            <span className="text-cyan-400">Next Frontier of Trade</span>
                        </h1>

                        {/* Subheadline - Professional copy */}
                        <p className="text-gray-400 text-base mb-8 max-w-md leading-relaxed">
                            Scale your forwarding business with unified carrier APIs,
                            GeoRisk Navigator™, and embedded trade finance.
                        </p>

                        {/* Email input + CTA */}
                        {submitted ? (
                            <div className="bg-[#1e3a5f]/30 border border-cyan-500/30 rounded-lg p-6 max-w-md animate-in fade-in zoom-in duration-500">
                                <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                                    <span className="text-emerald-400">✓</span> You're on the list!
                                </h3>
                                <p className="text-slate-400 text-sm">
                                    We'll notify you as soon as internal access opens for your region.
                                    Check your inbox for a welcome briefing soon.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="work@company.com"
                                    className="flex-1 max-w-xs px-4 py-3 bg-[#0d1f35] border border-slate-700 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500"
                                    required
                                />
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="inline-flex items-center justify-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors text-sm disabled:opacity-50"
                                >
                                    {loading ? 'Joining...' : 'Get Early Access'}
                                </button>
                            </form>
                        )}

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
