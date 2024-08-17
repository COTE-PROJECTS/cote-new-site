import React from 'react';

const PartnerSection: React.FC = () => {
    return (
        <section
            className="relative flex items-center justify-center bg-cover bg-center h-screen"
            style={{
                paddingTop: '70px',
                paddingBottom: '70px',
                backgroundColor: '#ffffff',
                backgroundImage: 'url(https://www.unwantedwitness.org/wp-content/uploads/2021/06/BG.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center top',
                backgroundSize: 'cover',
            }}
        >
            <div className="text-center">
                {/* Separator Image */}
                <div className="flex justify-center mb-4">
                    <img
                        src="https://www.unwantedwitness.org/wp-content/uploads/2021/06/uw-separator.png"
                        alt="Separator"
                        className="mx-auto"
                    />
                </div>

                {/* Heading */}
                <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
                    GET INVOLVED,<br />BECOME A PARTNER
                </h1>

                {/* Subtext */}
                <p className="text-white text-lg mb-8">
                    If you believe in what we do and would like to get involved, thank you!
                </p>

                {/* Button */}
                <a
                    href="mailto:info@unwantedwitness.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange-500 text-white font-bold py-3 px-6 rounded-full hover:bg-orange-600 transition duration-300"
                    style={{
                        backgroundColor: '#ff4c19',
                        color: '#ffffff',
                    }}
                >
                    PARTNER WITH US
                </a>
            </div>
        </section>
    );
};

export default PartnerSection;
