import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const IntroScreen = ({ onComplete }) => {
    const [textVisible, setTextVisible] = useState(false);

    useEffect(() => {
        const textTimer = setTimeout(() => {
            setTextVisible(true);
        }, 400);

        const exitTimer = setTimeout(() => {
            onComplete();
        }, 2200);

        return () => {
            clearTimeout(textTimer);
            clearTimeout(exitTimer);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#ebebeb] overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40, transition: { duration: 0.7, ease: "easeInOut" } }}
        >
            {/* Soft Ambient Light Background */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.6, 0.9, 0.6],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full blur-[100px]"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 font-sans text-3xl md:text-6xl font-bold tracking-tight text-[#111111]">
                <div className="flex items-center gap-3 md:gap-4">
                    <motion.span
                        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                        animate={{
                            opacity: textVisible ? 1 : 0,
                            y: textVisible ? 0 : 20,
                            filter: textVisible ? "blur(0px)" : "blur(8px)"
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-[#111111]"
                    >
                        Lavanyaa
                    </motion.span>

                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: textVisible ? 1 : 0, scale: textVisible ? 1 : 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="text-slate-400 font-light"
                    >
                        /
                    </motion.span>

                    <motion.span
                        initial={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                        animate={{
                            opacity: textVisible ? 1 : 0,
                            y: textVisible ? 0 : -20,
                            filter: textVisible ? "blur(0px)" : "blur(8px)"
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-[#111111]"
                    >
                        Selapan
                    </motion.span>
                </div>
            </div>
        </motion.div>
    );
};

export default IntroScreen;
