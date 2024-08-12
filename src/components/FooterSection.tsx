"use client"
import React from 'react';
const FooterSection: React.FC = () => {
    return (
        <footer id="Footer" className="clearfix">
            <div className="py-16">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Us Section */}
                    <div>
                        <h4 className="text-lg font-semibold">About us</h4>
                        <div className="bg-orange-500 h-1 w-20 my-2"></div>
                        <p className="mb-4">
                            The Unwanted Witness is a civil society organization (CSO) that was established to respond to the gap in effective communication using various online expression platforms.
                        </p>
                        <p>Follow us on our social media</p>
                        <div className="flex space-x-3 mt-2">
                            <a href="https://www.facebook.com/UnwantedWitnessUg" className="icon_bar icon_bar_facebook">
                                <i className="icon-facebook"></i>
                            </a>
                            <a href="https://twitter.com/UnwantedWitness" className="icon_bar icon_bar_twitter">
                                <i className="icon-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/unwanted-witness/" className="icon_bar icon_bar_linkedin">
                                <i className="icon-linkedin"></i>
                            </a>
                            <a href="https://www.instagram.com/unwantedwitnessug/" className="icon_bar icon_bar_instagram">
                                <i className="icon-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCiMoZz2XeyCwVRFaRBTI8dw" className="icon_bar icon_bar_youtube">
                                <i className="icon-youtube"></i>
                            </a>
                        </div>
                        <div className="mt-4">
                            <a href="https://www.ngosource.org/about-equivalency-determination-on-file-badge?ref=https%3A%2F%2Ftpoug.org%2F">
                                <img src="https://www.ngosource.org/sites/default/files/ngos_ed_on_file_widget.png" alt="NGOsource Equivalency Determination on File" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h4 className="text-lg font-semibold">Quick links</h4>
                        <div className="bg-orange-500 h-1 w-20 my-2"></div>
                        <ul className="space-y-4">
                            <li><a href="https://www.unwantedwitness.org/privacy-policy/" className="hover:underline">Privacy policy</a></li>
                            <li><a href="https://www.unwantedwitness.org/about/" className="hover:underline">About us</a></li>
                            <li><a href="https://www.unwantedwitness.org/contact-us-3/" className="hover:underline">Contact us</a></li>
                            <li><a href="https://www.unwantedwitness.org/category/blog/" className="hover:underline">Insights</a></li>
                            <li><a href="https://www.unwantedwitness.org/career" className="hover:underline">Career</a></li>
                        </ul>
                    </div>

                    {/* What We Do Section */}
                    <div>
                        <h4 className="text-lg font-semibold">What we do</h4>
                        <div className="bg-orange-500 h-1 w-20 my-2"></div>
                        <ul className="space-y-4">
                            <li><a href="https://www.unwantedwitness.org/data-protection-and-privacy/" className="hover:underline">Data protection and privacy</a></li>
                            <li><a href="https://www.unwantedwitness.org/digital-identity/" className="hover:underline">Digital Identity</a></li>
                            <li><a href="https://www.unwantedwitness.org/freedom-of-expression/" className="hover:underline">Freedom of expression</a></li>
                            <li><a href="https://www.unwantedwitness.org/research-2/" className="hover:underline">Research</a></li>
                        </ul>
                    </div>

                    {/* Let's Connect Section */}
                    <div>
                        <h4 className="text-lg font-semibold">Let’s connect</h4>
                        <div className="bg-orange-500 h-1 w-20 my-2"></div>
                        <p><b>The Unwanted Witness</b></p>
                        <p>Plot No.26, Sentema Road, P.O Box 71314, Clock Tower, Kampala, Uganda.</p>
                        <p>
                            <strong>Mob:</strong> +256-414 697635<br />
                            <strong>Email:</strong> <a href="mailto:info@unwantedwitness.org" className="underline">info@unwantedwitness.org</a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="bg-gray-200 py-4">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="text-sm text-gray-600">
                        © 2024 Unwanted Witness. All Rights Reserved.
                    </div>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="https://www.unwantedwitness.org/" className="hover:underline">HOME</a></li>
                            <li><a href="https://www.unwantedwitness.org/about/" className="hover:underline">ABOUT</a></li>
                            <li><a href="https://www.unwantedwitness.org/privacy-policy/" className="hover:underline">PRIVACY POLICY</a></li>
                            <li><a href="https://www.unwantedwitness.org/resources/" className="hover:underline">RESOURCES</a></li>
                            <li><a href="https://www.unwantedwitness.org/contact-us-3/" className="hover:underline">CONTACT US</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
