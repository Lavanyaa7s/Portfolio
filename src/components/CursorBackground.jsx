import { useEffect } from 'react';
import { motion, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';

const CursorBackground = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation
    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Use useMotionTemplate to create a reactive gradient string
    const background = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(255, 255, 255, 0.65), transparent 70%)`;

    return (
        <motion.div
            className="fixed inset-0 z-0 pointer-events-none"
            style={{
                background,
            }}
        />
    );
};

export default CursorBackground;
