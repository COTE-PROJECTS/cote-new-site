import React from 'react';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title }) => {
    return (
        <div className="bg-[#333] rounded-2xl hover:scale-105 cursor-pointer w-4/5 p-6 text-center text-white flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-red-500 mb-4">
                {icon}
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
        </div>
    );
};

export default ServiceCard;
