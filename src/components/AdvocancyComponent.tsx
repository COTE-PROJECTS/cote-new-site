import React from 'react';

const AdvocacyResearchSection: React.FC = () => {
    return (
        <section
            className="py-16 bg-white flex flex-col md:flex-row items-center justify-center"
        >
            <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                <div className="max-w-full">
                    <img
                        src="https://www.unwantedwitness.org/wp-content/uploads/2023/03/ReportLaunchPSA.jpg"
                        alt="ReportLaunchPSA"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left px-4">
                <strong className="text-lg md:text-xl text-black">Advocacy and Research</strong>
                <h1 className="text-4xl md:text-5xl font-extrabold text-black mt-4">
                    RESEARCHING FOR{' '}
                    <span className="bg-[#f7941f] text-black px-2">
                        CHANGE
                    </span>{' '}
                    , ADVOCATING FOR{' '}
                    <span className="bg-[#f7941f] text-black px-2">
                        IMPACT
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-black mt-6">
                    We carry out research activities to identify challenges that individuals and communities face regarding digital rights and freedoms in Uganda and beyond. We conduct evidence-based research, which provides a basis for the formulation of policy recommendations that guide our advocacy activities. Through research, we identify the gaps in digital rights and freedoms policies and highlight issues that require urgent attention from policymakers, regulators, and other stakeholders.
                </p>
                <a
                    href="https://www.unwantedwitness.org/resources/"
                    className="mt-8 inline-block bg-[#f7941f] text-white text-lg font-semibold py-3 px-8 rounded hover:bg-opacity-90 transition duration-300"
                >
                    LEARN MORE
                </a>
            </div>
        </section>
    );
};

export default AdvocacyResearchSection;
