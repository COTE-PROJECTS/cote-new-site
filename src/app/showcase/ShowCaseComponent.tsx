"use client"
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
    { id: 1, title: 'Quic Credit', description: 'A mobile app that aids one to get a loan.', image: '/images/alpha.jpg' },
    { id: 2, title: 'Mooziki', description: 'A music streaming service for Ugandan music', image: '/images/beta.jpg' },
    { id: 3, title: 'TAPA', description: 'A non government organisation aimed at helping farmers in Kyegegwa district, ease their farming.', image: '/images/gamma.jpg' },
    { id: 4, title: 'Samba Stats', description: 'An app provided livescore services for local leagues in uganda.', image: '/images/delta.jpg' },
    { id: 5, title: 'Ezamba Homes', description: 'Ezamba homes provides the best quality furniture in uganda.', image: '/images/epsilon.jpg' },
    {
        id: 6, title: 'Passionate Hearts Ministries', description: 'An NGO that supports people in Bwizibwera-Rutooma Town Council, Mbarara District', image: '/images/zeta.jpg'
    },
];

const ProjectsPage: React.FC = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

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
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
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
