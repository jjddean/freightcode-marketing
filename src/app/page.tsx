import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductDemo } from '@/components/ProductDemo';
import { Features } from '@/components/Features';
import { GeoRiskSection } from '@/components/GeoRiskSection';
import { Pricing } from '@/components/Pricing';
import { Waitlist } from '@/components/Waitlist';
import { Footer } from '@/components/Footer';

export default function Home() {
  // TODO: Replace with your YouTube video IDs after recording
  const productVideoId = ''; // e.g., 'dQw4w9WgXcQ'


  return (
    <main className="min-h-screen bg-slate-950 scroll-smooth">
      {/* Header/Nav */}
      <Header />

      {/* 1. Hero - with padding for fixed header */}
      <div className="pt-14">
        <Hero />
      </div>

      {/* 2. Product Demo / Walkthrough */}
      <section id="demo">
        <ProductDemo videoId={productVideoId} />
      </section>

      {/* 3. Features Grid / Core Capabilities */}
      <section id="capabilities">
        <Features />
      </section>

      {/* 4. Pricing */}
      <section id="pricing">
        <Pricing />
      </section>

      {/* 5. GeoRisk Navigator (with deep-dive video) */}
      <section id="georisk">
        <GeoRiskSection />
      </section>

      {/* 6. Waitlist / Request Access */}
      <section id="access">
        <Waitlist />
      </section>

      {/* 7. Footer */}
      <Footer />
    </main>
  );
}
