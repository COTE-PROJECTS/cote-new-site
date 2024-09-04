"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TeamMemberCard from './TeamMemberCard';

interface TeamMember {
    name: string;
    role: string;
    image: string;
}

const teamMembers: TeamMember[] = [
    { name: "BAHINDI EMMANUEL", role: "CEO, Director", image: "/assets/team/team01.png" },
    { name: "MUGAMBA BRUNO", role: "CTO, Director", image: "/assets/team/team02.png" },
    { name: "MUGASA TUHUMWIRE", role: "Chairman, Director", image: "/assets/team/team03.png" },
    { name: "NAMIIRO HABIIBAH", role: "General Manager", image: "/assets/team/team06.png" },
    { name: "CAROS HERBERT", role: "IT Director", image: "/assets/team/team05.png" },
    { name: "MULIKATETE ANGELLA", role: "Head Of Programs", image: "/assets/team/team04.png" },
];

const TeamGrid: React.FC = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,  // Changed to false to allow re-triggering
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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            className="container mx-auto px-2 my-10"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            ref={ref}
        >
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
            >
                {teamMembers.map((member, index) => (
                    <motion.div key={member.name} variants={itemVariants}>
                        <TeamMemberCard
                            name={member.name}
                            position={member.role}
                            imageUrl={member.image}
                            index={index}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default TeamGrid;