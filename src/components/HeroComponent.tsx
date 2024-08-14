"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const HeroComponent: React.FC = () => {
    return (
        <div className="relative bg-[#f7f3eb] overflow-hidden">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                modules={[Pagination, Autoplay]}
                className="h-screen"
            >
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row items-center justify-center h-full px-4 md:px-20">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                                What we believe
                            </h1>
                            <p className="text-xl text-gray-600 mb-6">
                                Equipping the young people with digital Skills is Essential for Africa's prosperity.
                            </p>
                            {/* <button className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300">
                                Learn More
                            </button> */}
                        </div>
                        <div className="md:w-1/2">
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/digital-marketing-illustration-download-in-svg-png-gif-file-formats--android-logo-ai-targeting-audience-pack-business-illustrations-2840777.png?f=webp" alt="ID Cards" className="rounded-lg" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col md:flex-row-reverse items-center justify-center h-full px-4 md:px-20">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                                Mission
                            </h2>
                            <p className="text-xl text-gray-600 mb-6">
                                To empower the young africans with transformative power of practical IT skills.
                            </p>

                        </div>
                        <div className="md:w-1/2">
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/kids-coding-class-illustration-download-in-svg-png-gif-file-formats--fundamentals-skills-development-knowledge-curriculum-programming-exercises-education-activity-pack-school-illustrations-8106515.png?f=webp" alt="ID Cards" className="rounded-lg" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col md:flex-row items-center justify-center h-full px-4 md:px-20">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                                Vision
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                                A digitally empowered young people, equipped with practical IT skills from foundational IT literacy to advanced programming across africa by 2044.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/developing-advanced-information-technology-12019617-9830810.png?f=webp" alt="" className='rounded-lg' />
                        </div>
                        {/* <div className="space-x-4">
                            <button className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300">
                                Get Involved
                            </button>
                            <button className="bg-purple-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-600 transition duration-300">
                                Read Our Position Paper
                            </button>
                        </div> */}
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HeroComponent;