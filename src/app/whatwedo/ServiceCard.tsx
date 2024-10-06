"use client"
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-amber-300 to-[#ff4c19] rounded-3xl w-full max-w-sm p-8 text-center text-white flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative group"
        >
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <motion.div
                className="text-white mb-6 text-4xl"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
            >
                {icon}
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
        </motion.div>
    );
};

export default ServiceCard;