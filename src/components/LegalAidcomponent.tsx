import React from 'react';

const LegalAidComponent: React.FC = () => {
    return (
        <section
            className="py-16 bg-cover bg-white flex flex-col md:flex-row items-center justify-between"
            style={{
                backgroundImage: 'url("https://www.unwantedwitness.org/wp-content/uploads/2023/03/WhatsApp-Image-2022-10-03-at-13.17.47.jpeg")',
                backgroundColor: '#ffffff',
            }}
        >
            <div className="w-full md:w-3/5 p-8 bg-white">
                <strong className="text-lg md:text-xl text-black">Digital Identity</strong>
                <h1 className="text-4xl md:text-5xl font-extrabold text-black mt-4">
                    LEGAL AID FOR AN{' '}
                    <span className="bg-[#f7941f] text-black px-2">EQUITABLE</span> SOCIETY
                </h1>
                <p className="text-lg md:text-xl text-black mt-6">
                    We are committed to providing legal aid services to individuals who have experienced digital rights violations in Uganda. We understand the importance of legal representation in ensuring that victims receive justice and compensation. We partner with legal organizations and lawyers to provide these services and make them accessible to those who need them the most. We believe that every individual has the right to access justice and receive fair treatment under the law.
                </p>
                <a
                    href="https://www.unwantedwitness.org/digital-identity/"
                    className="mt-8 inline-block bg-[#f7941f] text-white text-lg font-semibold py-3 px-8 rounded hover:bg-opacity-90 transition duration-300"
                >
                    LEARN MORE
                </a>
            </div>
        </section>
    );
};

export default LegalAidComponent;
