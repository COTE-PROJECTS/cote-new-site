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
    { name: "BAHINDI EMMANUEL", role: "CEO, Director", image: "/assets/team/team01.png" },
    { name: "MUGAMBA BRUNO", role: "CTO, Director", image: "/assets/team/team02.png" },
    { name: "MUGASA TUHUMWIRE", role: "Chairman, Director", image: "/assets/team/team03.png" },
    { name: "NAMIIRO HABIIBAH", role: "General Manager", image: "/assets/team/team06.png" },
    { name: "CAROS HERBERT", role: "IT Director", image: "/assets/team/team05.png" },
    { name: "MULIKATETE ANGELLA", role: "Head Of Programs", image: "/assets/team/team04.png" },
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