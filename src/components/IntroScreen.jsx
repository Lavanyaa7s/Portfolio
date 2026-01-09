import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const IntroScreen = ({ onComplete }) => {
    const [textVisible, setTextVisible] = useState(false);

    useEffect(() => {
        // Reveal text after a short delay
        const textTimer = setTimeout(() => {
            setTextVisible(true);
        }, 500);

        // Initial display duration before starting exit
        const exitTimer = setTimeout(() => {
            onComplete();
        }, 2500);

        return () => {
            clearTimeout(textTimer);
            clearTimeout(exitTimer);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#09090b] overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Main purple fluid blob */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600 rounded-full blur-[120px]"
                />

                {/* Secondary accent blob */}
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-fuchsia-600 rounded-full blur-[100px]"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 font-['Michroma'] text-4xl md:text-6xl tracking-wider text-white">
                <div className="flex items-center gap-4">
                    <motion.span
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        animate={{
                            opacity: textVisible ? 1 : 0,
                            y: textVisible ? 0 : 30,
                            filter: textVisible ? "blur(0px)" : "blur(10px)"
                        }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-white drop-shadow-2xl"
                    >
                        Lavanyaa
                    </motion.span>

                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: textVisible ? 1 : 0, scale: textVisible ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-500 text-4xl md:text-6xl"
                    >
                        /
                    </motion.span>

                    <motion.span
                        initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                        animate={{
                            opacity: textVisible ? 1 : 0,
                            y: textVisible ? 0 : -30,
                            filter: textVisible ? "blur(0px)" : "blur(10px)"
                        }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-white drop-shadow-2xl"
                    >
                        Selapan
                    </motion.span>
                </div>
            </div>

            {/* Texture overlay for authenticity */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
        </motion.div>
    );
};

export default IntroScreen;
