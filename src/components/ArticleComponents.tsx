// components/NewsSection.tsx
import React from 'react';
import NewsItem from './NewsItem';

const NewsSection: React.FC = () => {
    return (
        <section className="bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-8">OUR LATEST NEWS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <NewsItem
                        imageSrc="https://www.unwantedwitness.org/wp-content/uploads/2024/07/press-release-cover-623x415.webp"
                        title="Unwanted Witness Submits Petition to Uganda Human Rights Commission Regarding National ID System"
                        description="Kampala, Uganda – July 30, 2024 – Unwanted Witness, a leading civil society organization dedicated to..."
                        link="#"
                    />

                    <NewsItem
                        imageSrc="https://www.unwantedwitness.org/wp-content/uploads/2024/07/press-release-cover-623x415.webp"
                        title="A Call for Inclusivity, Trust, and Accountability in Reforming Uganda’s National ID System"
                        description="One of the most striking issues identified in the paper is the financial burden imposed on Ugandans for ID services..."
                        link="#"
                    />
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
