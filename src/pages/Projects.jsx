import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

import hciPortfolioImg from '../assets/projects/hci-portfolio.png';
import mobileAppImg from '../assets/projects/mobile-app.png';
import threeDAnimImg from '../assets/projects/3d-animation.png';

const Projects = () => {
    const projects = [
        { id: 1, title: 'HCI Portfolio Website', category: 'Web Dev', image: hciPortfolioImg },
        { id: 2, title: 'Mobile App Prototype', category: 'UI/UX', image: mobileAppImg },
        { id: 3, title: '3D Animation Project', category: 'Multimedia', image: threeDAnimImg },
    ];

    return (
        <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-12 text-center">My <span className="text-gradient">Projects</span></h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-panel overflow-hidden group hover:border-primary/50 transition-colors"
                    >
                        <div className="h-48 overflow-hidden relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Link to={`/project/${project.id}`} className="btn btn-primary text-sm">
                                    View Details
                                </Link>
                            </div>
                        </div>
                        <div className="p-6">
                            <span className="text-xs text-primary font-bold uppercase tracking-wider">{project.category}</span>
                            <div className="flex justify-between items-center mt-2">
                                <h3 className="text-xl font-bold">{project.title}</h3>
                                <Link to={`/project/${project.id}`} className="text-slate-400 hover:text-white">
                                    <ArrowUpRight />
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
