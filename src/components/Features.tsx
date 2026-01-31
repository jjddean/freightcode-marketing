const features = [
    {
        title: 'Instant Quotes',
        description: 'Generate and compare carrier pricing across supported modes.',
    },
    {
        title: 'GeoRisk™',
        description: 'View route-level risk indicators across selected trade lanes.',
    },
    {
        title: 'Auto-Docs',
        description: 'Generate bills of lading and commercial invoices from shipment data.',
    },
    {
        title: 'Compliance',
        description: 'Perform KYC checks and document validation within workflow.',
    },
    {
        title: 'Tracking',
        description: 'Monitor vessel and air milestones with live status updates.',
    },
    {
        title: 'API First',
        description: 'Integrate Freightcode with internal systems and partner tools.',
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
