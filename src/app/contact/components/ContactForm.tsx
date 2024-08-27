// "use client"
// import React, { useState, useCallback, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { useForm, ValidationError } from '@formspree/react';
// import ReactCanvasConfetti from 'react-canvas-confetti';

// type ConfettiConfig = {
//     spread: number;
//     startVelocity?: number;
//     decay?: number;
//     scalar?: number;
// };

// const canvasStyles: React.CSSProperties = {
//     position: 'fixed',
//     pointerEvents: 'none',
//     width: '100%',
//     height: '100%',
//     top: 0,
//     left: 0
// };

// const ContactForm: React.FC = () => {
//     const [state, handleSubmit] = useForm("xblrkgwy");
//     const [isConfettiActive, setIsConfettiActive] = useState<boolean>(false);
//     const confettiRef = useRef<ReturnType<typeof ReactCanvasConfetti> | null>(null);

//     const getInstance = useCallback((instance: ReturnType<typeof ReactCanvasConfetti> | null) => {
//         confettiRef.current = instance;
//     }, []);

//     const onSubmitSuccess = () => {
//         setIsConfettiActive(true);
//         setTimeout(() => setIsConfettiActive(false), 5000); // Stop confetti after 5 seconds
//     };

//     // const makeShot = useCallback((particleRatio: number, opts: ConfettiConfig) => {
//     //     confettiRef.current?.({
//     //         ...opts,
//     //         origin: { y: 0.7 },
//     //         particleCount: Math.floor(200 * particleRatio),
//     //     });
//     // }, []);

//     // const fire = useCallback(() => {
//     //     makeShot(0.25, {
//     //         spread: 26,
//     //         startVelocity: 55,
//     //     });

//     //     makeShot(0.2, {
//     //         spread: 60,
//     //     });

//     //     makeShot(0.35, {
//     //         spread: 100,
//     //         decay: 0.91,
//     //         scalar: 0.8,
//     //     });

//     //     makeShot(0.1, {
//     //         spread: 120,
//     //         startVelocity: 25,
//     //         decay: 0.92,
//     //         scalar: 1.2,
//     //     });

//     //     makeShot(0.1, {
//     //         spread: 120,
//     //         startVelocity: 45,
//     //     });
//     // }, [makeShot]);

//     // React.useEffect(() => {
//     //     if (isConfettiActive) {
//     //         fire();
//     //     }
//     // }, [isConfettiActive, fire]);

//     const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         await handleSubmit(e);
//         if (state.succeeded) {
//             onSubmitSuccess();
//         }
//     };

//     return (
//         <div className="min-h-[10vh] bg-gradient-to-br from-orange-100 via-orange-50 to-white flex items-center justify-center my-36">
//             <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="bg-white rounded-xl overflow-hidden sm:max-w-5xl w-full"
//             >
//                 {/* ... rest of the component remains unchanged ... */}
//             </motion.div>
//             {/* <ReactCanvasConfetti getInstance={getInstance} /> */}
//         </div>
//     );
// };

// export default ContactForm;
"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import confetti from 'canvas-confetti';

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function ContactForm(): JSX.Element {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://formspree.io/f/xblrkgwy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('Form submission failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }

        setIsSubmitting(false);
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="sm:w-[60rem] w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-3/5 p-8 order-1 md:order-2">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Get in Touch</h2>
                        <p className="text-gray-600 mb-6">Feel free to drop us a line below!</p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full p-2 border text-black border-gray-300 rounded bg-gray-100"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="w-full p-2 text-black border border-gray-300 rounded bg-gray-100"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Typing your message here....."
                                    className="w-full p-2 border text-black border-gray-300 rounded bg-gray-100 h-32"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-[#ff4c19] text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors w-full md:w-auto"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'SEND'}
                            </button>
                        </form>
                    </div>
                    <div className="sm:w-full md:w-2/5 bg-[#ff4c19] text-white p-8 order-2 md:order-1">
                        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                        <div className="space-y-4">
                            <p className="flex items-start">
                                <span className="mr-2 mt-1">📍</span>
                                <span>Kampala<br />Makerere Kikoni</span>
                            </p>
                            <p className="flex items-center">
                                <span className="mr-2">✉️</span>info@coteug.com
                            </p>
                            <p className="flex items-center">
                                <span className="mr-2">📞</span> +256 750482089
                            </p>
                            <p className="flex items-center">
                                <span className="mr-2">🖨️</span> +256 778743490
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}