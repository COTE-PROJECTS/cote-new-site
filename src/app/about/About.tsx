import React from 'react';
import Card from './CardComponent';
import { FaDollarSign, FaTools, FaUserCog } from 'react-icons/fa';

const AboutSection: React.FC = () => {
    return (
        <section className="py-16 my-36 px-8">
            <div className="max-w-7xl mx-auto">
                {/* ABOUT US Label */}
                {/* <div className="flex justify-center mb-6">
                    <div className="bg-gray-100 px-6 py-3 rounded-full shadow-lg">
                        <span className="text-gray-500 font-semibold text-sm">ABOUT US</span>
                    </div>
                </div> */}

                {/* Title and Content */}
                <div className="text-center mb-16">
                    <h3 className="text-4xl font-extrabold text-gray-800">
                        <span className="text-red-500">Introduction</span> To Best Digital Agency!
                    </h3>
                    <div className="flex flex-col md:flex-row justify-center items-center mt-6">
                        <p className="text-gray-500 text-base md:max-w-sm md:mr-8">
                            Uganda boasts a young and vibrant population, with 78% under 30 years. However, a critical gap exists – a lack of practical IT skills needed to succeed in the digital age. The global pandemic accelerated the shift towards a digital world, and by 2030, millions of jobs in Africa will require these skills.
                        </p>
                        <p className="text-gray-500 text-base md:max-w-sm">
                            In 2020, the surge in remote work due to the global pandemic exposed a critical challenge: a vast lack of digital skills among young Africans. This gap hinders not just individual employability, but also Africa's immense potential for innovation and economic growth.

                            This is where COTE Technologies (Center Of Technology Evolution) steps in. We were born from a vision to address this very need. We believe that equipping young people with practical IT skills is the key to unlocking their potential and propelling Africa's future.
                        </p>
                    </div>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <Card
                        icon={<FaDollarSign size={24} />}
                        title="78%"
                        description="Of Uganda's population are Youth under 30 years"
                        bgColor="bg-red-500"
                    />

                    {/* Card 2 */}
                    <Card
                        icon={<FaTools size={24} />}
                        title="200M"
                        description="Jobs in sub-Saharan Africa will require digital skills by 2030"
                        bgColor="bg-black"
                    />

                    {/* Card 3 */}
                    <Card
                        icon={<FaUserCog size={24} />}
                        title="13.3%"
                        description="Unemployed youth in Uganda, according to the Uganda Bureau of Statistics as of 2024."
                        bgColor="bg-red-500"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
