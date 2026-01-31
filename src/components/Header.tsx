export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                {/* Logo - matches social media branding */}
                <a href="/" className="flex items-baseline text-[#003057]">
                    <span className="text-xl font-semibold tracking-tight">freight</span>
                    <span className="text-xl font-light tracking-tight">code</span>
                    <span className="text-[10px] font-normal ml-0.5 -translate-y-2">®</span>
                </a>

                {/* Nav links */}
                <nav className="hidden md:flex items-center gap-6">
                    <a href="#capabilities" className="text-sm text-gray-600 hover:text-[#003057] transition-colors">
                        Core Capabilities
                    </a>
                    <a href="#pricing" className="text-sm text-gray-600 hover:text-[#003057] transition-colors">
                        Pricing
                    </a>
                    <a href="#georisk" className="text-sm text-[#003057] font-medium hover:text-[#003057] transition-colors">
                        GeoRisk Navigator™
                    </a>
                    <a href="#demo" className="text-sm text-gray-600 hover:text-[#003057] transition-colors">
                        Walkthrough
                    </a>
                    <a href="#access" className="text-sm px-4 py-1.5 bg-[#003057] hover:bg-[#00243f] text-white font-medium rounded-lg transition-colors">
                        Request Access
                    </a>
                </nav>

                {/* Mobile menu button */}
                <button className="md:hidden text-[#003057]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
}
