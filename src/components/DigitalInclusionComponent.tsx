import Image from 'next/image';
import React from 'react';

const DigitalInclusionSection: React.FC = () => {
    return (
        <section
            className="py-16 relative bg-white flex flex-col md:flex-row items-center justify-center"
            data-parallax="3d"
        >
            {/* Background Image */}
            <Image
                src="/assets/pngs/vision.jpg"
                alt="Digital Inclusion" width={1920} height={1080}
                className="absolute inset-0 w-full h-full object-cover opacity-1"
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl px-4 md:px-0">
                <div className="md:w-1/2 bg-white p-12">
                    <strong className="text-lg md:text-xl text-black">
                        Digital Inclusion
                    </strong>
                    <h1 className="text-4xl uppercase md:text-5xl font-extrabold text-black mt-4">
                        Unleash Your {' '}
                        <span className="bg-[#ff4c19] text-white px-2">
                            Tech Potential
                        </span>{' '}

                    </h1>
                    <p className="text-lg md:text-xl text-black mt-6">
                        Our Hands-On IT Training blends STEM principles with practical skills for young minds. Master coding, software, hardware & more in a fun, engaging environment.
                        Launch your tech future today!
                    </p>
                    <a
                        href="#"
                        className="mt-8 inline-block bg-[#ff4c19] text-white text-lg font-semibold py-3 px-8 rounded hover:bg-opacity-90 transition duration-300"
                    >
                        LEARN MORE
                    </a>
                </div>
            </div>
        </section>
    );
};

export default DigitalInclusionSection;
