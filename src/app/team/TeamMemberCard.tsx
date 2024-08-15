// import { motion } from 'framer-motion';
// import React from 'react';
// import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

// interface TeamMemberProps {
//     name: string;
//     position: string;
//     imageUrl: string;
//     index: number;
// }

// const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, position, imageUrl, index }) => {
//     return (
//         <motion.div
//             key={name}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="max-w-sm mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
//             <div className="relative">
//                 <img src={imageUrl} alt={name} className="w-full h-64 object-cover object-center" />
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-500 to-transparent p-6 pb-10">
//                     <h2 className="text-white text-2xl font-bold">{name}</h2>
//                     <p className="text-white text-lg">{position}</p>
//                 </div>
//             </div>
//             <div className="flex justify-center space-x-4 p-4">
//                 <SocialIcon Icon={FaFacebook} />
//                 <SocialIcon Icon={FaTwitter} />
//                 <SocialIcon Icon={FaYoutube} />
//                 <SocialIcon Icon={FaInstagram} />
//             </div>
//         </motion.div>
//     );
// };

// const SocialIcon: React.FC<{ Icon: React.ElementType }> = ({ Icon }) => (
//     <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
//         <Icon className="text-gray-600 w-5 h-5" />
//     </div>
// );

// export default TeamMemberCard;

import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

interface TeamMemberProps {
    name: string;
    position: string;
    imageUrl: string;
    index: number;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, position, imageUrl, index }) => {
    return (
        <div className="w-[23rem] mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="relative">
                <img src={imageUrl} alt={name} className="w-full h-64 object-cover object-center" />
            </div>
            <div className="relative -mt-10 mx-4">
                <div className="bg-orange-500 text-white rounded-2xl p-4 text-center">
                    <h2 className="text-xl font-bold">{name}</h2>
                    <p className="text-sm">{position}</p>
                </div>
            </div>
            <div className="flex justify-center space-x-2 p-4 mt-2">
                <SocialIcon Icon={FaFacebook} />
                <SocialIcon Icon={FaTwitter} />
                <SocialIcon Icon={FaYoutube} />
                <SocialIcon Icon={FaInstagram} />
            </div>
        </div>
    );
};

const SocialIcon: React.FC<{ Icon: React.ElementType }> = ({ Icon }) => (
    <div className="w-10 h-10 bg-gray-100 rounded-full transition-transform ease-in-out hover:scale-105 hover:bg-orange-400  flex items-center justify-center">
        <Icon className="text-gray-600 w-5 h-5 " />
    </div>
);

export default TeamMemberCard;