import { motion } from 'framer-motion';
import { User, Heart, Zap, Coffee, Music, Camera, Film } from 'lucide-react';

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
                            I am currently a <strong>Year 3</strong> student majoring in <strong>Software Development</strong>.
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

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Hobbies Section */}
                    <div className="glass-panel p-8">
                        <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                            <Heart className="text-primary" size={24} /> Beyond Coding
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                <div className="p-2 bg-purple-500/20 rounded-full text-purple-400">
                                    <Music size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Music</h4>
                                    <p className="text-sm text-slate-400">Listening to playlists while coding.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                <div className="p-2 bg-pink-500/20 rounded-full text-pink-400">
                                    <Camera size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Photography</h4>
                                    <p className="text-sm text-slate-400">Capturing moments and aesthetic shots.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                <div className="p-2 bg-blue-500/20 rounded-full text-blue-400">
                                    <Film size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Movies</h4>
                                    <p className="text-sm text-slate-400">Enjoying cinematic storytelling.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Languages & Quote Section */}
                    <div className="space-y-8">
                        {/* Languages */}
                        <div className="glass-panel p-8">
                            <h2 className="text-2xl font-semibold mb-6 text-white text-center md:text-left">Languages</h2>
                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                {['English', 'Malay', 'Tamil'].map(lang => (
                                    <span key={lang} className="px-5 py-2 bg-slate-800 border border-slate-700 rounded-full text-slate-300">
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Quote */}
                        <div className="glass-panel p-8 relative overflow-hidden">
                            <div className="absolute top-2 left-4 text-6xl text-primary/10 font-serif">"</div>
                            <blockquote className="relative z-10 text-center italic text-slate-300 my-4 text-lg">
                                "The only way to do great work is to love what you do."
                            </blockquote>
                            <p className="text-center text-sm text-primary font-bold">— Steve Jobs</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
