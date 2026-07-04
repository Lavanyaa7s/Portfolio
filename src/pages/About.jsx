import { motion } from 'framer-motion';
import { User, Heart, Zap, Coffee, Music, Camera, Film } from 'lucide-react';

const About = () => {
    const qualities = [
        { icon: <Zap size={22} />, title: 'Creative', desc: 'Thinking outside the box.' },
        { icon: <User size={22} />, title: 'User-Centric', desc: 'Designing for people first.' },
        { icon: <Heart size={22} />, title: 'Passionate', desc: 'Loving what I do everyday.' },
        { icon: <Coffee size={22} />, title: 'Detail Oriented', desc: 'Perfection in every pixel.' },
    ];

    return (
        <div className="container mx-auto px-4 md:px-6 pt-8 pb-16">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-block bg-white border border-black/5 shadow-sm px-4 py-1.5 rounded-full text-xs font-semibold text-slate-500 mb-4">
                        Personal Profile
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-bold text-[#111111] tracking-tight">
                        About Lavanyaa.
                    </h1>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-stretch mb-12">
                    <div className="glass-panel p-8 md:p-10 bg-white flex flex-col justify-center shadow-sm">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#111111]">Who I Am</h2>
                        <p className="text-slate-600 mb-4 text-base md:text-lg leading-relaxed">
                            I am currently a <strong>Year 3</strong> student majoring in <strong>Software Development</strong> at UTEM.
                        </p>
                        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                            Based in Melaka, Malaysia, I enjoy bridging the gap between rigorous engineering architecture and human-centered design. I build full-stack web applications, mobile platforms, and intuitive digital interfaces.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:gap-5">
                        {qualities.map((q, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -4 }}
                                className="glass-panel p-6 bg-white text-center flex flex-col items-center justify-center gap-2.5 shadow-sm hover:shadow"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-[#111111] mb-1">
                                    {q.icon}
                                </div>
                                <h3 className="font-bold text-base text-[#111111]">{q.title}</h3>
                                <p className="text-xs font-medium text-slate-500">{q.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                    {/* Hobbies Section */}
                    <div className="glass-panel p-8 md:p-10 bg-white shadow-sm">
                        <h2 className="text-2xl font-bold mb-6 text-[#111111] flex items-center gap-2.5">
                            <Heart className="text-[#111111]" size={24} /> Beyond Coding
                        </h2>
                        <div className="space-y-3.5">
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-black/5 transition-colors">
                                <div className="p-3 bg-white shadow-sm rounded-xl text-[#111111]">
                                    <Music size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#111111]">Music</h4>
                                    <p className="text-xs md:text-sm font-medium text-slate-500">Listening to playlists while coding.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-black/5 transition-colors">
                                <div className="p-3 bg-white shadow-sm rounded-xl text-[#111111]">
                                    <Camera size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#111111]">Photography</h4>
                                    <p className="text-xs md:text-sm font-medium text-slate-500">Capturing moments and aesthetic shots.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-black/5 transition-colors">
                                <div className="p-3 bg-white shadow-sm rounded-xl text-[#111111]">
                                    <Film size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#111111]">Movies</h4>
                                    <p className="text-xs md:text-sm font-medium text-slate-500">Enjoying cinematic storytelling.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Languages & Quote Section */}
                    <div className="space-y-8 md:space-y-10 flex flex-col justify-between">
                        {/* Languages */}
                        <div className="glass-panel p-8 md:p-10 bg-white shadow-sm">
                            <h2 className="text-2xl font-bold mb-6 text-[#111111] text-center md:text-left">Spoken Languages</h2>
                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                {['English', 'Malay', 'Tamil'].map(lang => (
                                    <span key={lang} className="px-6 py-3 bg-gray-100 border border-black/5 rounded-full text-[#111111] font-semibold text-sm hover:bg-[#111111] hover:text-white transition-colors cursor-default">
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Quote */}
                        <div className="glass-panel p-8 md:p-10 bg-white shadow-sm relative overflow-hidden flex-grow flex flex-col justify-center">
                            <div className="absolute top-2 left-6 text-7xl text-black/5 font-serif select-none">“</div>
                            <blockquote className="relative z-10 text-center font-medium text-slate-700 my-4 text-lg md:text-xl leading-relaxed">
                                "The only way to do great work is to love what you do."
                            </blockquote>
                            <p className="text-center text-sm text-[#111111] font-bold uppercase tracking-wider mt-2">— Steve Jobs</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
