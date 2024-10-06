import React from 'react';
import TeamGrid from '../TeamGrid';
import { Metadata } from 'next/types';
import TopComponent from '../TopComponent';
export const metadata: Metadata = {
    title: "COTE | Team",
    description: "All you need to know about COTE.",
}
const Page = () => {
    return (
        <div>
            <TopComponent />
            <TeamGrid />
        </div>
    );
};

export default Page;