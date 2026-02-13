const features = [
    {
        title: 'Direct Booking',
        description: 'Book space directly with Maersk Spot and CMA CGM at fixed, guaranteed rates.',
    },
    {
        title: 'GeoRisk Navigator™',
        description: 'Sub-second route-level risk indicators, sanctions data, and weather alerts.',
    },
    {
        title: 'Smart Compliance',
        description: 'Automate Bills of Lading and commercial invoices with AI-verified data.',
    },
    {
        title: 'Embedded Finance',
        description: 'Access trade finance (BNPL) and instant cargo insurance in one click.',
    },
    {
        title: 'Premium Tracking',
        description: 'High-fidelity vessel tracking with automated milestone alerts via Mapbox.',
    },
    {
        title: 'Hybrid Support',
        description: 'Get white-glove logistics support from our team directly in the dashboard.',
    },
];

export function Features() {
    return (
        <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#003057] mb-3">
                        Core Capabilities
                    </h2>
                    <p className="text-gray-600 text-sm max-w-lg mx-auto">
                        Designed to support forwarding operations across documentation, compliance, and logistics workflows.
                    </p>
                </div>

                {/* Feature grid - white cards matching app */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-base font-semibold text-[#003057] mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
