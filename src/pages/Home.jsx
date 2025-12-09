import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TechStack from '../components/TechStack';
// Import user avatar
import avatar from '../assets/avatar.png';

const Typewriter = ({ text }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let i = 0;
        setDisplayText('');
        const timer = setInterval(() => {
            if (i <= text.length) {
                setDisplayText(text.substring(0, i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 100);
        return () => clearInterval(timer);
    }, [text]);

    return <span>{displayText}</span>;
}

const Home = () => {
    return (
        <div className="container mx-auto px-6 pt-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 min-h-[80vh]">

                {/* Left Content */}
                <motion.div
                    className="md:w-1/2 text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1 mb-4 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                        Hello! I Am <span className="text-white">Lavanyaa Selapan</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        I'm a <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            <Typewriter text="Software Student." />
                        </span>
                    </h1>

                    <p className="text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
                        A creative technologist specializing in <span className="text-white">HCI</span> and building high-fidelity digital experiences.
                        Merging design with code to shape the future.
                    </p>

                    <div className="flex gap-4 flex-wrap">
                        <Link to="/projects" className="btn btn-primary group">
                            View Work <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </Link>
                        <a href="/resume.pdf" download="Lavanyaa_Resume.pdf" className="btn btn-outline group">
                            Resume <Download className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
                        </a>
                    </div>
                </motion.div>

                {/* Right Content - Avatar & Tech Stack */}
                <motion.div
                    className="md:w-1/2 flex flex-col items-center justify-center relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Glowing Avatar Placeholder */}
                    <div className="relative w-64 h-64 md:w-80 md:h-80 mb-12">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-[50px] opacity-40 animate-pulse"></div>
                        <div className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden bg-slate-900 glass-panel flex items-center justify-center">
                            <img
                                src={avatar}
                                alt="Profile"
                                className="w-full h-full object-cover opacity-100 hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute bottom-4 -right-4 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl flex items-center gap-3 animate-float">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-sm font-bold">Open to Work</span>
                        </div>
                    </div>

                    {/* Orbiting Tech Stack */}
                    <TechStack />

                </motion.div>

            </div>
        </div>
    );
};

export default Home;
