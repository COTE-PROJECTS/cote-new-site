"use client"
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from "next/image";

const projects = [
    { id: 1, title: 'Maritime Shipping Company', description: 'A Shipping Company that offers efficient and cost-effective global logistics solutions.', image: '/assets/projects/maritimeshipping-uganda.png' },
    { id: 2, title: 'Mooziki', description: 'A music streaming service for Ugandan music', image: '/assets/projects/mooziki.png' },
    { id: 3, title: 'TAPA', description: 'A non government organisation aimed at helping farmers in Kyegegwa district, ease their farming.', image: '/assets/projects/tapagric.png' },
    { id: 4, title: 'Samba Stats', description: 'An app provided livescore services for local leagues in uganda.', image: '/assets/projects/samba-stats.png' },
    { id: 5, title: 'Ezamba Homes', description: 'Ezamba homes provides the best quality furniture in uganda.', image: '/assets/projects/enzamba.png' },
    { id: 6, title: 'Passionate Hearts Ministries', description: 'An NGO that supports people in Bwizibwera-Rutooma Town Council, Mbarara District', image: '/assets/projects/passionateheartsministries.png' },
];

const ProjectsPage: React.FC = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <div className="min-h-screen my-20 py-12 px-6">
            <h1 className="text-4xl font-bold text-center mb-12 text-orange-600">Our Projects</h1>
            <motion.div
                className="grid gap-8 md:grid-cols-3"
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
            >
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden"
                        variants={itemVariants}
                    >
                        <Image width={600} height={600} src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-orange-600">{project.title}</h2>
                            <p className="text-gray-700 mt-4">{project.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ProjectsPage;