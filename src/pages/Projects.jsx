import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

import hciPortfolioImg from '../assets/projects/hci-portfolio.png';
import mobileAppImg from '../assets/projects/mobile-app.png';
import tourismImg from '../assets/projects/tour cover.png';
import fingerprintImg from '../assets/projects/fingerprint.png';
import neptuneGymImg from '../assets/projects/Neptune Gym.jpg';
import campusConnectImg from '../assets/projects/CampusConnect.jpg';

const Projects = () => {
    const projects = [
        { id: 1, title: 'HCI Portfolio Website', category: 'Web Dev', image: hciPortfolioImg },
        { id: 2, title: 'Event Booking System', category: 'Mobile Dev', image: mobileAppImg },
        { id: 3, title: 'TripTastic Travel Package System', category: 'Software Development', image: tourismImg },
        { id: 4, title: 'SecureSwipe (Fingerprint Attendance)', category: 'Web Dev', image: fingerprintImg },
        { id: 5, title: 'Neptune Endless Gym', category: 'Web Dev', image: neptuneGymImg },
        { id: 6, title: 'CampusConnect', category: 'Web Dev', image: campusConnectImg },
    ];

    return (
        <div className="container mx-auto px-4 md:px-6 pt-8 pb-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="inline-block bg-white border border-black/5 shadow-sm px-4 py-1.5 rounded-full text-xs font-semibold text-slate-500 mb-4">
                    Portfolio Gallery
                </div>
                <h1 className="text-3xl sm:text-5xl font-bold text-[#111111] tracking-tight">
                    Featured Work & Projects.
                </h1>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-panel overflow-hidden group hover:bg-white transition-all flex flex-col justify-between"
                    >
                        <div className="h-56 overflow-hidden relative m-3 rounded-2xl bg-gray-100">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                                <Link to={`/project/${project.id}`} className="btn btn-outline bg-white text-black font-semibold text-sm px-6 py-2.5 shadow-lg border-none hover:bg-gray-100">
                                    View Details ↗
                                </Link>
                            </div>
                        </div>
                        <div className="p-6 pt-3">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{project.category}</span>
                            <div className="flex justify-between items-center mt-2 gap-4">
                                <h3 className="text-xl font-bold text-[#111111] group-hover:text-black transition-colors leading-snug">{project.title}</h3>
                                <Link to={`/project/${project.id}`} className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-[#111111] group-hover:text-white flex items-center justify-center text-black transition-all shrink-0 shadow-sm" aria-label={`View details for ${project.title}`}>
                                    <ArrowUpRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
