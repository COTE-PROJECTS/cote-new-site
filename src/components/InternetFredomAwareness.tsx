import Image from 'next/image';
import React from 'react';

const InternetFreedomAwareness: React.FC = () => {
    return (
        <section
            className="py-16 bg-[#f1f1f2] relative flex flex-col md:flex-row items-center justify-center"
        >
            {/* Background Image */}
            <Image
                src="https://api1.iloveimg.com/v1/download/9swz9ck83skch2929lrl94yx1v2q0zlwqtbArpn2fmb9d46q12m39t4nw50xjcyyffnm5hsl9yAhvc8wbvqmdd1t1A1kr9jp0k4cc5f56gb7vgpj0Azw48gndvqhqtkct9xxjllyq4nzzzyq4mpfl5tkfgbzj45nq2crwnshhbcy2f65zzbq"
                alt="Freedom of Expression" width={1920} height={1080}
                className="absolute inset-0 w-full h-full object-cover opacity-1"
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl px-4 md:px-0">
                <div className="md:w-2/5 hidden md:block">&nbsp;</div>
                <div className="md:w-3/5 bg-white p-12">
                    <strong className="text-lg md:text-xl text-black">
                        Freedom of expression & other Internet Freedoms
                    </strong>
                    <h1 className="text-4xl uppercase md:text-5xl font-extrabold text-black mt-4">
                        Practical Skills Development{' '}
                        {/* <span className="bg-[#f7941f] text-black px-2">
                            ONLINE FREEDOM
                        </span> */}
                    </h1>
                    <p className="text-lg md:text-xl text-black mt-6">
                        We go beyond theory with hands-on training that equips students with in-demand skills. Our curriculum includes building websites, creating mobile apps, and troubleshooting real-world IT problems.
                    </p>
                    <a
                        href="#"
                        className="mt-8 inline-block bg-[#f7941f] text-white text-lg font-semibold py-3 px-8 rounded hover:bg-opacity-90 transition duration-300"
                    >
                        LEARN MORE
                    </a>
                </div>
            </div>
        </section>
    );
};

export default InternetFreedomAwareness;
