// components/NewsItem.tsx
import React from 'react';

interface NewsItemProps {
    imageSrc: string;
    title: string;
    description: string;
    link: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ imageSrc, title, description, link }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
                src={imageSrc}
                alt={title}
                className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-700 mb-4">{description}</p>
                <a href={link} className="text-orange-500 font-semibold">
                    Read more
                </a>
            </div>
        </div>
    );
};

export default NewsItem;
