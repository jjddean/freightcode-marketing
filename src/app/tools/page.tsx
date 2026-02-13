'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TariffUnifiedTool } from '@/components/tools/TariffUnifiedTool';

export default function ToolsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 bg-[#0a1628]">
            <section className="pt-24 pb-12 px-6 relative">
                <div className="max-w-5xl mx-auto">
                    {/* Tariff Tool */}
                    <div className="relative">
                        <div className="bg-[#0d1f35] rounded-3xl border border-slate-700 overflow-hidden shadow-sm">
                            <div className="p-8 md:p-12 bg-[#0a1628]/40 border-b border-slate-700">
                                <div className="text-center mb-8">
                                    <div className="inline-flex items-center px-3 py-1 bg-[#1e3a5f] rounded-full mb-4">
                                        <span className="text-cyan-400 text-xs font-medium">Tariff Tool</span>
                                    </div>
                                    <h2 className="text-3xl font-bold text-white mb-3">
                                        Tariff Refund <span className="text-cyan-400">Estimator</span>
                                    </h2>
                                    <p className="text-blue-200/80 text-base max-w-2xl mx-auto">
                                        Estimate Section 301 and IEEPA exposure using simplified and advanced audit modes.
                                    </p>
                                </div>
                                <div className="max-w-2xl mx-auto">
                                    <TariffUnifiedTool />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compliance Note */}
            <section className="py-24 bg-[#0d1f35] text-white border-t border-slate-800 relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-2xl font-bold mb-6">Automated Compliance Fulfillment</h2>
                    <p className="text-slate-400 mb-16 max-w-2xl mx-auto text-base">
                        Our internal compliance team reviews all 7501 Entry Summaries for accuracy.
                        We track the entire recovery lifecycle in your Freightcode dashboard.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="bg-[#0a1628]/50 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-colors group">
                            <div className="text-cyan-400 font-bold text-lg mb-4 italic tracking-tighter group-hover:translate-x-1 transition-transform inline-block">01. ESTIMATE</div>
                            <p className="text-sm text-slate-500 leading-relaxed">Use the calculator to evaluate if your import volume warrants a detailed forensic audit.</p>
                        </div>
                        <div className="bg-[#0a1628]/50 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-colors group">
                            <div className="text-cyan-400 font-bold text-lg mb-4 italic tracking-tighter group-hover:translate-x-1 transition-transform inline-block">02. UPLOAD</div>
                            <p className="text-sm text-slate-500 leading-relaxed">Securely upload your 7501 Entry Summaries within the portal. Our automated ingestion handles the heavy lifting.</p>
                        </div>
                        <div className="bg-[#0a1628]/50 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-colors group">
                            <div className="text-cyan-400 font-bold text-lg mb-4 italic tracking-tighter group-hover:translate-x-1 transition-transform inline-block">03. RECOVER</div>
                            <p className="text-sm text-slate-500 leading-relaxed">We file the claims and update your status to <span className="text-emerald-400">"Audit in Progress"</span>. Track every dollar in real-time.</p>
                        </div>
                    </div>
                </div>
            </section>

            </main>
            <Footer />
        </div>
    );
}
