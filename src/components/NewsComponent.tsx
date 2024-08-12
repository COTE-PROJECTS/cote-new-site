import React from 'react';

const NewsletterSection: React.FC = () => {
    return (
        <div className="py-16 bg-[#f7941f]">
            <div className="relative max-w-7xl mx-auto">
                <div className="absolute inset-x-0 top-0 transform -translate-y-1/2">
                    <div className="w-10 h-10 rounded-full bg-white mx-auto"></div>
                </div>
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full md:w-2/3 md:pr-8 animate-fadeInLeft">
                        <h1 className="text-4xl font-bold text-black">The Unwanted Witness Bi-Annual Newsletter</h1>
                        <p className="mt-4 text-lg text-black">
                            It’s halfway through the year already! Can you believe it? From tackling challenges to celebrating victories including the attainment of resolutions for some.
                            The past six months have been filled with electrifying events and advocacy, and we cannot wait to dive into what the rest of the year has in store for us.
                            Thank you for being part of our journey. Unwanted Witness has had a productive first half of 2024. Let us revisit some of the highlights.
                        </p>
                        <a
                            href="https://www.unwantedwitness.org/wp-content/uploads/2024/07/UW-Newsletter-June-Vol.02-June.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-6 px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800"
                        >
                            GET YOUR COPY
                        </a>
                    </div>
                    <div className="w-full md:w-1/3 mt-8 md:mt-0 animate-fadeInRight">
                        <a
                            href="https://www.unwantedwitness.org/wp-content/uploads/2024/07/UW-Newsletter-June-Vol.02-June.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div className="relative border">
                                <img
                                    src="https://www.unwantedwitness.org/wp-content/uploads/2024/07/UW-Newsletter-June-Vol.02-June-pages-1.webp"
                                    alt="UW Newsletter June Vol.02 - June-pages-1"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-25 transition-opacity opacity-0 hover:opacity-100">
                                    <div className="flex justify-center items-center h-full text-white">
                                        <i className="icon-link"></i>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSection;
