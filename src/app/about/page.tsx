import React from 'react';

import { Metadata } from 'next/types';
import AboutSection from './About';
export const metadata: Metadata = {
    title: "COTE | About COTE",
    description: "All you need to know about COTE.",
}
const Page = () => {
    return (
        <div className='bg-orange-50 my-20'>
            <AboutSection />

        </div>
    );
};

export default Page;