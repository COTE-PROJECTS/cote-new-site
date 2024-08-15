"use client"
import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
    name: string;
    role: string;
    image: string;
}

const teamMembers: TeamMember[] = [
    { name: "Sony Madison", role: "CEO, Director", image: "/images/sony-madison.jpg" },
    { name: "Hary Warth", role: "Head Manager", image: "/images/hary-warth.jpg" },
    { name: "Jenny Hobb", role: "Branch Manager", image: "/images/jenny-hobb.jpg" },
    { name: "Johny Smith", role: "Supervisor", image: "/images/johny-smith.jpg" },
    { name: "Mary James", role: "Team Lead", image: "/images/mary-james.jpg" },
    { name: "Thomas Henry", role: "Senior Developer", image: "/images/thomas-henry.jpg" },
    // { name: "Sally Watt", role: "Designer", image: "/images/sally-watt.jpg" },
];

const TeamGrid: React.FC = () => {
    return (
        <div className="container mx-auto px-4 my-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={member.name}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                            <p className="text-sm text-gray-600">{member.role}</p>
                            <div className="mt-4 flex space-x-2">
                                {['facebook', 'twitter', 'youtube', 'instagram'].map((social) => (
                                    <a
                                        key={social}
                                        href={`#${social}`}
                                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                                    >
                                        <img src={`/icons/${social}.svg`} alt={social} className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TeamGrid;