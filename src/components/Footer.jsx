import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="mt-auto py-8 text-center text-slate-400">
            <div className="container mx-auto px-6">
                <div className="flex justify-center gap-6 mb-4">
                    <a href="#" className="hover:text-primary transition-colors"><Github size={20} /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Mail size={20} /></a>
                </div>
                <p className="text-sm">© {new Date().getFullYear()} Lavanyaa. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
