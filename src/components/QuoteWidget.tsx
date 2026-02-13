
"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";

export default function QuoteWidget() {
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [weight, setWeight] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    // Initialize mutation securely
    // Note: We need to ensure the ConvexProvider is wrapping this in the layout
    const createPublicQuote = useMutation("quotes:createPublicQuote" as any);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const result = await createPublicQuote({
                request: {
                    origin,
                    destination,
                    weight,
                    serviceType: "ocean", // Default for landing page
                    cargoType: "FCL",
                    dimensions: { length: "100", width: "100", height: "100" }, // Defaults
                    value: "5000",
                    incoterms: "FOB",
                    urgency: "standard",
                    additionalServices: [],
                    contactInfo: {
                        name: "Guest User",
                        email: "guest@example.com",
                        phone: "",
                        company: ""
                    }
                }
            });

            // Save Guest Token and Redirect to Results
            if (typeof window !== "undefined") {
                localStorage.setItem("guestToken", result.guestId);
                localStorage.setItem("lastQuoteId", result.quoteId);
            }

            // Redirect to the main app's public quote view (hosted on different port in dev, or same domain in prod)
            // For MVP, we'll redirect to a simplified result page on the marketing site or main app
            // Assuming Main App is localhost:5173
            window.location.href = `http://localhost:5173/quote/${result.quoteId}?guest=${result.guestId}`;

        } catch (error) {
            console.error("Quote failed:", error);
            alert("Could not generate quote. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-md w-full">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Get an Instant Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Origin (City)</label>
                    <input
                        type="text"
                        placeholder="e.g. Shanghai"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Destination (City)</label>
                    <input
                        type="text"
                        placeholder="e.g. Los Angeles"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
                    <input
                        type="number"
                        placeholder="e.g. 500"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center transform hover:scale-[1.02]"
                >
                    {loading ? (
                        <span className="animate-spin mr-2">⟳</span>
                    ) : (
                        <span>See Prices →</span>
                    )}
                </button>
                <p className="text-xs text-gray-500 text-center mt-2">
                    No sign-up required for estimates.
                </p>
            </form>
        </div>
    );
}
