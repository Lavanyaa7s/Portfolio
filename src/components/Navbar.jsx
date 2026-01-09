import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Academic Journey', path: '/journey' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Projects', path: '/projects' },
        { name: 'Skills', path: '/skills' },
        { name: 'Contact', path: '/contact' },
    ];

    const variants = {
        open: { opacity: 1, height: 'auto' },
        closed: { opacity: 0, height: 0 },
    };

    return (
        <nav className="fixed w-full z-50 top-0 left-0 px-6 py-4">
            <div className="container mx-auto glass-panel px-6 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold flex items-center gap-2 text-white hover:text-primary transition-colors">
                    <span className="bg-primary/20 p-2 rounded-lg border border-primary/50 text-primary">LS</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 items-center">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-slate-300'
                                    }`}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="underline"
                                        className="h-[2px] w-full bg-primary mt-1 rounded-full"
                                    />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                className="md:hidden overflow-hidden mt-2 glass-panel mx-auto container"
            >
                <ul className="flex flex-col gap-4 p-6">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block text-lg font-medium ${location.pathname === link.path ? 'text-primary' : 'text-slate-300'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </nav>
    );
};

export default Navbar;
