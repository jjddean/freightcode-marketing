'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TariffUnifiedTool } from '@/components/tools/TariffUnifiedTool';

export default function ToolsPage() {
    return (
        <main className="min-h-screen bg-[#0a1628]">
            <Header />

            {/* Hero Section for Tools */}
            <section className="pt-32 pb-16 border-b border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <div className="inline-flex items-center px-3 py-1 bg-[#1e3a5f] rounded-full mb-6">
                        <span className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest">Trade Tools</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        Tariff Refund <span className="text-cyan-400">Estimator</span>
                    </h1>
                    <p className="text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        Evaluate potential Section 301 / IEEPA recovery claims on China-origin imports.
                        Forensic baseline estimation for strategic decision making.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 relative">
                <div className="max-w-4xl mx-auto">
                    <section className="py-20 px-6 relative">
                        <div className="max-w-4xl mx-auto">
                            <TariffUnifiedTool />
                        </div>
                    </section>
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

            <Footer />
        </main>
    );
}
