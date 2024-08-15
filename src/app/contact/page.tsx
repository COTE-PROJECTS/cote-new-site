import React from 'react';
import ContactForm from './components/ContactForm';
import { Metadata } from 'next/types';
export const metadata: Metadata = {
    title: "COTE | Contact Us",
    description: "Your can reach out to us anytime.",
};

const Page = () => {


    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-50 flex items-center justify-center p-4">
            <ContactForm />
        </div>
    );
};

export default Page;