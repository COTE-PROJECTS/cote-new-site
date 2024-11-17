"use client"
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const InternetFreedomAwareness: React.FC = () => {
    return (
        <section className="py-16 bg-[#f1f1f2] relative overflow-hidden">
            {/* Background Image */}
            <Image
                src="/assets/pngs/young-people-working.jpg"
                alt="Freedom of Expression"
                width={1920}
                priority
                height={1080}
                className="absolute inset-0 w-full h-full object-cover opacity-1"
            />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="flex flex-col lg:flex-row items-center justify-end"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="lg:w-2/5 hidden lg:block">&nbsp;</div>
                    <motion.div
                        className="w-full lg:w-3/5 bg-white p-8 lg:p-12 rounded-lg shadow-lg"
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <motion.strong
                            className="text-lg lg:text-xl text-black block mb-4"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Freedom of expression & other Internet Freedoms
                        </motion.strong>
                        <motion.h1
                            className="text-3xl sm:text-4xl lg:text-5xl uppercase font-extrabold text-black mt-4"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            Practical Skills{' '}
                            <span className="bg-[#ff4c19] text-white px-2">
                                Development
                            </span>
                        </motion.h1>
                        <motion.p
                            className="text-lg lg:text-xl text-black mt-6"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            We go beyond theory with hands-on training that equips students with in-demand skills. Our curriculum includes building websites, creating mobile apps, and troubleshooting real-world IT problems.
                        </motion.p>
                        <motion.a
                            href="#"
                            className="mt-8 inline-block bg-[##ff4c19] text-white text-lg font-semibold py-3 px-8 rounded hover:bg-opacity-90 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            LEARN MORE
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default InternetFreedomAwareness;