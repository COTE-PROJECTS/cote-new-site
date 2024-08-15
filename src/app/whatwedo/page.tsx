import { Metadata } from 'next';
import React from 'react';
import ProcessSteps from './activities';
import ServicesSection from './services';
export const metadata: Metadata = {
    title: 'COTE | What we do',
    description: 'This section contains services that we offer at Center Of Technology Evolution.'
}
const Page = () => {
    return (
        <div>
            <ServicesSection />
            <ProcessSteps />
        </div>
    );
};

export default Page;