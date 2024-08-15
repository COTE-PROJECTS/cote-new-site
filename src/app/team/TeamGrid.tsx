"use client"
import React from 'react';
import { motion } from 'framer-motion';
import TeamMemberCard from './TeamMemberCard';

interface TeamMember {
    name: string;
    role: string;
    image: string;
}

const teamMembers: TeamMember[] = [
    { name: "BAHINDI EMMANUEL", role: "CEO, Director", image: "/images/sony-madison.jpg" },
    { name: "MUGAMBA BRUNO", role: "CTO, Director", image: "/images/hary-warth.jpg" },
    { name: "MUGASA TUHUMWIRE", role: "Chairman, Director", image: "/images/jenny-hobb.jpg" },
    { name: "NAMIIRO HABIIBAH", role: "General Manager", image: "/images/johny-smith.jpg" },
    { name: "CAROS HERBERT", role: "IT Director", image: "/images/mary-james.jpg" },
    { name: "MULIKATETE ANGELLA", role: "Head Of Programs", image: "/images/thomas-henry.jpg" },
    // { name: "Sally Watt", role: "Designer", image: "/images/sally-watt.jpg" },
];

const TeamGrid: React.FC = () => {
    return (
        <div className="container mx-auto px-4 my-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                {teamMembers.map((member, index) => (
                    <TeamMemberCard name={member.name} position={member.role} imageUrl={member.image} index={index} />
                ))}
            </div>
        </div>
    );
};

export default TeamGrid;