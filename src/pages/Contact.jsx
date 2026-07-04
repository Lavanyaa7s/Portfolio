import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const subject = "Portfolio Contact: " + name;
        const body = e.target.message.value;
        window.location.href = `mailto:lavanyaa2003@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="container mx-auto px-4 md:px-6 pt-8 pb-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="inline-block bg-white border border-black/5 shadow-sm px-4 py-1.5 rounded-full text-xs font-semibold text-slate-500 mb-4">
                    Connect & Collaborate
                </div>
                <h1 className="text-3xl sm:text-5xl font-bold text-[#111111] tracking-tight">
                    Get in Touch.
                </h1>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass-panel p-8 md:p-10 bg-white shadow-sm flex flex-col justify-between"
                >
                    <div>
                        <h2 className="text-2xl font-bold mb-3 text-[#111111]">Contact Information</h2>
                        <p className="text-slate-500 text-sm md:text-base mb-8 leading-relaxed">
                            Feel free to reach out for software development collaborations, UI/UX design projects, or academic networking!
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-black/5">
                            <div className="p-3.5 bg-white shadow-sm rounded-xl text-[#111111]"><Mail size={20} /></div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</p>
                                <p className="text-[#111111] font-bold text-sm md:text-base break-all">lavanyaa2003@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-black/5">
                            <div className="p-3.5 bg-white shadow-sm rounded-xl text-[#111111]"><Phone size={20} /></div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone</p>
                                <p className="text-[#111111] font-bold text-sm md:text-base">0164022400</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-black/5">
                            <div className="p-3.5 bg-white shadow-sm rounded-xl text-[#111111]"><MapPin size={20} /></div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Location</p>
                                <p className="text-[#111111] font-bold text-sm md:text-base">Melaka, Malaysia</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass-panel p-8 md:p-10 bg-white shadow-sm"
                >
                    <h2 className="text-2xl font-bold mb-6 text-[#111111]">Send a Message</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-600">Your Name</label>
                            <input name="name" type="text" className="w-full bg-gray-50 border border-black/10 rounded-2xl p-3.5 text-[#111111] focus:border-black focus:bg-white outline-none transition-all shadow-sm font-medium text-sm" placeholder="John Doe" required />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-600">Your Email</label>
                            <input name="email" type="email" className="w-full bg-gray-50 border border-black/10 rounded-2xl p-3.5 text-[#111111] focus:border-black focus:bg-white outline-none transition-all shadow-sm font-medium text-sm" placeholder="john@example.com" required />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-600">Message</label>
                            <textarea name="message" rows={4} className="w-full bg-gray-50 border border-black/10 rounded-2xl p-3.5 text-[#111111] focus:border-black focus:bg-white outline-none transition-all shadow-sm font-medium text-sm" placeholder="Hello Lavanyaa..." required />
                        </div>
                        <button type="submit" className="w-full btn btn-primary py-4 text-base shadow-lg mt-4 flex items-center justify-center gap-2">
                            <span>Send Message</span>
                            <Send size={16} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
