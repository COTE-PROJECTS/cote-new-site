import React from 'react';
import { FaChartLine, FaPencilRuler, FaBrush, FaLaptopCode, FaFileAlt, FaChartPie, FaHandshake, FaTasks, FaAndroid, FaMobileAlt } from 'react-icons/fa';
import ServiceCard from './ServiceCard';
// import CallToAction from './ContactCard';
// import { IoIosAdd } from 'react-icons/io';

const ServicesSection: React.FC = () => {
    return (
        <section className="py-16 flex flex-col mx-auto text-center place-content-center items-center mb-20 px-8 my-28">
            <div className="inline-flex flex-row mx-auto mb-10 text-center place-content-center items-center bg-white rounded-full px-4 py-1 shadow-sm">
                <span className="w-2 h-2 bg-[#ff4c19] rounded-full mr-2"></span>
                <span className="text-gray-700 font-medium text-sm">SERVICES WE OFFER</span>
                <span className="w-2 h-2 bg-[#ff4c19] rounded-full ml-2"></span>
            </div>
            <div>

            </div>
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
                    icon={<FaMobileAlt size={42} />}
                    title="Mobile App Development"
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
