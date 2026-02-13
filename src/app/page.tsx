import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { InteractiveWalkthrough } from '@/components/InteractiveWalkthrough';
import { Features } from '@/components/Features';
import { FreeResourcesSection } from '@/components/FreeResourcesSection';

import { Pricing } from '@/components/Pricing';
import { Footer } from '@/components/Footer';
import { GeoRiskSection } from '@/components/GeoRiskSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white scroll-smooth">
      <Header />

      <div className="pt-14 relative bg-[#0a1628]">
        <Hero />
      </div>

      <section id="capabilities" className="bg-white">
        <Features />
      </section>

      <section id="walkthrough" className="bg-white border-b border-slate-100">
        <InteractiveWalkthrough />
      </section>

      <GeoRiskSection />

      <FreeResourcesSection />

      {/* 3.5. Tariff Refund Estimator Section - SOLID NAVY BACKGROUND */}
      <section id="tools" className="pt-12 pb-24 bg-[#0a1628] relative overflow-hidden border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-3 py-1 bg-[#1e3a5f] rounded-full mb-6">
                <span className="text-cyan-400 text-xs font-medium">Lead Magnet Tool</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                Are you owed a refund on <span className="text-cyan-400">China-origin duties?</span>
              </h2>

              <p className="text-slate-400 text-base leading-relaxed max-w-3xl mx-auto font-medium">
                Millions in Section 301 tariffs are currently being contested and refunded. Many forwarders and shippers
                overpaid on duties that are now eligible for recovery.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Instant Estimation</h4>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed">No HTS codes required for a baseline recovery estimate in seconds.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Granular Verification</h4>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed">Run simulations against specific commodity codes and entry dates.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-base">Precision Windowing</h5>
                    <p className="text-slate-400 text-sm leading-relaxed">Automatic verification against exact CIT court entry date eligibility.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" /></svg>
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-base">Evidence Packaging</h5>
                    <p className="text-slate-400 text-sm leading-relaxed">Generated reports ready for forensic broker audit and 7501 filing.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 w-full max-w-3xl mx-auto rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-center">
              <div className="inline-flex items-center px-3 py-1 bg-[#1e3a5f] rounded-full mb-4">
                <span className="text-cyan-400 text-xs font-medium">Tariff Refund Estimator</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quantify Section 301 Exposure</h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Estimate refund potential across China-origin imports using industry-standard recovery assumptions.
                Use this to prioritize audits before you pull entry data or broker records.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-slate-400 text-left inline-block">
                <li>• Baseline estimate from total import value (no HTS required)</li>
                <li>• Supports Section 301 and IEEPA scenarios</li>
                <li>• Designed for forwarders, brokers, and in-house trade teams</li>
              </ul>

              <div className="mt-6 flex justify-center">
                <a
                  href="/tools"
                  className="inline-flex items-center justify-center h-11 px-5 rounded-lg bg-cyan-500 text-slate-900 font-semibold hover:bg-cyan-400 transition-colors"
                >
                  Open Tariff Calculator
                </a>
              </div>
            </div>

            <p className="text-slate-500 text-xs leading-relaxed text-center max-w-3xl mx-auto mt-4">
              Estimates are directional only. Final eligibility depends on HTS classification, entry dates, and ongoing CIT rulings.
            </p>

            <p className="text-slate-500 text-xs italic text-center max-w-3xl mx-auto mt-6 leading-relaxed font-medium">
              *Our calculations align with the latest Section 301 litigation outcomes in the CIT. Actual recovery requires
              verified 7501 entry data processed by a licensed broker.
            </p>
            </div>
        </div>
      </section>

      {/* Pricing section hidden for private beta launch */}
      {/* 
      <section id="pricing" className="bg-white">
        <Pricing />
      </section> 
      */}

      <Footer />
    </main>
  );
}
