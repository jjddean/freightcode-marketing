import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="pt-24 pb-14 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold text-[#003057] mb-6">Terms of Service</h1>
          <p className="text-gray-500 text-sm mb-6">Last updated: 13 February 2026</p>

          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            These Terms of Service govern your access to and use of Freightcode software and related services.
            By using the service, you agree to these terms.
          </p>

          <h2 className="text-xl font-semibold text-[#003057] mb-3">1. Use of the Service</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            You may use the service only for lawful business purposes and in accordance with applicable customs,
            trade, and data protection laws.
          </p>

          <h2 className="text-xl font-semibold text-[#003057] mb-3">2. Account Responsibilities</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            You are responsible for maintaining the confidentiality of your account credentials and for all activity
            conducted through your account.
          </p>

          <h2 className="text-xl font-semibold text-[#003057] mb-3">3. Data and Submissions</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            You are responsible for the accuracy and legality of all information submitted through the platform,
            including declaration and shipment data.
          </p>

          <h2 className="text-xl font-semibold text-[#003057] mb-3">4. Availability and Changes</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            We may update, improve, or modify the service from time to time. We aim for high availability but do not
            guarantee uninterrupted operation.
          </p>

          <h2 className="text-xl font-semibold text-[#003057] mb-3">5. Limitation of Liability</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            To the extent permitted by law, Freightcode is not liable for indirect, consequential, or incidental losses
            arising from use of the service.
          </p>

          <h2 className="text-xl font-semibold text-[#003057] mb-3">6. Termination</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            We may suspend or terminate access where these terms are breached, where required by law, or for security
            reasons.
          </p>

          <h2 className="text-xl font-semibold text-[#003057] mb-3">7. Contact</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            For terms questions, contact:{' '}
            <a href="mailto:info@freightcode.co.uk" className="text-[#003057] underline underline-offset-2">
              info@freightcode.co.uk
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
