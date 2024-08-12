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
        name: 'APC',
        url: '#',
        imgSrc: 'https://www.unwantedwitness.org/wp-content/uploads/2020/12/logo.png',
        imgAlt: 'APC Logo',
    },
    {
        name: 'Media Defence',
        url: '#',
        imgSrc: 'https://www.unwantedwitness.org/wp-content/uploads/2020/11/download.jpeg',
        imgAlt: 'Media Defence Logo',
    },
    {
        name: 'Kios',
        url: '#',
        imgSrc: 'https://www.unwantedwitness.org/wp-content/uploads/2018/12/kios-en-red.png',
        imgAlt: 'Kios Logo',
    },
    {
        name: 'US Mission',
        url: '#',
        imgSrc: 'https://www.unwantedwitness.org/wp-content/uploads/2018/12/US-mission.png',
        imgAlt: 'US Mission Logo',
    },
    {
        name: 'OISEA',
        url: '#',
        imgSrc: 'https://www.unwantedwitness.org/wp-content/uploads/2018/12/OISEA.png',
        imgAlt: 'OISEA Logo',
    },
    {
        name: 'HIVOS',
        url: '#',
        imgSrc: 'https://www.unwantedwitness.org/wp-content/uploads/2021/06/HIVOS-2-672x390-1-129x75-1.jpg',
        imgAlt: 'HIVOS Logo',
    },
    {
        name: 'Internews',
        url: '#',
        imgSrc: 'https://www.unwantedwitness.org/wp-content/uploads/2018/12/Internews.png',
        imgAlt: 'Internews Logo',
    },
    {
        name: 'CRD',
        url: '#',
        imgSrc: 'https://www.unwantedwitness.org/wp-content/uploads/2018/12/CRD.png',
        imgAlt: 'CRD Logo',
    },
    {
        name: 'DW Akademie',
        url: 'https://www.dw.com',
        imgSrc: 'https://www.unwantedwitness.org/wp-content/uploads/2021/06/DW-Akademie-1-133x75.jpeg',
        imgAlt: 'DW Akademie Logo',
    },
    {
        name: 'Privacy International',
        url: '#',
        imgSrc: 'https://www.unwantedwitness.org/wp-content/uploads/2021/06/PI-Privacy-International-RGB-Solid-150x42.png',
        imgAlt: 'Privacy International Logo',
    },
    {
        name: 'Canada',
        url: 'https://www.canadainternational.gc.ca/kenya/contact-uganda_ouganda-contactez.aspx?lang=eng',
        imgSrc: 'https://www.unwantedwitness.org/wp-content/uploads/2021/09/T130-Canada-150x46.png',
        imgAlt: 'Canada Logo',
    },
];

const Partners: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-left mb-8">
                    <div className="flex justify-start items-center mb-4">
                        <h1 className="text-3xl font-bold">OUR PARTNERS</h1>
                        <span className="h-1 bg-orange-500 w-20 ml-4"></span>
                    </div>
                </div>
                <ul className="grid grid-cols-4 gap-y-8 justify-items-center">
                    {partners.map((partner, index) => (
                        <li key={index} className="flex items-center justify-center">
                            <a href={partner.url} target="_blank" rel="noopener noreferrer">
                                <img
                                    className="mx-auto scale-with-grid max-h-16"
                                    src={partner.imgSrc}
                                    alt={partner.imgAlt}
                                    loading="lazy"
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Partners;
