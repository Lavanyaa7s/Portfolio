import { motion } from 'framer-motion';
import { Database, Layout, Smartphone, Code2, Terminal, Cpu } from 'lucide-react';

const TechStack = () => {
    const icons = [
        { icon: <Code2 size={30} />, label: 'React', delay: 0 },
        { icon: <Terminal size={30} />, label: 'Python', delay: 0.5 },
        { icon: <Database size={30} />, label: 'SQL', delay: 1.0 },
        { icon: <Layout size={30} />, label: 'UI/UX', delay: 0.2 },
        { icon: <Smartphone size={30} />, label: 'Mobile', delay: 0.7 },
        { icon: <Cpu size={30} />, label: 'System', delay: 1.2 },
    ];

    return (
        <div className="relative w-full max-w-lg mx-auto h-64 flex items-center justify-center">
            {/* Central glowing core */}
            <div className="absolute w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>

            <div className="relative w-full h-full">
                {icons.map((item, index) => (
                    <motion.div
                        key={index}
                        className="absolute p-4 glass-panel rounded-full text-white/80 hover:text-white hover:border-primary transition-colors cursor-pointer"
                        animate={{
                            y: [0, -15, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: item.delay,
                        }}
                        style={{
                            // Position items in a semi-random cloud or circle (simplified here for grid-like feel)
                            left: `${(index % 3) * 35 + 10}%`,
                            top: `${Math.floor(index / 3) * 40 + 10}%`,
                        }}
                    >
                        {item.icon}
                        <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
                            {item.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
