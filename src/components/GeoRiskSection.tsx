

const capabilities = [
    'Sanctions Exposure',
    'Regional Instability',
    'Weather Disruptions',
    'Port Congestion',
];

export function GeoRiskSection() {
    return (
        <section className="py-12 px-6 bg-gray-50 border-t border-gray-100">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-center">
                    {/* Left: Content */}
                    <div>
                        <div className="inline-flex items-center px-3 py-1 bg-[#1e3a5f] rounded-full mb-4">
                            <span className="text-cyan-400 text-xs font-medium">Business & Enterprise</span>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-semibold text-[#003057] mb-4">
                            GeoRisk Navigator™
                        </h2>

                        <p className="text-gray-600 text-sm mb-3">
                            Route-level geopolitical and compliance risk indicators for freight operations.
                        </p>

                        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                            See how Freightcode evaluates risk along the actual freight
                            route, identifies critical choke points, and provides operational guidance before cargo is in transit.
                        </p>

                        {/* Capability pills - no emojis */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {capabilities.map((cap) => (
                                <span
                                    key={cap}
                                    className="inline-flex items-center px-3 py-1.5 bg-white rounded-lg border border-gray-200 text-xs text-gray-700"
                                >
                                    {cap}
                                </span>
                            ))}
                        </div>

                        <p className="text-gray-400 text-xs">
                            Available on Business and Enterprise plans.
                        </p>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full">
                        <div className="relative w-full overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                            <img
                                src="/georisk-preview.png"
                                alt="GeoRisk Navigator Dashboard"
                                className="block object-cover w-full h-auto max-h-[820px] scale-[1.06] origin-center"
                            />
                        </div>
                        <p className="mt-3 text-sm text-gray-400 text-center">
                            Route-level risk detection and operational guidance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
