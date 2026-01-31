'use client';

import { useState } from 'react';

export function Waitlist() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');

        // TODO: Connect to your waitlist backend (Convex, Resend, etc.)
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setStatus('success');
        setEmail('');
    };

    return (
        <section id="access" className="py-16 px-6 bg-gray-50">
            <div className="max-w-xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#003057] mb-3">
                    Request Access
                </h2>
                <p className="text-gray-600 text-sm mb-2">
                    Freightcode is onboarding a limited number of forwarding teams.
                </p>
                <p className="text-gray-500 text-sm mb-8">
                    Access is reviewed to ensure operational fit.
                </p>

                {status === 'success' ? (
                    <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
                        <p className="text-[#003057] font-medium text-sm">
                            Request received
                        </p>
                        <p className="text-gray-500 text-sm mt-1">
                            We will be in touch within 2 business days.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Work email"
                            required
                            className="flex-1 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#003057] focus:ring-1 focus:ring-[#003057]"
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="px-6 py-2.5 bg-[#003057] hover:bg-[#00243f] disabled:bg-gray-300 text-white font-medium rounded-lg transition-colors text-sm"
                        >
                            {status === 'loading' ? 'Submitting...' : 'Request Access'}
                        </button>
                    </form>
                )}

                <p className="text-gray-400 text-xs mt-5">
                    By submitting, you agree to receive product updates from Freightcode.
                </p>
            </div>
        </section>
    );
}
