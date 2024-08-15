import React from 'react';
import TeamGrid from './TeamGrid';
import { Metadata } from 'next/types';
export const metadata: Metadata = {
    title: "COTE | About COTE",
    description: "All you need to know about COTE.",
}
const Page = () => {
    return (
        <div className='bg-orange-50 h-screen'>
            <TeamGrid />
        </div>
    );
};

export default Page;