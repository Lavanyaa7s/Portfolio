import { motion } from 'framer-motion';
import { User, Heart, Zap, Coffee } from 'lucide-react';

const About = () => {
    const qualities = [
        { icon: <Zap />, title: 'Creative', desc: 'Thinking outside the box.' },
        { icon: <User />, title: 'User-Centric', desc: 'Designing for people first.' },
        { icon: <Heart />, title: 'Passionate', desc: 'Loving what I do everyday.' },
        { icon: <Coffee />, title: 'Detail Oriented', desc: 'Perfection in every pixel.' },
    ];

    return (
        <div className="container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold mb-8 text-center"><span className="text-gradient">About Me</span></h1>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="glass-panel p-8">
                        <h2 className="text-2xl font-semibold mb-4 text-white">Who I Am</h2>
                        <p className="text-slate-300 mb-4">
                            I am currently a <strong>Year 2</strong> student majoring in <strong>Software Development</strong>.
                        </p>
                        <p className="text-slate-300">
                            Based in Melaka, I enjoy working on web development, mobile apps, and digital prototyping.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {qualities.map((q, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                className="glass-panel p-6 text-center flex flex-col items-center gap-3"
                            >
                                <div className="text-primary">{q.icon}</div>
                                <h3 className="font-semibold">{q.title}</h3>
                                <p className="text-xs text-slate-400">{q.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
