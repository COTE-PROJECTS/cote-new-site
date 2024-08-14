import Image from 'next/image';
import React from 'react';

const NewsletterSection: React.FC = () => {
    return (
        <div className="py-16 bg-[#fda334]">
            <div className="relative max-w-7xl mx-auto">
                <div className="absolute inset-x-0 top-0 transform -translate-y-3/4">
                    <div className="w-10 h-10 rounded-full bg-white mx-auto mt-0"></div>
                </div>
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full md:w-2/3 md:pr-8 animate-fadeInLeft">
                        <h1 className="text-4xl font-bold text-black">Why Focus on Skilling Young People with In-Demand Practical IT Skills?</h1>
                        <p className="mt-4 text-lg text-black">
                            Imagine a Uganda where young people, from primary school onwards, grow up equipped with the power of technology. A future where practical IT skills are not just a privilege, but an essential part of education, preparing them to lead in a digital world
                        </p>
                        {/* <a
                            href="https://www.unwantedwitness.org/wp-content/uploads/2024/07/UW-Newsletter-June-Vol.02-June.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-6 px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800"
                        >
                            GET YOUR COPY
                        </a> */}
                    </div>
                    <div className="w-full md:w-1/3 mt-8 md:mt-0 animate-fadeInRight">
                        <div

                            className="block"
                        >
                            <div className="relative border">
                                <Image
                                    src="https://api10.iloveimg.com/v1/download/cA0hryxgkxd6k38bhw4bs3m9kz1v9ypdwds1vxgkcggAwybj4mv0csqf0phl5y581kf41cvg1f08y8p3rtht8fm0zrbm2qd2xA00t3vnyjqs3pzA4hszdb2cnj4t96n2j2q34pAjsy7A2jjzv19ttsg8ypl4zAfcrfvr1b41ghxbbl6wx1pq"
                                    width={800}
                                    height={800}
                                    alt="#"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-25 transition-opacity opacity-0 hover:opacity-100">
                                    <div className="flex justify-center items-center h-full text-white">
                                        <i className="icon-link"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSection;
