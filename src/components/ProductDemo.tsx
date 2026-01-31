import { VideoEmbed } from './VideoEmbed';

interface ProductDemoProps {
    videoId?: string;
}

export function ProductDemo({ videoId }: ProductDemoProps) {
    return (
        <section id="demo" className="py-16 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#003057] mb-3">
                        Product Walkthrough
                    </h2>
                    <p className="text-gray-600 text-sm max-w-lg mx-auto">
                        See how forwarding teams manage quotes, shipments, and route-level risk from a single system.
                    </p>
                </div>

                {/* Video embed */}
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                    <VideoEmbed
                        videoId={videoId || ''}
                        title="Freightcode Product Walkthrough"
                    />
                </div>

                {/* Caption */}
                <p className="text-center text-gray-500 text-xs mt-4">
                    60-second walkthrough: Quote → Shipment → Route Risk → Alert
                </p>
            </div>
        </section>
    );
}
