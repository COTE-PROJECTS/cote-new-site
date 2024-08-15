import React from 'react';
import { FaChartLine, FaPencilRuler, FaBrush, FaLaptopCode, FaFileAlt, FaChartPie, FaHandshake, FaTasks } from 'react-icons/fa';
import ServiceCard from './ServiceCard';
import CallToAction from './ContactCard';

const ServicesSection: React.FC = () => {
    return (
        <section className="py-16 px-8 my-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard
                    icon={<FaChartLine size={42} />}
                    title="Website Development"
                />
                <ServiceCard
                    icon={<FaLaptopCode size={42} />}
                    title="Graphic Designing"
                />
                <ServiceCard
                    icon={<FaPencilRuler size={42} />}
                    title="UI/UX Web Designing"
                />
                <ServiceCard
                    icon={<FaBrush size={42} />}
                    title="Sketch Designing"
                />
                <ServiceCard
                    icon={<FaFileAlt size={42} />}
                    title="SEO & Content Writing"
                />
                <ServiceCard
                    icon={<FaChartPie size={42} />}
                    title="Digital Market Planning"
                />
                <ServiceCard
                    icon={<FaHandshake size={42} />}
                    title="Business Management"
                />
                <ServiceCard
                    icon={<FaTasks size={42} />}
                    title="Market Data Analyzing"
                />
            </div>
            {/* <CallToAction /> */}
        </section>
    );
};

export default ServicesSection;
