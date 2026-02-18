import { BrandLogo } from './BrandLogo';

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                {/* Logo - matches social media branding */}
                <a href="/" className="block pl-6 sm:pl-0">
                    <BrandLogo size="lg" />
                </a>

                {/* Nav links */}
                <nav className="hidden md:flex items-center gap-6">
                    <a href="#capabilities" className="text-sm text-gray-600 hover:text-[#003057] transition-colors">
                        Core Capabilities
                    </a>
                    <a href="#pricing" className="text-sm text-gray-600 hover:text-[#003057] transition-colors">
                        Pricing
                    </a>
                    <a href="/tools" className="text-sm text-gray-600 hover:text-[#003057] transition-colors">
                        Tools
                    </a>
                    <a href="#georisk" className="text-sm text-[#003057] font-medium hover:text-[#003057] transition-colors">
                        GeoRisk Navigator™
                    </a>
                    <a href="#demo" className="text-sm text-gray-600 hover:text-[#003057] transition-colors">
                        Walkthrough
                    </a>
                    <a href="/dashboard-test" className="text-sm font-bold text-cyan-600 hover:text-cyan-700 transition-colors">
                        Test Dashboard
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center justify-center px-4 h-9 rounded-lg bg-[#003057] text-white text-sm font-medium hover:bg-[#00284a] transition-colors"
                    >
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
