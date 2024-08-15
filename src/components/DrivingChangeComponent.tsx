

import React from 'react';

const DrivingChangeComponent: React.FC = () => {
    return (
        <section className="py-16 bg-[#f1f1f2] flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 p-8">
                {/* <strong className="text-lg md:text-xl text-black">Policy and Legal Reform</strong> */}
                <h1 className="text-5xl md:text-5xl uppercase font-extrabold text-black mt-4">
                    Mentorship {' '}
                    <span className="bg-[#f7941f] text-black px-2">and Support</span>
                </h1>
                <p className="text-lg md:text-xl text-black mt-6">
                    The journey of learning can be challenging. That's why we provide dedicated mentors who offer guidance and support throughout the program. Students can also access online communities and forums to connect with peers and industry professionals.
                </p>

                <a
                    href="#"
                    className="mt-8 inline-block bg-[#f7941f] text-white text-lg font-semibold py-3 px-8 rounded hover:bg-opacity-90 transition duration-300"
                >
                    LEARN MORE
                </a>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center p-8">
                <img
                    src="https://www.unwantedwitness.org/wp-content/uploads/2023/03/Screenshot-2023-03-28-at-14.15.32.png"
                    alt="Policy and Legal Reform"
                    className="max-w-[30rem] h-auto"
                />
            </div>
        </section>
    );
};

export default DrivingChangeComponent;
