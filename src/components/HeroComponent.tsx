"use client"
import React, { useState, useEffect } from 'react';

interface Slide {
    image: string;
    title: string;
    subtitle: string;
    description: string;
}

const slides: Slide[] = [
    {
        image: '/assets/hero/h1.jpg',
        title: 'Software ',
        subtitle: 'Development',
        description: 'Building Scalable Applications'
    },
    {
        image: '/assets/hero/h2.webp',
        title: 'Practical',
        subtitle: 'IT Training Programs',
        description: 'Focuses on equipping young people with the skills and opportunities to thrive in the technology industry'
    },
    {
        image: '/assets/hero/h4.webp',
        title: 'Digital',
        subtitle: 'Marketing',
        description: 'Powering businesses with social media.'
    }
];

const HeroComponent: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen overflow-hidden">
            {/* Carousel */}
            <div className="absolute inset-0">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="object-cover object-center w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                    </div>
                ))}
            </div>
            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full text-white">
                <div className="text-center px-4 sm:px-6 lg:px-8 w-full">
                    <h1 className="text-5xl sm:text-7xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
                        <span className="leading-tight">{slides[currentSlide].title}</span>{' '}
                        <span className="text-[#ff4c19] font-bold leading-tight">
                            {slides[currentSlide].subtitle}
                        </span>
                    </h1>
                    <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-semibold w-full mx-auto leading-relaxed">
                        {slides[currentSlide].description}
                    </p>
                </div>
            </div>
            {/* Navigation */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`rounded-full focus:outline-none transition-all duration-300 ease-in-out ${currentSlide === index
                            ? 'bg-white w-4 h-4'
                            : 'bg-white bg-opacity-50 w-3 h-3'
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default HeroComponent;