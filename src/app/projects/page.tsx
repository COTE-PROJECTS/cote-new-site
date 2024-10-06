import { Metadata } from 'next';
import React from 'react';
import ProjectsPage from './ShowCaseComponent';
export const metadata: Metadata = {
    title: "COTE | Projects",
    description: "These are some of the projects we have worked on."
}
const Page = () => {
    return (
        <div>
            <ProjectsPage />
        </div>
    );
};

export default Page;