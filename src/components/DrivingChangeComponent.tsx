"use client"
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const DrivingChangeComponent: React.FC = () => {
    return (
        <section className="py-16 bg-[#f1f1f2] overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    className="flex flex-col lg:flex-row items-center justify-between"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="w-full lg:w-1/2 mb-8 lg:mb-0"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <motion.h1
                            className="text-4xl sm:text-5xl uppercase font-extrabold text-black mt-4"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Mentorship {' '}
                            <span className="bg-[#ff4c19] text-white px-2">and Support</span>
                        </motion.h1>
                        <motion.p
                            className="text-lg sm:text-xl text-black mt-6"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            The journey of learning can be challenging. That's why we provide dedicated mentors who offer guidance and support throughout the program. Students can also access online communities and forums to connect with peers and industry professionals.
                        </motion.p>

                        <motion.a
                            href="#"
                            className="mt-8 inline-block bg-[#ff4c19] text-white text-lg font-semibold py-3 px-8 rounded hover:bg-opacity-90 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            LEARN MORE
                        </motion.a>
                    </motion.div>
                    <motion.div
                        className="w-full lg:w-1/2 flex justify-center items-center"
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                width={600}
                                height={600}
                                src="https://api2.iloveimg.com/v1/download/55y7mqzn2g5p30lkxkkfmkw0shrvxcczlpy4862yn5zpd0g6h12x6nsyk0hh2tw7q6l0jhkr8mnt0894lr1y9bkz5xdl9qgtsm7hcsyn1jnyk09pbycxgyqr8418l42spAmsvz695h15vdA03nx8pmgb0A0fmlmrh86rlyzdAtksrxjqh68q"
                                alt="Mentorship and Support"
                                className="max-w-full h-auto rounded-lg shadow-lg"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default DrivingChangeComponent;