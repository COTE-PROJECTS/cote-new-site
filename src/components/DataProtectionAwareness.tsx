import React from 'react';
import Image from 'next/image';
const DataProtectionSection: React.FC = () => {
    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap items-center">
                    <div className="w-full sm:w-1/2">
                        <div className="image_frame">
                            <Image
                                src="https://api1.iloveimg.com/v1/download/9swz9ck83skch2929lrl94yx1v2q0zlwqtbArpn2fmb9d46q12m39t4nw50xjcyyffnm5hsl9yAhvc8wbvqmdd1t1A1kr9jp0k4cc5f56gb7vgpj0Azw48gndvqhqtkct9xxjllyq4nzzzyq4mpfl5tkfgbzj45nq2crwnshhbcy2f65zzbq"
                                alt="DATA-PROTECTION-TRAINING"
                                width={600}
                                height={600}
                                className="max-w-[30rem] h-full"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 mt-8 md:mt-0">
                        <div className="px-6">
                            {/* <b className="block font-extrabold text-lg text-black">Data Protection</b> */}
                            <h1 className="text-4xl text-black uppercase font-bold mt-4">
                                Interactive and Engaging Learning{' '}
                                {/* <span className="bg-[#f7941f] text-black px-1">
                                    PRIVACY AND DIGITAL LIFE,
                                </span> */}
                            </h1>
                            <p className="mt-4 text-lg text-black">
                                We bring IT to life with interactive learning platforms like gamified simulations and collaborative coding environments. This makes learning not just informative, but also fun and engaging.
                            </p>
                            <a
                                href="#"
                                className="inline-block mt-6 px-6 py-3 bg-[#f7941f] text-black font-semibold rounded-md hover:bg-[#e4830d]"
                            >
                                LEARN MORE
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataProtectionSection;
