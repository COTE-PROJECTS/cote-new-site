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
                src="https://www.unwantedwitness.org/wp-content/uploads/2023/03/WhatsApp-Image-2023-02-24-at-09.26.46.jpeg"
                alt="Digital Inclusion" width={1920} height={1080}
                className="absolute inset-0 w-full h-full object-cover opacity-1"
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl px-4 md:px-0">
                <div className="md:w-1/2 bg-white p-12">
                    <strong className="text-lg md:text-xl text-black">
                        Digital Inclusion
                    </strong>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-black mt-4">
                        DIGITAL{' '}
                        <span className="bg-[#f7941f] text-black px-2">
                            INCLUSION
                        </span>{' '}
                        FOR ALL
                    </h1>
                    <p className="text-lg md:text-xl text-black mt-6">
                        Our Digital Inclusion and Innovation Program is focused on promoting digital inclusion in Uganda and beyond, particularly among marginalized communities, and fostering innovation in the digital space. The program aims to bridge the digital divide, increase access to digital technologies, and promote the use of digital platforms for social and economic development.
                    </p>
                    <a
                        href="https://www.unwantedwitness.org/digital-inclusion-and-innovation/"
                        className="mt-8 inline-block bg-[#f7941f] text-white text-lg font-semibold py-3 px-8 rounded hover:bg-opacity-90 transition duration-300"
                    >
                        LEARN MORE
                    </a>
                </div>
            </div>
        </section>
    );
};

export default DigitalInclusionSection;
