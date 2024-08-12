// "use client"
// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const InternetFreedomAwareness: React.FC = () => {
//     return (
//         <div className="container mx-auto px-4 py-8 font-sans">
//             <div className="flex flex-col md:flex-row items-center">
//                 <motion.div
//                     className="md:w-1/2 mb-6 md:mb-0"
//                     initial={{ opacity: 0, x: -50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5 }}
//                     whileHover={{ scale: 1.05 }}
//                 >
//                     <Image
//                         src="/api/placeholder/600/400"
//                         alt="Internet Freedom Speaker"
//                         width={600}
//                         height={400}
//                         className="rounded-lg"
//                     />
//                 </motion.div>
//                 <div className="md:w-1/2 md:pl-8">
//                     <motion.h2
//                         className="text-sm font-semibold text-gray-600 mb-2"
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.2, duration: 0.5 }}
//                     >
//                         Freedom of expression & other Internet Freedoms
//                     </motion.h2>
//                     <motion.h1
//                         className="text-4xl font-bold mb-4"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.4, duration: 0.5 }}
//                     >
//                         AMPLIFYING YOUR VOICE, PRESERVING YOUR{' '}
//                         <motion.span
//                             className="bg-orange-500 text-white px-1"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             ONLINE FREEDOM
//                         </motion.span>
//                     </motion.h1>
//                     <motion.p
//                         className="mb-6"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.6, duration: 0.5 }}
//                     >
//                         Through our lobbying efforts, we engage with the government and
//                         other stakeholders to promote internet freedoms and prevent
//                         censorship. As a human rights organization, we are committed to
//                         defending the rights of internet users and ensuring that they are
//                         not violated. We believe that an open and secure internet is
//                         essential for the promotion of democracy, human rights, and social
//                         justice.
//                     </motion.p>
//                     <motion.button
//                         className="bg-orange-500 text-white font-semibold py-2 px-4 rounded"
//                         whileHover={{ scale: 1.05, backgroundColor: '#C2410C' }}
//                         whileTap={{ scale: 0.95 }}
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.8, duration: 0.5 }}
//                     >
//                         LEARN MORE
//                     </motion.button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default InternetFreedomAwareness;
import Image from 'next/image';
import React from 'react';

const InternetFreedomAwareness: React.FC = () => {
    return (
        <section
            className="py-16 bg-[#f1f1f2] relative flex flex-col md:flex-row items-center justify-center"
        >
            {/* Background Image */}
            <Image
                src="https://www.unwantedwitness.org/wp-content/uploads/2023/03/FreedomOfExpressionUW.jpg"
                alt="Freedom of Expression" width={1920} height={1080}
                className="absolute inset-0 w-full h-full object-cover opacity-1"
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl px-4 md:px-0">
                <div className="md:w-2/5 hidden md:block">&nbsp;</div>
                <div className="md:w-3/5 bg-white p-12">
                    <strong className="text-lg md:text-xl text-black">
                        Freedom of expression & other Internet Freedoms
                    </strong>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-black mt-4">
                        AMPLIFYING YOUR VOICE, PRESERVING YOUR{' '}
                        <span className="bg-[#f7941f] text-black px-2">
                            ONLINE FREEDOM
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-black mt-6">
                        Through our lobbying efforts, we engage with the government and other stakeholders to promote internet freedoms and prevent censorship. As a human rights organization, we are committed to defending the rights of internet users and ensuring that they are not violated. We believe that an open and secure internet is essential for the promotion of democracy, human rights, and social justice.
                    </p>
                    <a
                        href="https://www.unwantedwitness.org/freedom-of-expression/"
                        className="mt-8 inline-block bg-[#f7941f] text-white text-lg font-semibold py-3 px-8 rounded hover:bg-opacity-90 transition duration-300"
                    >
                        LEARN MORE
                    </a>
                </div>
            </div>
        </section>
    );
};

export default InternetFreedomAwareness;
