const plans = [
    {
        name: 'Free',
        price: '$0',
        period: '/mo',
        description: 'Evaluation only',
        features: ['5 Shipments/month', 'Instant Quotes', 'Document Generation', 'Email Support'],
        cta: 'Request Access',
        highlighted: false,
    },
    {
        name: 'Business',
        price: 'From $49',
        period: '/mo',
        description: 'For active operations',
        features: [
            'Unlimited Shipments',
            'GeoRisk Navigator™',
            'Priority Support',
            'Team Collaboration',
            'Custom Branding',
        ],
        cta: 'Request Access',
        highlighted: true,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'For large organizations',
        features: [
            'Everything in Business',
            'Dedicated API Access',
            'SLA Guarantee',
            'Account Manager',
            'Custom Integrations',
        ],
        cta: 'Contact Sales',
        highlighted: false,
    },
];

export function Pricing() {
    return (
        <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-5xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-semibold text-[#003057] mb-2">
                        Pricing
                    </h2>
                    <p className="text-gray-600 text-sm">
                        Plans designed for evaluation, active operations, and large organizations.
                    </p>
                </div>

                {/* Pricing cards - flex layout to align buttons at bottom */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`bg-white rounded-xl border shadow-sm p-5 flex flex-col ${plan.highlighted
                                    ? 'border-[#003057] ring-1 ring-[#003057]'
                                    : 'border-gray-200'
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="inline-flex items-center px-2 py-0.5 bg-[#003057] text-white text-xs font-medium rounded mb-3 w-fit">
                                    Recommended
                                </div>
                            )}

                            <h3 className="text-lg font-semibold text-[#003057] mb-0.5">
                                {plan.name}
                            </h3>
                            <p className="text-gray-500 text-xs mb-3">
                                {plan.description}
                            </p>

                            <div className="mb-4">
                                <span className="text-2xl font-semibold text-[#003057]">
                                    {plan.price}
                                </span>
                                <span className="text-gray-500 text-sm">
                                    {plan.period}
                                </span>
                            </div>

                            <ul className="space-y-1.5 mb-5 flex-grow">
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-center gap-2 text-xs text-gray-600"
                                    >
                                        <span className="text-[#003057]">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Button always at bottom */}
                            <a
                                href="#access"
                                className={`block w-full py-2 text-center rounded-lg font-medium text-sm transition-colors mt-auto ${plan.highlighted
                                        ? 'bg-[#003057] hover:bg-[#00243f] text-white'
                                        : 'bg-gray-100 hover:bg-gray-200 text-[#003057]'
                                    }`}
                            >
                                {plan.cta}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Trust line */}
                <p className="text-center text-gray-400 text-xs mt-6">
                    Used by forwarding teams operating across regulated trade lanes.
                </p>
            </div>
        </section>
    );
}
