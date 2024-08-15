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
                        COTE (Center Of Technology Evolution), A digitally empowered young people, equipped with practical IT skills from foundational literacy to advanced programming across Africa by 2044.
                    </p>
                    <p className="text-gray-400">Follow us on our social media</p>
                    <div className="flex space-x-3 text-white mt-2">
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
                    {/* <div className="mt-4">
                        <a href="https://www.ngosource.org/about-equivalency-determination-on-file-badge?ref=https%3A%2F%2Ftpoug.org%2F">
                            <img src="https://www.ngosource.org/sites/default/files/ngos_ed_on_file_widget.png" alt="NGOsource Equivalency Determination on File" className="w-32" />
                        </a>
                    </div> */}
                </div>

                {/* Quick Links Section */}
                <div>
                    <h4 className="text-lg font-semibold">Quick links</h4>
                    <div className="bg-orange-500 h-1 w-20 my-2"></div>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="#" className="hover:text-orange-500">Privacy policy</a></li>
                        <li><a href="/about" className="hover:text-orange-500">About us</a></li>
                        <li><a href="/contact" className="hover:text-orange-500">Contact us</a></li>
                        <li><a href="#" className="hover:text-orange-500">Insights</a></li>
                        <li><a href="#" className="hover:text-orange-500">Career</a></li>
                    </ul>
                </div>

                {/* What We Do Section */}
                <div>
                    <h4 className="text-lg font-semibold">What we do</h4>
                    <div className="bg-orange-500 h-1 w-20 my-2"></div>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="#" className="hover:text-orange-500">Digital Marketing</a></li>
                        <li><a href="#" className="hover:text-orange-500">Web Development</a></li>
                        <li><a href="#" className="hover:text-orange-500">Mobile Application Development</a></li>
                        <li><a href="#" className="hover:text-orange-500">IT Practical Skill training</a></li>
                    </ul>
                </div>

                {/* Let's Connect Section */}
                <div>
                    <h4 className="text-lg font-semibold">Let’s connect</h4>
                    <div className="bg-orange-500 h-1 w-20 my-2"></div>
                    <p className="text-gray-400"><b>Center Of Technology Evolution (COTE)</b></p>
                    <p className="text-gray-400">
                        Kawaala, Kampala, Uganda.
                    </p>
                    <p className="text-gray-400">
                        <strong>Mob:</strong> +256-773165989<br />
                        <strong>Email:</strong> <a href="mailto:info@coteug.com" className="hover:underline hover:text-orange-500">info@coteug.com</a>
                    </p>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="bg-orange-700 py-4 mt-8">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="text-sm text-gray-100">
                        © {new Date().getFullYear()} Center Of Technology Evolution (COTE), All Rights Reserved.
                    </div>
                    {/* <nav>
                        <ul className="flex space-x-4 text-gray-400">
                            <li><a href="/" className="hover:text-orange-500">HOME</a></li>
                            <li><a href="/about" className="hover:text-orange-500">ABOUT</a></li>
                            <li><a href="" className="hover:text-orange-500">PRIVACY POLICY</a></li>
                            <li><a href="https://www.unwantedwitness.org/resources/" className="hover:text-orange-500">RESOURCES</a></li>
                            <li><a href="https://www.unwantedwitness.org/contact-us-3/" className="hover:text-orange-500">CONTACT US</a></li>
                        </ul>
                    </nav> */}
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
