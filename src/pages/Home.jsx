import { motion } from 'framer-motion';
import { ArrowRight, Download, Check, Copy, Palette, Code2, Terminal, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import TechStack from '../components/TechStack';
import avatar from '../assets/avatar.png';

const Home = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('lavanyaa2003@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="container mx-auto px-4 md:px-6 pt-6">
            {/* Main Hero Bento Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-panel p-6 md:p-14 bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] border border-black/5 relative overflow-hidden"
            >
                {/* Top Bar inside Card */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12 md:mb-16 text-xs md:text-sm font-medium text-slate-600">
                    <div className="flex items-center gap-3 flex-wrap justify-center">
                        <span className="text-black font-semibold">lavanyaa2003@gmail.com</span>
                        <button
                            onClick={handleCopy}
                            className="bg-gray-100 hover:bg-gray-200 text-black px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-colors shadow-sm"
                            title="Copy Email"
                        >
                            {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                            <span>{copied ? 'Copied!' : 'Copy'}</span>
                        </button>
                        <a
                            href="/resume.pdf"
                            download="Lavanyaa_Resume.pdf"
                            className="bg-gray-100 hover:bg-gray-200 text-black px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors shadow-sm font-semibold"
                        >
                            <span>CV</span>
                            <Download size={13} />
                        </a>
                    </div>

                    <div className="flex items-center gap-5">
                        <a href="https://www.linkedin.com/in/lavanyaa-selapan" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                            LinkedIn
                        </a>
                        <span className="text-gray-300">/</span>
                        <a href="https://github.com/Lavanyaa7s" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                            GitHub
                        </a>
                        <span className="text-gray-300">/</span>
                        <a href="mailto:lavanyaa2003@gmail.com" className="hover:text-black transition-colors">
                            Email
                        </a>
                    </div>
                </div>

                {/* Center Hero Content */}
                <div className="text-center max-w-4xl mx-auto my-6">
                    {/* Circular Avatar with Floating Badge */}
                    <div className="relative inline-block mb-8">
                        <img
                            src={avatar}
                            alt="Lavanyaa Selapan"
                            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-white shadow-lg mx-auto bg-gray-100"
                        />
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-3 -right-16 md:-right-20 bg-white border border-black/10 shadow-md px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 text-black whitespace-nowrap"
                        >
                            <span>Lavanyaa Selapan</span> 👋
                        </motion.div>
                    </div>

                    {/* Hero Headline */}
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#111111] leading-[1.1] tracking-tight mb-8">
                        Building digital experiences, software, and interfaces.
                    </h1>

                    <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                        Software Development & HCI Student at UTEM. Specializing in frontend architecture, intuitive user interfaces, and robust software engineering.
                    </p>

                    {/* CTA Button */}
                    <div className="flex justify-center mb-6">
                        <Link
                            to="/projects"
                            className="btn btn-primary text-sm md:text-base px-8 py-4 shadow-xl hover:shadow-2xl flex items-center gap-2 group"
                        >
                            <span>Latest Projects</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 sm:group-hover:-translate-y-0.5 sm:group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>

                    {/* Tech Stack Strip */}
                    <TechStack />
                </div>
            </motion.div>

            {/* Services / Expertise Bento Grid Section */}
            <div className="mt-20 mb-12 text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-[#111111] max-w-2xl mx-auto mb-4">
                    Combining technical software engineering with human-centered UI/UX design.
                </h2>
                <div className="inline-block bg-white border border-black/5 shadow-sm px-4 py-1.5 rounded-full text-xs font-semibold text-slate-500 mb-12">
                    Services & Expertise
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-left">
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass-panel p-8 hover:bg-white transition-all group"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-black/5 group-hover:bg-black group-hover:text-white transition-colors flex items-center justify-center mb-6 text-black">
                            <Palette size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#111111]">UI & UX Design</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Designing intuitive, user-friendly interfaces that prioritize human-computer interaction principles, accessibility, and seamless user journeys.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass-panel p-8 hover:bg-white transition-all group"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-black/5 group-hover:bg-black group-hover:text-white transition-colors flex items-center justify-center mb-6 text-black">
                            <Code2 size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#111111]">Web & Mobile Dev</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Transforming concepts into responsive, high-performance web applications and mobile apps using React, Tailwind CSS, Vite, and Java.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="glass-panel p-8 hover:bg-white transition-all group"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-black/5 group-hover:bg-black group-hover:text-white transition-colors flex items-center justify-center mb-6 text-black">
                            <Terminal size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#111111]">Software Engineering</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Building scalable architectures, database structures, and algorithmic logic with Python, C++, and SQL for reliable backend performance.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Home;
