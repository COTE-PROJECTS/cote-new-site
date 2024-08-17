"use client"
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";

const projects = [
    { id: 1, title: 'Maritime Shipping Company', description: 'A mobile app that aids one to get a loan.', image: '/assets/projects/maritimeshipping-uganda.png' },
    { id: 2, title: 'Mooziki', description: 'A music streaming service for Ugandan music', image: '/assets/projects/mooziki.png' },
    { id: 3, title: 'TAPA', description: 'A non government organisation aimed at helping farmers in Kyegegwa district, ease their farming.', image: '/assets/projects/tapagric.png' },
    { id: 4, title: 'Samba Stats', description: 'An app provided livescore services for local leagues in uganda.', image: '/assets/projects/samba-stats.png' },
    { id: 5, title: 'Ezamba Homes', description: 'Ezamba homes provides the best quality furniture in uganda.', image: '/assets/projects/enzamba.png' },
    {
        id: 6, title: 'Passionate Hearts Ministries', description: 'An NGO that supports people in Bwizibwera-Rutooma Town Council, Mbarara District', image: '/assets/projects/passionateheartsministries.png'
    },
];

const ProjectsPage: React.FC = () => {
    const [loaded, setLoaded] = useState(true);

    // useEffect(() => {
    //     setLoaded(true);
    // }, []);

    return (
        <div className="min-h-screen my-20 py-12 px-6">
            <h1 className="text-4xl font-bold text-center mb-12 text-orange-600">Our Projects</h1>
            <div className="grid gap-8 md:grid-cols-3">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: loaded ? 1 : 0, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <Image width={600} height={600} src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-orange-600">{project.title}</h2>
                            <p className="text-gray-700 mt-4">{project.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
