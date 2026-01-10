import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    // ... inside component ...
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const subject = "Portfolio Contact: " + name;
        const body = e.target.message.value;
        window.location.href = `mailto:b032410529@student.utem.edu.my?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-12 text-center">Get in <span className="text-gradient">Touch</span></h1>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass-panel p-8"
                >
                    <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary"><Mail /></div>
                            <div>
                                <p className="text-sm text-slate-400">Email</p>
                                <p className="text-white break-all">b032410529@student.utem.edu.my</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary"><Phone /></div>
                            <div>
                                <p className="text-sm text-slate-400">Phone</p>
                                <p className="text-white">0164022400</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary"><MapPin /></div>
                            <div>
                                <p className="text-sm text-slate-400">Location</p>
                                <p className="text-white">Melaka, Malaysia</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass-panel p-8"
                >
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-300">Name</label>
                            <input name="name" type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors" placeholder="Your Name" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-300">Email</label>
                            <input name="email" type="email" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors" placeholder="your@email.com" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-300">Message</label>
                            <textarea name="message" rows={4} className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors" placeholder="Hello..." required />
                        </div>
                        <button type="submit" className="w-full btn btn-primary mt-4">Send Message</button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
