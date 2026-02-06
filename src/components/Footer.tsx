export function Footer() {
    return (
        <footer className="py-12 px-6 bg-white border-t border-gray-200">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-7 gap-6 mb-10">
                    {/* Logo / About */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="mb-3 flex items-baseline text-[#003057]">
                            <span className="text-2xl font-semibold tracking-tight">freight</span>
                            <span className="text-2xl font-light tracking-tight">code</span>
                            <span className="text-[12px] font-normal ml-0.5 -translate-y-2.5">®</span>
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
                        <h4 className="text-[#003057] font-medium text-xs mb-4">Product</h4>
                        <ul className="text-gray-500 text-xs space-y-2">
                            <li><a href="#capabilities" className="hover:text-[#003057]">Features</a></li>
                            <li><a href="#pricing" className="hover:text-[#003057]">Pricing</a></li>
                            <li><a href="#georisk" className="hover:text-[#003057]">GeoRisk™</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-[#003057] font-medium text-xs mb-4">Company</h4>
                        <ul className="text-gray-500 text-xs space-y-2">
                            <li><a href="#" className="hover:text-[#003057]">About</a></li>
                            <li><a href="#" className="hover:text-[#003057]">Blog</a></li>
                            <li><a href="#" className="hover:text-[#003057]">Contact</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-[#003057] font-medium text-xs mb-4">Legal</h4>
                        <ul className="text-gray-500 text-xs space-y-2">
                            <li><a href="#" className="hover:text-[#003057]">Privacy</a></li>
                            <li><a href="#" className="hover:text-[#003057]">Terms</a></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-[#003057] font-medium text-xs mb-4">Socials</h4>
                        <ul className="text-gray-500 text-xs space-y-2">
                            <li><a href="https://x.com/freightcode" className="hover:text-[#003057]">X</a></li>
                            <li><a href="https://linkedin.com/company/freightcode" className="hover:text-[#003057]">LinkedIn</a></li>
                            <li><a href="https://youtube.com/@freightcode" className="hover:text-[#003057]">YouTube</a></li>
                            <li><a href="https://substack.com/@jasondean644299?utm_source=user-menu" className="hover:text-[#003057]">Newsletter</a></li>
                        </ul>
                    </div>

                    {/* Security & Trust */}
                    <div>
                        <h4 className="text-[#003057] font-medium text-xs mb-4">Security & Trust</h4>
                        <ul className="text-gray-500 text-xs space-y-2">
                            <li>Secure billing via Stripe</li>
                            <li>Enterprise authentication</li>
                            <li>Encrypted data</li>
                            <li>Activity logging</li>
                            <li>Role-based access</li>
                        </ul>
                    </div>

                    {/* Trusted Infrastructure */}
                    <div>
                        <h4 className="text-[#003057] font-medium text-xs mb-4">Trusted Infrastructure</h4>
                        <ul className="text-gray-500 text-xs space-y-2">
                            <li className="flex items-center gap-2 group">
                                <a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#003057]">Stripe</a>
                                <img src="https://cdn.brandfetch.io/stripe.com?c=1idbnvbXCRylLLzZ6DP&type=symbol" alt="Stripe" className="w-3 h-3 object-contain opacity-40 group-hover:opacity-100 transition-opacity" />
                            </li>
                            <li className="flex items-center gap-2 group">
                                <a href="https://clerk.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#003057]">Clerk</a>
                                <img src="https://cdn.brandfetch.io/clerk.com?c=1idbnvbXCRylLLzZ6DP&type=symbol" alt="Clerk" className="w-3 h-3 object-contain opacity-40 group-hover:opacity-100 transition-opacity" />
                            </li>
                            <li className="flex items-center gap-2 group">
                                <a href="https://convex.dev" target="_blank" rel="noopener noreferrer" className="hover:text-[#003057]">Convex</a>
                                <img src="https://cdn.brandfetch.io/convex.dev?c=1idbnvbXCRylLLzZ6DP&type=symbol" alt="Convex" className="w-3 h-3 object-contain opacity-40 group-hover:opacity-100 transition-opacity" />
                            </li>
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
