import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HSCodeLookup } from '@/components/tools/HSCodeLookup';

export const metadata = {
    title: 'HS Code Lookup | Freightcode Tools',
    description: 'Search the Harmonized System (HS) database to find correct commodity codes for international shipping and customs declarations.',
};

export default function HSCodePage() {
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
                        HS Code <span className="text-cyan-400">Lookup</span>
                    </h1>
                    <p className="text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        Find the correct Harmonized System codes for your products.
                        Required for customs declarations and duty calculations.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 bg-slate-50">
                <div className="max-w-2xl mx-auto">
                    <HSCodeLookup />
                </div>
            </section>

            <Footer />
        </main>
    );
}
