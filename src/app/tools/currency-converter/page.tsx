import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CurrencyConverter } from '@/components/tools/CurrencyConverter';

export const metadata = {
    title: 'Free Currency Converter | Freightcode Tools',
    description: 'Convert major currencies instantly with our free tool. Real-time exchange rates for USD, EUR, GBP, CNY, and more.',
};

export default function CurrencyPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="pt-32 pb-16 bg-[#0a1628] border-b border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <div className="inline-flex items-center px-3 py-1 bg-[#1e3a5f] rounded-full mb-6">
                        <span className="text-cyan-400 text-xs font-medium">Free Tool</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        Currency <span className="text-cyan-400">Converter</span>
                    </h1>
                    <p className="text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        Convert shipping costs and invoice values across major currencies.
                        Rates updated daily.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 bg-slate-50">
                <div className="max-w-lg mx-auto">
                    <CurrencyConverter />
                </div>
            </section>

            <Footer />
        </main>
    );
}
