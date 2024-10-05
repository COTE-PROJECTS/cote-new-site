"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import Image from 'next/image';

interface ContentItem {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
}

const contentArray: ContentItem[] = [
    {
        title: "What we believe",
        description: "Equipping the young people with digital Skills is Essential for Africa's prosperity.",
        imageUrl: "/assets/pngs/digital-marketing.png",
        imageAlt: "Digital Marketing Illustration"
    },
    {
        title: "Mission",
        description: "To empower the young africans with transformative power of practical IT skills.",
        imageUrl: "/assets/pngs/kids-coding.png",
        imageAlt: "Kids Coding Class Illustration"
    },
    {
        title: "Vision",
        description: "A digitally empowered young people, equipped with practical IT skills from foundational IT literacy to advanced programming across africa by 2044.",
        imageUrl: "/assets/pngs/developing.png",
        imageAlt: "Advanced Information Technology Illustration"
    }
];

const HeroComponent: React.FC = () => {
    const swiperRef = useRef<SwiperType | null>(null);
    const [gsapLoaded, setGsapLoaded] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            setGsapLoaded(true);
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        if (!gsapLoaded) return;

        const gsap = (window as any).gsap;
        if (!gsap) {
            console.error('GSAP failed to load');
            return;
        }

        const swiper = swiperRef.current;
        if (!swiper) return;

        const animateSlide = (slideEl: HTMLElement) => {
            const title = slideEl.querySelector('h2');
            const description = slideEl.querySelector('p');
            const image = slideEl.querySelector('img');
            const content = slideEl.querySelector('.content-wrapper');

            if (title && description && image && content) {
                // Reset animations
                gsap.set([title, description, image, content], { clearProps: "all" });

                // Animate content wrapper
                gsap.fromTo(content,
                    { opacity: 0, scale: 0.8 },
                    { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
                );

                // Animate title with a bouncing effect
                gsap.fromTo(title,
                    { opacity: 0, y: -50 },
                    { opacity: 1, y: 0, duration: 1, ease: "elastic.out(1, 0.3)" }
                );

                // Animate description with a reveal effect
                gsap.fromTo(description,
                    { opacity: 0, y: 30, clipPath: "inset(0 0 100% 0)" },
                    { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)", duration: 1, delay: 0.3, ease: "power4.out" }
                );

                // Animate image with a zoom and rotate effect
                gsap.fromTo(image,
                    { opacity: 0, scale: 1.2, rotation: -5 },
                    { opacity: 1, scale: 1, rotation: 0, duration: 1.2, delay: 0.2, ease: "power3.out" }
                );

                // Add a subtle hover effect to the image
                gsap.to(image, {
                    scale: 1.05,
                    duration: 2,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut"
                });
            }
        };

        const animateSlideOut = (slideEl: HTMLElement) => {
            const elements = slideEl.querySelectorAll('h2, p, img, .content-wrapper');
            gsap.to(elements, { opacity: 0, y: -20, duration: 0.3, ease: "power2.in" });
        };

        swiper.on('slideChangeTransitionStart', () => {
            const activeSlide = swiper.slides[swiper.activeIndex] as HTMLElement;
            animateSlideOut(activeSlide);
        });

        swiper.on('slideChangeTransitionEnd', () => {
            const activeSlide = swiper.slides[swiper.activeIndex] as HTMLElement;
            animateSlide(activeSlide);
        });

        // Animate the initial slide
        const initialSlide = swiper.slides[0] as HTMLElement;
        animateSlide(initialSlide);

        return () => {
            swiper.off('slideChangeTransitionStart');
            swiper.off('slideChangeTransitionEnd');
        };
    }, [gsapLoaded]);

    return (
        <Swiper
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            spaceBetween={30}
            slidesPerView={1}
            effect='fade'
            fadeEffect={{ crossFade: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            modules={[EffectFade, Pagination, Autoplay]}
            className="h-screen bg-[#f7f1e5]"
        >
            {contentArray.map((content, index) => (
                <SwiperSlide key={index}>
                    <div className="flex flex-col md:flex-row mt-10 items-center justify-center h-full px-4 md:px-20 content-wrapper">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h2 className="text-3xl sm:text-7xl font-bold text-gray-800 mb-4">
                                {content.title}
                            </h2>
                            <p className="text-xl font-light sm:text-3xl pr-2 text-gray-600 mb-6">
                                {content.description}
                            </p>
                        </div>
                        <div className="sm:w-1/2">
                            <Image
                                width={1094}
                                height={1092}
                                src={content.imageUrl}
                                alt={content.imageAlt}
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HeroComponent;