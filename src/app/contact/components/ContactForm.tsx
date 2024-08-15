"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [formState, setFormState] = useState('idle'); // 'idle', 'error', or 'success'

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && email && subject && message) {
            setFormState('success');
            console.log({ name, email, subject, message });
        } else {
            setFormState('error');
        }
    };

    const inputClasses = (fieldValue: string) => `
        mt-1 block w-full rounded-lg
        border-2 ${formState === 'error' && !fieldValue ? 'border-red-300' : formState === 'success' ? 'border-teal-300' : 'border-gray-300'} 
        focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:ring-opacity-50
        transition duration-300 ease-in-out
        py-3 px-4 text-gray-700 text-base
        bg-white bg-opacity-90 hover:bg-opacity-100
    `;

    return (
        <div className="min-h-[10vh] bg-gradient-to-br from-orange-100 via-orange-50 to-white flex items-center justify-center my-36 ">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden sm:max-w-5xl w-full"
            >
                <h1 className="text-5xl font-bold text-center py-10 text-gray-800">Get In Touch</h1>
                <p className="text-center text-gray-600 font-semibold text-lg px-6 mb-10 max-w-2xl mx-auto">
                    Invest in Uganda's future. Choose COTE Technologies and empower the next generation of digital leaders. Contact us today!
                </p>

                <div className="flex flex-col md:flex-row">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-orange-500 text-white p-10 md:w-1/3"
                    >
                        <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                        <p className="mb-8">We'll create high-quality linkable content and build at least 40 high-authority links.</p>
                        <div className="space-y-6">
                            <p className="flex items-center"><span className="mr-3">📞</span> +256-773165989</p>
                            <p className="flex items-center"><span className="mr-3">📞</span> +256-750482089</p>
                            <p className="flex items-center"><span className="mr-3">✉️</span> info@coteug.com</p>
                            <p className="flex items-center"><span className="mr-3">📍</span> Kawaala, Kampala - Uganda</p>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        onSubmit={handleSubmit}
                        className="p-10 md:w-2/3 space-y-8"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={inputClasses(name)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={inputClasses(email)}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Your Subject</label>
                            <input
                                type="text"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className={inputClasses(subject)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows={3}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className={inputClasses(message)}
                                placeholder="Write your message here..."
                                required
                            ></textarea>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-orange-600 transition duration-300 ease-in-out"
                        >
                            Send Message
                        </motion.button>
                        {formState === 'error' && (
                            <p className="text-red-500 text-sm mt-2">Please fill in all fields correctly.</p>
                        )}
                        {formState === 'success' && (
                            <p className="text-teal-500 text-sm mt-2">Message sent successfully!</p>
                        )}
                    </motion.form>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactForm;