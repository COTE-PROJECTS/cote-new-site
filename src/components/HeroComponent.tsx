"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const HeroComponent = () => {
    return (
        <div className="relative bg-orange-50 overflow-hidden">
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
                                Championing Inclusive ID Infrastructure
                            </h1>
                            <p className="text-xl text-gray-600 mb-6">
                                Ensuring a trustworthy and accountable approach for Uganda's future
                            </p>
                            <button className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300">
                                Learn More
                            </button>
                        </div>
                        <div className="md:w-1/2">
                            <img src="/api/placeholder/600/400" alt="ID Cards" className="rounded-lg shadow-xl" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col md:flex-row-reverse items-center justify-center h-full px-4 md:px-20">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                                Transition to New Generation ID
                            </h2>
                            <p className="text-xl text-gray-600 mb-6">
                                Guiding Uganda towards a secure and efficient identification system
                            </p>
                            <button className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
                                Explore Features
                            </button>
                        </div>
                        <div className="md:w-1/2">
                            <img src="/api/placeholder/600/400" alt="Digital ID Concept" className="rounded-lg shadow-xl" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col items-center justify-center h-full px-4 md:px-20 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                            Join Us in Shaping Uganda's Digital Future
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                            Together, we can build a more inclusive and accountable ID system for all Ugandans
                        </p>
                        <div className="space-x-4">
                            <button className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300">
                                Get Involved
                            </button>
                            <button className="bg-purple-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-600 transition duration-300">
                                Read Our Position Paper
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HeroComponent;