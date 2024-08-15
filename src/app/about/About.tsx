"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Card from './CardComponent';
import { FaDollarSign, FaTools, FaUserCog } from 'react-icons/fa';

const AboutSection: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
            <motion.div
                className="max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                        <span className="text-orange-500">Introduction</span> To Best Digital Agency!
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">Empowering Uganda's Youth with Digital Skills</p>
                    <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-8">
                        <motion.p className="text-gray-600 text-base sm:text-lg max-w-xl" variants={itemVariants}>
                            Uganda boasts a young and vibrant population, with <span className="font-semibold text-orange-500">78% under 30 years</span>. However, a critical gap exists – a lack of practical IT skills needed to succeed in the digital age. The global pandemic accelerated the shift towards a digital world, and by 2030, millions of jobs in Africa will require these skills.
                        </motion.p>
                        <motion.p className="text-gray-600 text-base sm:text-lg max-w-xl" variants={itemVariants}>
                            In 2020, the surge in remote work exposed a critical challenge: a vast lack of digital skills among young Africans. This gap hinders not just individual employability, but also Africa's immense potential for innovation and economic growth. <span className="font-semibold text-orange-500">COTE Technologies</span> was born from a vision to address this very need, equipping young people with practical IT skills to unlock their potential and propel Africa's future.
                        </motion.p>
                    </div>
                </motion.div>

                <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" variants={containerVariants}>
                    <Card
                        icon={<FaDollarSign size={24} />}
                        title="78%"
                        description="Of Uganda's population are Youth under 30 years"
                        bgColor="bg-orange-500"
                    />
                    <Card
                        icon={<FaTools size={24} />}
                        title="200M"
                        description="Jobs in sub-Saharan Africa will require digital skills by 2030"
                        bgColor="bg-blue-500"
                    />
                    <Card
                        icon={<FaUserCog size={24} />}
                        title="13.3%"
                        description="Unemployed youth in Uganda, according to the Uganda Bureau of Statistics as of 2024"
                        bgColor="bg-green-500"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutSection;