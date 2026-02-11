'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TariffUnifiedTool } from '@/components/tools/TariffUnifiedTool';
import { CurrencyConverter } from '@/components/tools/CurrencyConverter';
import { HSCodeLookup } from '@/components/tools/HSCodeLookup';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function ToolsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 bg-[#0a1628]">
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

            <section className="py-12 px-6 relative">
                <div className="max-w-5xl mx-auto space-y-20">
                    {/* Tariff Tool */}
                    <div className="relative">
                        <TariffUnifiedTool />
                    </div>

                    {/* Embedded Tools Section */}
                    <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
                        <div className="p-8 md:p-12 text-center bg-slate-50/50 border-b border-slate-100">
                            <div className="inline-flex items-center px-3 py-1 bg-cyan-50 rounded-full mb-4">
                                <span className="text-cyan-600 text-[10px] font-bold uppercase tracking-widest">Free Resources</span>
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Essential Trade Utilities</h2>
                            <p className="text-slate-500 max-w-2xl mx-auto text-lg mb-8">
                                Instant calculations and generic lookup tools for daily logistics operations.
                            </p>

                            <Tabs defaultValue="currency" className="max-w-3xl mx-auto">
                                <TabsList className="flex items-center justify-center gap-2 p-1 bg-slate-100 rounded-full mb-8 w-fit mx-auto">
                                    <TabsTrigger
                                        value="currency"
                                        className="px-6 py-2.5 rounded-full text-sm font-medium transition-all data-[state=active]:bg-white data-[state=active]:text-cyan-600 data-[state=active]:shadow-sm text-slate-500 hover:text-slate-900"
                                    >
                                        Currency Converter
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="hscode"
                                        className="px-6 py-2.5 rounded-full text-sm font-medium transition-all data-[state=active]:bg-white data-[state=active]:text-cyan-600 data-[state=active]:shadow-sm text-slate-500 hover:text-slate-900"
                                    >
                                        HS Code Lookup
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="currency" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="max-w-2xl mx-auto">
                                        <CurrencyConverter />
                                    </div>
                                </TabsContent>

                                <TabsContent value="hscode" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="max-w-2xl mx-auto">
                                        <HSCodeLookup />
                                    </div>
                                </TabsContent>
                            </Tabs>
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
