import { motion } from 'framer-motion';
import { Database, Layout, Smartphone, Code2, Terminal, Cpu, Palette, Figma } from 'lucide-react';

const TechStack = () => {
    const techItems = [
        { icon: <Code2 size={20} />, label: 'React' },
        { icon: <Terminal size={20} />, label: 'Python' },
        { icon: <Layout size={20} />, label: 'Tailwind CSS' },
        { icon: <Palette size={20} />, label: 'UI/UX Design' },
        { icon: <Cpu size={20} />, label: 'C++' },
        { icon: <Database size={20} />, label: 'SQL / MySQL' },
        { icon: <Smartphone size={20} />, label: 'Mobile Dev' },
        { icon: <Figma size={20} />, label: 'Figma / Canva' },
    ];

    return (
        <div className="w-full pt-8 border-t border-black/5 mt-10">
            <p className="text-xs uppercase tracking-widest text-center text-slate-400 font-semibold mb-6">
                Technical Stack & Tools
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                {techItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08, duration: 0.4 }}
                        className="flex items-center gap-2 text-slate-600 hover:text-black font-semibold text-sm md:text-base py-2 px-3 rounded-xl hover:bg-black/5 transition-all cursor-pointer group"
                    >
                        <span className="text-slate-400 group-hover:text-black transition-colors">
                            {item.icon}
                        </span>
                        <span>{item.label}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
