"use client"
import React from 'react';

const FooterSection: React.FC = () => {
    return (
        <footer id="Footer" className="bg-black text-white py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* About Us Section */}
                <div>
                    <h4 className="text-lg font-semibold">About us</h4>
                    <div className="bg-orange-500 h-1 w-20 my-2"></div>
                    <p className="mb-4 text-gray-400">
                        The Unwanted Witness is a civil society organization (CSO) that was established to respond to the gap in effective communication using various online expression platforms.
                    </p>
                    <p className="text-gray-400">Follow us on our social media</p>
                    <div className="flex space-x-3 mt-2">
                        <a href="https://www.facebook.com/UnwantedWitnessUg" className="hover:text-orange-500">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/UnwantedWitness" className="hover:text-orange-500">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/unwanted-witness/" className="hover:text-orange-500">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.instagram.com/unwantedwitnessug/" className="hover:text-orange-500">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UCiMoZz2XeyCwVRFaRBTI8dw" className="hover:text-orange-500">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                    <div className="mt-4">
                        <a href="https://www.ngosource.org/about-equivalency-determination-on-file-badge?ref=https%3A%2F%2Ftpoug.org%2F">
                            <img src="https://www.ngosource.org/sites/default/files/ngos_ed_on_file_widget.png" alt="NGOsource Equivalency Determination on File" className="w-32" />
                        </a>
                    </div>
                </div>

                {/* Quick Links Section */}
                <div>
                    <h4 className="text-lg font-semibold">Quick links</h4>
                    <div className="bg-orange-500 h-1 w-20 my-2"></div>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="https://www.unwantedwitness.org/privacy-policy/" className="hover:text-orange-500">Privacy policy</a></li>
                        <li><a href="https://www.unwantedwitness.org/about/" className="hover:text-orange-500">About us</a></li>
                        <li><a href="https://www.unwantedwitness.org/contact-us-3/" className="hover:text-orange-500">Contact us</a></li>
                        <li><a href="https://www.unwantedwitness.org/category/blog/" className="hover:text-orange-500">Insights</a></li>
                        <li><a href="https://www.unwantedwitness.org/career" className="hover:text-orange-500">Career</a></li>
                    </ul>
                </div>

                {/* What We Do Section */}
                <div>
                    <h4 className="text-lg font-semibold">What we do</h4>
                    <div className="bg-orange-500 h-1 w-20 my-2"></div>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="https://www.unwantedwitness.org/data-protection-and-privacy/" className="hover:text-orange-500">Data protection and privacy</a></li>
                        <li><a href="https://www.unwantedwitness.org/digital-identity/" className="hover:text-orange-500">Digital Identity</a></li>
                        <li><a href="https://www.unwantedwitness.org/freedom-of-expression/" className="hover:text-orange-500">Freedom of expression</a></li>
                        <li><a href="https://www.unwantedwitness.org/research-2/" className="hover:text-orange-500">Research</a></li>
                    </ul>
                </div>

                {/* Let's Connect Section */}
                <div>
                    <h4 className="text-lg font-semibold">Let’s connect</h4>
                    <div className="bg-orange-500 h-1 w-20 my-2"></div>
                    <p className="text-gray-400"><b>The Unwanted Witness</b></p>
                    <p className="text-gray-400">
                        Plot No.26, Sentema Road, P.O Box 71314, Clock Tower, Kampala, Uganda.
                    </p>
                    <p className="text-gray-400">
                        <strong>Mob:</strong> +256-414 697635<br />
                        <strong>Email:</strong> <a href="mailto:info@unwantedwitness.org" className="hover:underline hover:text-orange-500">info@unwantedwitness.org</a>
                    </p>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="bg-gray-900 py-4 mt-8">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="text-sm text-gray-500">
                        © 2024 Unwanted Witness. All Rights Reserved.
                    </div>
                    <nav>
                        <ul className="flex space-x-4 text-gray-400">
                            <li><a href="https://www.unwantedwitness.org/" className="hover:text-orange-500">HOME</a></li>
                            <li><a href="https://www.unwantedwitness.org/about/" className="hover:text-orange-500">ABOUT</a></li>
                            <li><a href="https://www.unwantedwitness.org/privacy-policy/" className="hover:text-orange-500">PRIVACY POLICY</a></li>
                            <li><a href="https://www.unwantedwitness.org/resources/" className="hover:text-orange-500">RESOURCES</a></li>
                            <li><a href="https://www.unwantedwitness.org/contact-us-3/" className="hover:text-orange-500">CONTACT US</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
