import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductDemo } from '@/components/ProductDemo';
import { Features } from '@/components/Features';
import { TariffCalculator } from '@/components/tools/TariffCalculator';
import { FullModeSimulator } from '@/components/tools/FullModeSimulator';
import { Pricing } from '@/components/Pricing';
import { Footer } from '@/components/Footer';

export default function Home() {
  const productVideoId = '';

  return (
    <main className="min-h-screen bg-white scroll-smooth">
      <Header />

      <div className="pt-14 relative bg-[#0a1628]">
        <Hero />
      </div>

      <section id="demo" className="bg-white">
        <ProductDemo videoId={productVideoId} />
      </section>

      <section id="capabilities" className="bg-white">
        <Features />
      </section>

      {/* 3.5. Tariff Refund Estimator Section - SOLID NAVY BACKGROUND */}
      <section id="tools" className="pt-12 pb-24 bg-[#0a1628] relative overflow-hidden border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left: Content - High-fidelity Match to Reference Screenshot */}
            <div className="space-y-12 lg:sticky lg:top-32 -mt-20">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-[#1e3a5f] rounded-full mb-6">
                  <span className="text-cyan-400 text-xs font-medium">Lead Magnet Tool</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  Are you owed a refund on <br />
                  <span className="text-cyan-400">China-origin duties?</span>
                </h2>

                <p className="text-slate-400 text-base leading-relaxed max-w-md font-medium">
                  Millions in Section 301 tariffs are currently being contested and refunded. Many forwarders and shippers
                  overpaid on duties that are now eligible for recovery.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Instant Estimation</h4>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">No HTS codes required for a baseline recovery estimate in seconds.</p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Granular Verification</h4>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">Run simulations against specific commodity codes and entry dates.</p>
                  </div>
                </div>
              </div>

              <div className="pt-20 border-t border-slate-800">
                <div className="inline-flex items-center px-3 py-1 bg-[#1e3a5f] rounded-full mb-6">
                  <span className="text-cyan-400 text-xs font-medium">Deep Forensic Auditing</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Verification & Evidence</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
                  Run high-fidelity simulations that cross-reference your specific HTS codes against established litigation timelines.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    </div>
                    <div>
                      <h5 className="text-white font-bold text-sm">Precision Windowing</h5>
                      <p className="text-slate-500 text-xs leading-relaxed">Automatic verification against exact CIT court entry date eligibility.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" /></svg>
                    </div>
                    <div>
                      <h5 className="text-white font-bold text-sm">Evidence Packaging</h5>
                      <p className="text-slate-500 text-xs leading-relaxed">Generated reports ready for forensic broker audit and 7501 filing.</p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-500 text-[11px] italic max-w-[400px] mt-12 leading-relaxed font-medium">
                  *Our calculations align with the latest Section 301 litigation outcomes in the CIT. Actual recovery requires
                  verified 7501 entry data processed by a licensed broker.
                </p>
              </div>
            </div>

            {/* Right: The Calculator Stack */}
            <div className="space-y-12">
              <TariffCalculator />
              <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-slate-800/50"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-[#0a1628] px-4 text-xs font-bold text-slate-600 uppercase tracking-widest">or run granular simulation</span>
                </div>
              </div>
              <FullModeSimulator />
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white">
        <Pricing />
      </section>

      <Footer />
    </main>
  );
}
