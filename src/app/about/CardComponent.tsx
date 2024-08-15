// import React from 'react';
import { motion } from 'framer-motion';

// interface CardProps {
//     icon: React.ReactNode;
//     title: string;
//     description: string;
//     bgColor: string;
// }

// const CardComponent: React.FC<CardProps> = ({ icon, title, description, bgColor }) => {
//     return (
//         <motion.div
//             className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//         >
//             <div className="flex flex-row items-center place-content-center text-center">
//                 <motion.div
//                     className={`w-16 h-16 sm:w-[100px] p-5 sm:h-[80px] flex items-center justify-center rounded-full ${bgColor} text-white`}
//                     whileHover={{ rotate: 360 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     {icon}
//                 </motion.div>
//                 <motion.div
//                     className='flex flex-col items-center place-content-center'
//                 >
//                     <h4 className="text-xl sm:text-2xl font-extrabold mb-2">{title}</h4>
//                     <p className="text-sm w-80 sm:text-base text-gray-600">{description}</p>
//                 </motion.div>
//             </div>
//         </motion.div>
//     );
// };

// export default CardComponent;
import React from 'react';
interface CardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    bgColor: string;
}

const CardComponent: React.FC<CardProps> = ({ icon, title, description, bgColor }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto bg-white rounded-3xl shadow-md overflow-hidden">
            <div className="p-6 flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center`}>
                        {icon}
                        {/* <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg> */}
                    </motion.div>
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                    <p className="mt-1 text-gray-500">
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default CardComponent;