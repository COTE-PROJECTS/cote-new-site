"use client"
import React, { useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import type { IConfettiOptions } from 'react-canvas-confetti';

type ConfettiConfig = {
    spread: number;
    startVelocity?: number;
    decay?: number;
    scalar?: number;
};

const canvasStyles: React.CSSProperties = {
    position: 'fixed',
    pointerEvents: 'none',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0
};

const ContactForm: React.FC = () => {
    const [state, handleSubmit] = useForm("xblrkgwy");
    const [isConfettiActive, setIsConfettiActive] = useState<boolean>(false);
    const confettiRef = useRef<ReactCanvasConfetti | null>(null);

    const getInstance = useCallback((instance: ReactCanvasConfetti | null) => {
        confettiRef.current = instance;
    }, []);

    const onSubmitSuccess = () => {
        setIsConfettiActive(true);
        setTimeout(() => setIsConfettiActive(false), 5000); // Stop confetti after 5 seconds
    };

    const makeShot = useCallback((particleRatio: number, opts: ConfettiConfig) => {
        confettiRef.current?.({
            ...opts,
            origin: { y: 0.7 },
            particleCount: Math.floor(200 * particleRatio),
        });
    }, []);

    const fire = useCallback(() => {
        makeShot(0.25, {
            spread: 26,
            startVelocity: 55,
        });

        makeShot(0.2, {
            spread: 60,
        });

        makeShot(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8,
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2,
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 45,
        });
    }, [makeShot]);

    React.useEffect(() => {
        // if (isConfettiActive) {
        fire();
        // }
    }, [isConfettiActive, fire]);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        await handleSubmit(e);
        if (state.succeeded) {
            onSubmitSuccess();
        }
    };

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

                    {state.succeeded ? (
                        <div className="p-10 md:w-2/3 flex items-center justify-center">
                            <p className="text-2xl font-semibold text-green-600">Thanks for joining!</p>
                        </div>
                    ) : (
                        <motion.form
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            onSubmit={onSubmit}
                            className="p-10 md:w-2/3 space-y-8"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name='name'
                                        className="mt-1 block w-full rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:ring-opacity-50 transition duration-300 ease-in-out py-3 px-4 text-gray-700 text-base bg-white bg-opacity-90 hover:bg-opacity-100"
                                        required
                                    />
                                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name='email'
                                        className="mt-1 block w-full rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:ring-opacity-50 transition duration-300 ease-in-out py-3 px-4 text-gray-700 text-base bg-white bg-opacity-90 hover:bg-opacity-100"
                                        required
                                    />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Your Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name='subject'
                                    className="mt-1 block w-full rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:ring-opacity-50 transition duration-300 ease-in-out py-3 px-4 text-gray-700 text-base bg-white bg-opacity-90 hover:bg-opacity-100"
                                    required
                                />
                                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={3}
                                    name='message'
                                    className="mt-1 block w-full rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:ring-opacity-50 transition duration-300 ease-in-out py-3 px-4 text-gray-700 text-base bg-white bg-opacity-90 hover:bg-opacity-100"
                                    placeholder="Write your message here..."
                                    required
                                ></textarea>
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={state.submitting}
                                className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-orange-600 transition duration-300 ease-in-out"
                            >
                                Send Message
                            </motion.button>
                        </motion.form>
                    )}
                </div>
            </motion.div>
            <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
        </div>
    );
};

export default ContactForm;