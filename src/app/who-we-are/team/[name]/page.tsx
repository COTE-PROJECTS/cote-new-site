"use client"
import { useParams } from 'next/navigation';
import React from 'react';
import TeamDetail from './TeamDetails';
import { TeamMember } from '../../TeamGrid';

const Page = () => {
    const { name } = useParams()
    const teamMembers: TeamMember[] = [
        { name: "BAHINDI EMMANUEL", bio: "A highly skilled Software Engineer with experience in designing, developing, and deploying web applications using JavaScript, React, Next.js, PHP, Laravel, Tailwind CSS, and a proven ability to collaborate and deliver solutions that streamline processes and enhance user experience.", role: "CEO, Director", slug: "bahindi-emmanuel", image: "/assets/team/team01.png" },
        { name: "MUGAMBA BRUNO", role: "CTO, Director", slug: "mugamba-bruno", image: "/assets/team/team02.png" },
        { name: "MUGASA TUHUMWIRE", role: "Chairman, Director", slug: "mugasa-tuhumwire", image: "/assets/team/team03.png" },
        { name: "NAMIIRO HABIIBAH", role: "General Manager", slug: "namiiro-habiibah", image: "/assets/team/team06.png" },
        { name: "CAROS HERBERT", role: "IT Director", slug: "caros-herbert", image: "/assets/team/team05.png" },
        { name: "MULIKATETE ANGELLA", role: "Head Of Programs", slug: "mulikatete-angella", image: "/assets/team/team04.png" },
    ];
    const [data, setData] = React.useState({} as TeamMember);
    React.useEffect(() => {
        const d: TeamMember = teamMembers.filter(member => member.slug === name)[0];
        setData(d);
    }, [])
    return (
        <div className="mt-20">
            <TeamDetail
                title={data.role}
                image={data.image}
                bio={data.bio ?? ""}
                createdAt={Date()}
            />
        </div>
    );
};

export default Page;