
export function GeoRiskDemoVideo() {
    return (
        <div className="w-full">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border bg-black shadow-sm">
                <iframe
                    src="https://www.loom.com/embed/bb76ba1785fe430ebc62cd32747e3787?hide_owner=true&hide_share=true&hide_title=true"
                    className="absolute inset-0 h-full w-full"
                    frameBorder="0"
                    allow="fullscreen; picture-in-picture"
                    allowFullScreen
                    title="GeoRisk Navigator Demo"
                />
            </div>

            <p className="mt-3 text-sm text-muted-foreground text-center">
                2-minute walkthrough of route-level risk detection and operational guidance.
            </p>
        </div>
    );
}
