"use client"
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const NewsletterSection: React.FC = () => {
    return (
        <motion.div
            className="py-16 max-h-[55rem] bg-[#fda334]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="relative max-w-7xl mx-auto">
                <motion.div
                    className="absolute inset-x-0 top-0 transform -translate-y-3/4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                    <div className="w-10 h-10 rounded-full bg-white mx-auto mt-0"></div>
                </motion.div>
                <div className="flex flex-wrap justify-between items-center">
                    <motion.div
                        className="w-full md:w-2/3 md:pr-8"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h1 className="text-4xl font-bold text-black">Why Focus on Skilling Young People with In-Demand Practical IT Skills?</h1>
                        <p className="mt-4 text-lg text-black">
                            Imagine a Uganda where young people, from primary school onwards, grow up equipped with the power of technology. A future where practical IT skills are not just a privilege, but an essential part of education, preparing them to lead in a digital world
                        </p>
                    </motion.div>
                    <motion.div
                        className="w-full md:w-1/3 mt-8 md:mt-0"
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <motion.div
                            className="block"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                            <div className="relative border">
                                <Image
                                    src="https://api10.iloveimg.com/v1/download/cA0hryxgkxd6k38bhw4bs3m9kz1v9ypdwds1vxgkcggAwybj4mv0csqf0phl5y581kf41cvg1f08y8p3rtht8fm0zrbm2qd2xA00t3vnyjqs3pzA4hszdb2cnj4t96n2j2q34pAjsy7A2jjzv19ttsg8ypl4zAfcrfvr1b41ghxbbl6wx1pq"
                                    width={800}
                                    height={800}
                                    alt="#"
                                    className="w-full h-full object-cover"
                                />
                                <motion.div
                                    className="absolute inset-0 bg-black bg-opacity-25 flex justify-center items-center"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                >
                                    <i className="icon-link text-white"></i>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default NewsletterSection;