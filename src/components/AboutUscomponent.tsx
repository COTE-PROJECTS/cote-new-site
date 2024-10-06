"use client"
import React from 'react';

const AboutUsComponent: React.FC = () => {
    return (
        <div className="relative py-16 bg-gradient-to-b from-red-100 to-white overflow-hidden">
            {/* Wavy background */}
            <div className="absolute top-0 left-0 right-0 h-40">
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
                    <path fill="#dc2626" fillOpacity="0.1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">About Us</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        What We Do
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Equipping the young people with digital Skills is Essential for Africa's prosperity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Vision Card */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <div className="p-6">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Vision</h3>
                            <p className="text-gray-600">A digitally empowered young people, equipped with practical IT skills from foundational IT literacy to advanced programming across africa by 2044.</p>
                        </div>
                        <div className="bg-red-600 h-2">
                            <div className="h-full bg-red-400 animate-pulse" style={{ width: '70%' }}></div>
                        </div>
                    </div>

                    {/* Mission Card */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <div className="p-6">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h3>
                            <p className="text-gray-600">To empower the young africans with transformative power of practical IT skills.</p>
                        </div>
                        <div className="relative h-2 overflow-hidden">
                            <div className="absolute inset-0 bg-red-600"></div>
                            <div className="absolute inset-0 bg-red-400 animate-mission-wave"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Circular background design */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-100 rounded-full -mb-32 -mr-32 opacity-25"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-200 rounded-full -mb-24 -ml-24 opacity-25"></div>

            <style jsx>{`
        @keyframes mission-wave {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-mission-wave {
          animation: mission-wave 3s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default AboutUsComponent;