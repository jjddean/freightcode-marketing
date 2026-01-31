export function Footer() {
    return (
        <footer className="py-12 px-6 bg-white border-t border-gray-200">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-10">
                    {/* Logo / About */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="mb-3 flex items-baseline text-[#003057]">
                            <span className="text-xl font-semibold tracking-tight">freight</span>
                            <span className="text-xl font-light tracking-tight">code</span>
                            <span className="text-[10px] font-normal ml-0.5 -translate-y-2">®</span>
                        </div>
                        <p className="text-gray-500 text-xs leading-relaxed">
                            Freight operations software for<br />complex trade lanes.
                        </p>
                        <p className="text-gray-400 text-xs mt-3">
                            London, UK
                            <br />
                            info@freightcode.co.uk
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="text-[#003057] font-medium text-xs mb-2">Product</h4>
                        <ul className="space-y-1">
                            <li><a href="#capabilities" className="text-gray-500 hover:text-[#003057] text-xs">Features</a></li>
                            <li><a href="#pricing" className="text-gray-500 hover:text-[#003057] text-xs">Pricing</a></li>
                            <li><a href="#georisk" className="text-gray-500 hover:text-[#003057] text-xs">GeoRisk™</a></li>
                        </ul>


                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-[#003057] font-medium text-xs mb-2">Company</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="text-gray-500 hover:text-[#003057] text-xs">About</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-[#003057] text-xs">Blog</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-[#003057] text-xs">Contact</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-[#003057] font-medium text-xs mb-2">Legal</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="text-gray-500 hover:text-[#003057] text-xs">Privacy</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-[#003057] text-xs">Terms</a></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-[#003057] font-medium text-xs mb-2">Socials</h4>
                        <ul className="space-y-1">
                            <li><a href="https://x.com/freightcode" className="text-gray-500 hover:text-[#003057] text-xs">X</a></li>
                            <li><a href="https://linkedin.com/company/freightcode" className="text-gray-500 hover:text-[#003057] text-xs">LinkedIn</a></li>
                            <li><a href="https://youtube.com/@freightcode" className="text-gray-500 hover:text-[#003057] text-xs">YouTube</a></li>
                            <li><a href="https://substack.com/@jasondean644299?utm_source=user-menu" className="text-gray-500 hover:text-[#003057] text-xs">Newsletter</a></li>
                        </ul>
                    </div>

                    {/* Security & Trust + Infrastructure */}
                    <div>
                        <h4 className="text-[#003057] font-medium text-xs mb-2">Security & Trust</h4>
                        <ul className="text-gray-500 text-xs space-y-1">
                            <li>Secure billing via Stripe</li>
                            <li>Enterprise authentication</li>
                            <li>Encrypted data</li>
                            <li>Activity logging</li>
                            <li>Role-based access</li>
                        </ul>

                        <h4 className="text-[#003057] font-medium text-xs mb-2 mt-4">Trusted Infrastructure</h4>
                        <ul className="text-gray-500 text-xs space-y-1">
                            <li><a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#003057]">Stripe</a></li>
                            <li><a href="https://clerk.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#003057]">Clerk</a></li>
                            <li><a href="https://convex.dev" target="_blank" rel="noopener noreferrer" className="hover:text-[#003057]">Convex</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-xs">
                        © {new Date().getFullYear()} Freightcode. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

