import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Journey', path: '/journey' },
        { name: 'Projects', path: '/projects' },
        { name: 'Skills', path: '/skills' },
        { name: 'Certificates', path: '/certificates' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    const variants = {
        open: { opacity: 1, height: 'auto', marginTop: '12px' },
        closed: { opacity: 0, height: 0, marginTop: '0px' },
    };

    return (
        <nav className="fixed w-full z-50 top-4 left-0 px-4 md:px-6">
            <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] px-5 py-2.5 rounded-full flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-xl font-bold flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <span className="bg-[#111111] text-white px-3 py-1 rounded-full font-bold text-xs tracking-wider">LS</span>
                    <span className="font-bold text-sm text-[#111111] hidden sm:inline">Lavanyaa</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-0.5 lg:gap-1 items-center">
                    {links.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className={`text-xs lg:text-sm font-medium transition-colors px-2.5 lg:px-4 py-1.5 rounded-full relative block ${
                                        isActive ? 'text-white' : 'text-slate-600 hover:text-black'
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-[#111111] rounded-full"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-[#111111] p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border border-black/5 shadow-lg rounded-3xl max-w-5xl mx-auto"
            >
                <ul className="flex flex-col gap-2 p-5">
                    {links.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block text-base font-medium px-4 py-2.5 rounded-2xl transition-colors ${
                                        isActive ? 'bg-[#111111] text-white font-semibold' : 'text-slate-600 hover:bg-gray-100 hover:text-black'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </motion.div>
        </nav>
    );
};

export default Navbar;
