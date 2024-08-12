import React from 'react';

const partners = [
    {
        name: 'Omidyar Network',
        url: 'https://omidyar.com/',
        imgSrc: 'https://www.unwantedwitness.org/wp-content/uploads/2021/06/Omidyar_Network_Logo_Horizontal_Color_RGB-150x18.png',
        imgAlt: 'Omidyar Network Logo',
    },
    {
        name: 'DHRLab',
        url: '#',
        imgSrc: 'https://www.unwantedwitness.org/wp-content/uploads/2021/06/DHRLab-logo-672x572-1-88x75-1.png',
        imgAlt: 'DHRLab Logo',
    },
    {
        name: 'Logo 3',
        url: '#',
        imgSrc: 'https://www.unwantedwitness.org/wp-content/uploads/2020/12/logo.png',
        imgAlt: 'Logo 3',
    },
    {
        name: 'Logo 4',
        url: '#',
        imgSrc: 'https://www.unwantedwitness.org/wp-content/uploads/2020/11/download.jpeg',
        imgAlt: 'Logo 4',
    },
    // Add more partners here
];

const Partners: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto text-left">
                <div className="mb-4">
                    <img
                        className="mx-auto"
                        src="https://www.unwantedwitness.org/wp-content/uploads/2021/06/uw-separator.png"
                        alt="Separator"
                    />
                </div>
                <h1 className="text-3xl font-bold mb-8">OUR PARTNERS</h1>
                <ul className="flex flex-wrap">
                    {partners.map((partner, index) => (
                        <li key={index} className="w-1/4 p-4">
                            <div className="flex justify-center items-center h-full">
                                <a href={partner.url} target="_blank" rel="noopener noreferrer">
                                    <img
                                        className="mx-auto"
                                        src={partner.imgSrc}
                                        alt={partner.imgAlt}
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Partners;
