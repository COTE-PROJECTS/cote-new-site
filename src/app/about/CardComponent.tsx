import React from 'react';

interface CardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    bgColor: string;
}

const CardComponent: React.FC<CardProps> = ({ icon, title, description, bgColor }) => {
    return (
        <div className="flex items-center bg-white rounded-2xl shadow-lg p-6 space-x-4">
            <div className={`w-16 h-16 flex items-center justify-center rounded-full ${bgColor} text-white`}>
                {icon}
            </div>
            <div>
                <h4 className="text-lg font-semibold mb-2">{title}</h4>
                <p className="text-gray-500 text-sm">{description}</p>
            </div>
        </div>
    );
};

export default CardComponent;
