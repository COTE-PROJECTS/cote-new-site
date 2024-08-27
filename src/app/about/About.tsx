"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Card from './CardComponent';
import { FaDollarSign, FaTools, FaUserCog } from 'react-icons/fa';
import Image from 'next/image';

const AboutSection = () => {
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
        <section className="relative">
            <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
                <Image
                    src="/assets/pngs/young-people-working.jpg"
                    alt="Young People Working"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        className="text-center text-white px-4"
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
                            <span className="text-orange-500">Empowering</span> Uganda's Youth
                        </h2>
                        <p className="text-xl sm:text-2xl mb-8">Bridging the Digital Skills Gap</p>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16" variants={containerVariants}>
                    <motion.div className="space-y-6" variants={itemVariants}>
                        <h3 className="text-2xl font-bold text-gray-800">The Challenge</h3>
                        <p className="text-lg text-gray-600">
                            Uganda boasts a young and vibrant population, with <span className="font-semibold text-orange-500">78% under 30 years</span>. However, a critical gap exists – a lack of practical IT skills needed to succeed in the digital age.
                        </p>
                        <p className="text-lg text-gray-600">
                            The global pandemic accelerated the shift towards a digital world, and by 2030, millions of jobs in Africa will require these skills.
                        </p>
                    </motion.div>
                    <motion.div className="space-y-6" variants={itemVariants}>
                        <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                        <p className="text-lg text-gray-600">
                            In 2020, the surge in remote work exposed a critical challenge: a vast lack of digital skills among young Africans. This gap hinders not just individual employability, but also Africa's immense potential for innovation and economic growth.
                        </p>
                        <p className="text-lg text-gray-600">
                            <span className="font-semibold text-orange-500">COTE Technologies</span> was born from a vision to address this very need, equipping young people with practical IT skills to unlock their potential and propel Africa's future.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
                    <Card
                        icon={<FaDollarSign size={32} />}
                        title="78%"
                        description="Of Uganda's population are Youth under 30 years"
                        bgColor="bg-orange-500"
                    />
                    <Card
                        icon={<FaTools size={32} />}
                        title="200M"
                        description="Jobs in sub-Saharan Africa will require digital skills by 2030"
                        bgColor="bg-blue-500"
                    />
                    <Card
                        icon={<FaUserCog size={32} />}
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