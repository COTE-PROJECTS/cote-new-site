"use client"
import React from 'react';
import { motion } from 'framer-motion';

const FooterSection: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <footer id="Footer" className="bg-black text-white py-12">
            <motion.div
                className="mx-auto px-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Us Section */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-semibold">About us</h4>
                        <div className="bg-[#ff4c19] h-1 w-20 my-2"></div>
                        <p className="mb-4 text-gray-400">
                            COTE (Center Of Technology Evolution), A digitally empowered young people, equipped with practical IT skills from foundational literacy to advanced programming across Africa by 2044.
                        </p>
                        <p className="text-gray-400">Follow us on our social media</p>
                        <div className="flex space-x-3 text-white mt-2">
                            {['facebook-f', 'twitter', 'linkedin-in', 'instagram', 'youtube'].map((icon, index) => (
                                <motion.a
                                    key={icon}
                                    href="#"
                                    className="hover:text-[#ff4c19] transition-colors duration-300"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <i className={`fab fa-${icon}`}></i>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links Section */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-semibold">Quick links</h4>
                        <div className="bg-[#ff4c19] h-1 w-20 my-2"></div>
                        <ul className="space-y-2 text-gray-400">
                            {['Privacy policy', 'About us', 'Contact us', 'Insights', 'Career'].map((link, index) => (
                                <motion.li
                                    key={link}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <a href="#" className="hover:text-[#ff4c19] transition-colors duration-300">{link}</a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* What We Do Section */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-semibold">What we do</h4>
                        <div className="bg-[#ff4c19] h-1 w-20 my-2"></div>
                        <ul className="space-y-2 text-gray-400">
                            {['Digital Marketing', 'Web Development', 'Mobile Application Development', 'IT Practical Skill training'].map((service, index) => (
                                <motion.li
                                    key={service}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <a href="#" className="hover:text-[#ff4c19] transition-colors duration-300">{service}</a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Let's Connect Section */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-semibold">Let's connect</h4>
                        <div className="bg-[#ff4c19] h-1 w-20 my-2"></div>
                        <p className="text-gray-400"><b>Center Of Technology Evolution (COTE)</b></p>
                        <p className="text-gray-400">
                            Kawaala, Kampala, Uganda.
                        </p>
                        <p className="text-gray-400">
                            <strong>Mob:</strong> +256-773165989<br />
                            <strong>Email:</strong> <a href="mailto:info@coteug.com" className="hover:underline hover:text-[#ff4c19] transition-colors duration-300">info@coteug.com</a>
                        </p>
                    </motion.div>
                </div>

                {/* Footer Bottom Section */}
                <motion.div
                    className="bg-[#ff4c19] py-4 mt-8 -mx-4 px-4"
                    variants={itemVariants}
                >
                    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                        <div className="text-sm text-gray-100 text-center sm:text-left mb-2 sm:mb-0">
                            © {new Date().getFullYear()} Center Of Technology Evolution (COTE), All Rights Reserved.
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default FooterSection;