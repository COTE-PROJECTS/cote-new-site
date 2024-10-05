"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
SwiperCore.use([Autoplay]);

const partners = [
    {
        name: 'TAPA (Toil And Promote Agriculture)',
        url: 'https://www.tapagric.org/',
        imgSrc: '/assets/pngs/tapa.png',
        imgAlt: 'Omidyar Network Logo',
    },
    {
        name: 'Mooziki',
        url: 'https://www.mooziki.com/',
        imgSrc: '/assets/pngs/p3.png',
        imgAlt: 'DHRLab Logo',
    },
    {
        name: 'HOLI SPOTLESS',
        url: '#',
        imgSrc: '/assets/pngs/p4.jpg',
        imgAlt: 'APC Logo',
    },
    {
        name: 'MARITIME SHIPPING',
        url: 'https://www.maritimeshipping-uganda.com/',
        imgSrc: '/assets/pngs/logo.png',
        imgAlt: 'Martimeshipping',
    },
    {
        name: 'Kemet holdings ltd',
        url: '#',
        imgSrc: '/assets/pngs/p6.jpg',
        imgAlt: 'Kios Logo',
    },
    {
        name: 'JOJO"s Farm',
        url: '#',
        imgSrc: '/assets/pngs/p5.jpg',
        imgAlt: 'US Mission Logo',
    },
    {
        name: 'ENZAMBA',
        url: 'https://www.enzamba.com/',
        imgSrc: '/assets/pngs/enzamba.png',
        imgAlt: 'OISEA Logo',
    },
    {
        name: 'Passionate Hearts',
        url: 'https://passionateheartsministries.org/',
        imgSrc: '/assets/projects/passionate.png',
        imgAlt: 'Passionate Hearts',
    },
    // {
    //     name: 'Internews',
    //     url: '#',
    //     imgSrc: 'https://www.unwantedwitness.org/wp-content/uploads/2018/12/Internews.png',
    //     imgAlt: 'Internews Logo',
    // },
    // {
    //     name: 'CRD',
    //     url: '#',
    //     imgSrc: 'https://www.unwantedwitness.org/wp-content/uploads/2018/12/CRD.png',
    //     imgAlt: 'CRD Logo',
    // },
    // {
    //     name: 'DW Akademie',
    //     url: 'https://www.dw.com',
    //     imgSrc: 'https://www.unwantedwitness.org/wp-content/uploads/2021/06/DW-Akademie-1-133x75.jpeg',
    //     imgAlt: 'DW Akademie Logo',
    // },
    // {
    //     name: 'Privacy International',
    //     url: '#',
    //     imgSrc: 'https://www.unwantedwitness.org/wp-content/uploads/2021/06/PI-Privacy-International-RGB-Solid-150x42.png',
    //     imgAlt: 'Privacy International Logo',
    // },
    // {
    //     name: 'Canada',
    //     url: 'https://www.canadainternational.gc.ca/kenya/contact-uganda_ouganda-contactez.aspx?lang=eng',
    //     imgSrc: 'https://www.unwantedwitness.org/wp-content/uploads/2021/09/T130-Canada-150x46.png',
    //     imgAlt: 'Canada Logo',
    // },
];

const Partners: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-left mb-8">
                    <div className="flex justify-start items-center mb-4">
                        <h1 className="text-3xl text-black font-bold">OUR PARTNERS</h1>
                        <span className="h-1 bg-[#ff4c19] w-20 ml-4"></span>
                    </div>
                </div>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={2}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 7 },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                >
                    {partners.map((partner, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center">
                            <a href={partner.url} target="_blank" rel="noopener noreferrer">
                                <img
                                    className="mx-auto scale-with-grid max-h-20"
                                    src={partner.imgSrc}
                                    alt={partner.imgAlt}
                                    loading="lazy"
                                />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>

    );
};

export default Partners;
