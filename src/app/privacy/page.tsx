import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="pt-24 pb-14 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold text-[#003057] mb-6">Privacy Policy</h1>
          <p className="text-gray-500 text-sm mb-6">Last updated: 13 February 2026</p>

          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            This Privacy Policy explains how Freightcode (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) processes personal data when you use our
            software to interact with HMRC services, including the Customs Declarations Service (CDS).
          </p>

          <h2 className="text-xl font-semibold text-[#003057] mb-3">1. Who We Are</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Freightcode is a software service that enables authorised users to submit customs declarations and related
            information to HMRC.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            For privacy enquiries, contact:
            <br />
            Email:{' '}
            <a href="mailto:info@freightcode.co.uk" className="text-[#003057] underline underline-offset-2">
              info@freightcode.co.uk
            </a>
          </p>

          <h2 className="text-xl font-semibold text-[#003057] mb-3">2. Information We Process</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">When you use our software, we may process:</p>
          <ul className="list-disc pl-5 text-gray-700 text-sm leading-relaxed space-y-1 mb-6">
            <li>Name and contact details (such as email address)</li>
            <li>Company and organisation details</li>
            <li>EORI number</li>
            <li>Customs declaration data submitted by you</li>
            <li>Transaction records and submission results</li>
            <li>Technical information such as IP address, timestamps and system logs</li>
          </ul>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            We only process data necessary to provide our services.
          </p>

          <h2 className="text-xl font-semibold text-[#003057] mb-3">3. How We Use Information</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">We use the information to:</p>
          <ul className="list-disc pl-5 text-gray-700 text-sm leading-relaxed space-y-1 mb-6">
            <li>Authenticate users</li>
            <li>Submit declarations and related data to HMRC on your instruction</li>
            <li>Retrieve responses from HMRC</li>
            <li>Maintain audit logs</li>
            <li>Provide support and troubleshoot issues</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#003057] mb-3">4. Sharing of Information</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">We do not sell personal data.</p>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">We may share information with:</p>
          <ul className="list-disc pl-5 text-gray-700 text-sm leading-relaxed space-y-1 mb-6">
            <li>HMRC, where required to deliver the service</li>
            <li>Hosting and infrastructure providers that support operation of the software</li>
            <li>Legal or regulatory authorities where required by law</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#003057] mb-3">5. Data Retention</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            We retain personal data only for as long as necessary to:
          </p>
          <ul className="list-disc pl-5 text-gray-700 text-sm leading-relaxed space-y-1 mb-6">
            <li>Provide our services</li>
            <li>Maintain required audit records</li>
            <li>Meet legal and compliance obligations</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#003057] mb-3">6. Data Security</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            We implement appropriate technical and organisational measures to protect personal data against unauthorised
            access, loss, or misuse.
          </p>

          <h2 className="text-xl font-semibold text-[#003057] mb-3">7. Your Rights</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            Depending on applicable law, you may have rights to access, correct, or request deletion of your personal data.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            To exercise these rights, contact us at:{' '}
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
