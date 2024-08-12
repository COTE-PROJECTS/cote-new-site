import React from 'react';

const DataProtectionSection: React.FC = () => {
    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-1/2">
                        <div className="image_frame">
                            <img
                                src="https://www.unwantedwitness.org/wp-content/uploads/2024/06/DATA-PROTECTION-TRAINING.webp"
                                alt="DATA-PROTECTION-TRAINING"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 mt-8 md:mt-0">
                        <div className="px-6">
                            <b className="block text-lg text-black">Data Protection</b>
                            <h1 className="text-4xl font-bold mt-4">
                                EMPOWERING YOU WITH CONTROL OVER YOUR{' '}
                                <span className="bg-[#f7941f] text-black px-1">
                                    PRIVACY AND DIGITAL LIFE,
                                </span>
                            </h1>
                            <p className="mt-4 text-lg text-black">
                                We raise awareness about the risks associated with the processing of personal data online and offline. This includes educating individuals about the types of data that are typically collected by companies and how that data can be used.
                            </p>
                            <a
                                href="https://www.unwantedwitness.org/data-protection-and-privacy/"
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
