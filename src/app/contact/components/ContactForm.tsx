"use client"
import React, { useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import ReactCanvasConfetti from 'react-canvas-confetti';

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
    const confettiRef = useRef<ReturnType<typeof ReactCanvasConfetti> | null>(null);

    const getInstance = useCallback((instance: ReturnType<typeof ReactCanvasConfetti> | null) => {
        confettiRef.current = instance;
    }, []);

    const onSubmitSuccess = () => {
        setIsConfettiActive(true);
        setTimeout(() => setIsConfettiActive(false), 5000); // Stop confetti after 5 seconds
    };

    // const makeShot = useCallback((particleRatio: number, opts: ConfettiConfig) => {
    //     confettiRef.current?.({
    //         ...opts,
    //         origin: { y: 0.7 },
    //         particleCount: Math.floor(200 * particleRatio),
    //     });
    // }, []);

    // const fire = useCallback(() => {
    //     makeShot(0.25, {
    //         spread: 26,
    //         startVelocity: 55,
    //     });

    //     makeShot(0.2, {
    //         spread: 60,
    //     });

    //     makeShot(0.35, {
    //         spread: 100,
    //         decay: 0.91,
    //         scalar: 0.8,
    //     });

    //     makeShot(0.1, {
    //         spread: 120,
    //         startVelocity: 25,
    //         decay: 0.92,
    //         scalar: 1.2,
    //     });

    //     makeShot(0.1, {
    //         spread: 120,
    //         startVelocity: 45,
    //     });
    // }, [makeShot]);

    // React.useEffect(() => {
    //     if (isConfettiActive) {
    //         fire();
    //     }
    // }, [isConfettiActive, fire]);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        await handleSubmit(e);
        if (state.succeeded) {
            onSubmitSuccess();
        }
    };

    return (
        <div className="min-h-[10vh] bg-gradient-to-br from-orange-100 via-orange-50 to-white flex items-center justify-center my-36">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden sm:max-w-5xl w-full"
            >
                {/* ... rest of the component remains unchanged ... */}
            </motion.div>
            {/* <ReactCanvasConfetti getInstance={getInstance} /> */}
        </div>
    );
};

export default ContactForm;