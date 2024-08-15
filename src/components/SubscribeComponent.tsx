"use client"
import React from 'react';

const SubscribeSection: React.FC = () => {
    // function to handle subscription
    const handleSubscription = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <section className='bg-gray-50'>
            <div className='container mx-auto'>
                <div className="flex h-[20rem] flex-col md:flex-row justify-center items-center  p-8">
                    <div className="text-center  md:text-left md:mr-8">
                        <div className="inline-flex items-center shadow-lg bg-white rounded-full px-4 py-2 mb-4">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                            <span className="text-gray-700 font-medium text-sm">SUBSCRIBE</span>
                            <span className="w-2 h-2 bg-orange-500 rounded-full ml-2"></span>
                        </div>

                        <h2 className="text-5xl font-bold">
                            <span className="text-orange-500">Subscribe</span> To Get Latest Update From Us
                        </h2>
                    </div>
                    <form method="POST" onSubmit={handleSubscription} className="flex flex-col md:flex-col items-center md:ml-8 mt-6 md:mt-0">
                        <br />
                        <p className="text-gray-500 mb-2 md:mb-0 md:mr-0">
                            Unlock exclusive insights and stay ahead with our latest updates delivered straight to your inbox. Join our community and be the first to know!
                        </p>
                        <div className="flex items-center py-5">
                            <input
                                type="email"
                                placeholder="Your Email*"
                                className="border border-gray-300 rounded-full w-[27rem] px-4 py-2 mr-2 text-gray-500 outline-none"
                            />
                            <button type='submit' className="bg-orange-500 uppercase text-white rounded-full px-6 py-2">
                                SIGN UP
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SubscribeSection;
