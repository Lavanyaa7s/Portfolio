import { motion } from 'framer-motion';
import { Award, Trophy, Sparkles, ExternalLink, CheckCircle2 } from 'lucide-react';
import dtixCertImg from '../assets/Certs/dTIX COMPETITION.jpg';
import aiRoadshowCertImg from '../assets/Certs/The Campus AI Roadshow.jpg';
import deanListImg from '../assets/dean_list.jpeg';

const Certificates = () => {
    const certificates = [
        {
            id: 1,
            title: 'dTIX Competition',
            issuer: 'Digital Technology & Innovation Competition',
            date: '2024 / Achievement',
            category: 'Competition & Innovation',
            description: 'Certificate of recognition and achievement in the dTIX Competition, showcasing excellence in software development, innovation, and digital problem-solving.',
            image: dtixCertImg,
            icon: <Trophy size={24} className="text-amber-500" />
        },
        {
            id: 2,
            title: 'The Campus AI Roadshow',
            issuer: 'University AI Roadshow & Workshop',
            date: '2024 / Participation',
            category: 'AI & Software Tech',
            description: 'Certificate of participation and completion for The Campus AI Roadshow, exploring cutting-edge artificial intelligence tools, LLMs, and practical software applications.',
            image: aiRoadshowCertImg,
            icon: <Sparkles size={24} className="text-violet-600" />
        },
        {
            id: 3,
            title: "Dean's List Award",
            issuer: "Universiti Teknikal Malaysia Melaka (UTeM)",
            date: 'Academic Excellence',
            category: 'Honor & Distinction',
            description: "Awarded for exceptional semester performance and outstanding CGPA achievement in Computer Science (Software Development).",
            image: deanListImg,
            icon: <Award size={24} className="text-blue-600" />
        },
        {
            id: 4,
            title: 'Diploma in Information Technology',
            issuer: 'Politeknik Sultan Idris Shah, Sabak Bernam',
            date: '2021 - 2024',
            category: 'Academic Qualification',
            description: 'Successfully completed Diploma in Information Technology (Digital Technology) with High Distinction (CGPA: 3.81).',
            icon: <CheckCircle2 size={24} className="text-emerald-600" />
        }
    ];

    return (
        <div className="container mx-auto px-4 md:px-6 pt-8 pb-16">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-block bg-white border border-black/5 shadow-sm px-4 py-1.5 rounded-full text-xs font-semibold text-slate-500 mb-4">
                        Credentials & Achievements
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-bold text-[#111111] tracking-tight">
                        Certificates & Awards.
                    </h1>
                    <p className="text-slate-500 text-center mt-3 max-w-xl mx-auto text-sm md:text-base">
                        Official certificates, innovation competitions, academic distinctions, and verified qualifications.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-6 md:p-8 bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-black/5 rounded-3xl group"
                        >
                            <div>
                                {/* Top Badges */}
                                <div className="flex justify-between items-center mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                                        {cert.icon}
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 bg-gray-100 rounded-full text-slate-600 border border-black/5">
                                        {cert.category}
                                    </span>
                                </div>

                                {/* Preview / Image Area */}
                                {cert.image && (
                                    <a
                                        href={cert.image}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block h-52 sm:h-64 overflow-hidden rounded-2xl mb-6 bg-gray-100 relative border border-black/5 group/img shadow-inner"
                                    >
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white text-sm font-semibold backdrop-blur-[2px]">
                                            Click to view full certificate ↗
                                        </div>
                                    </a>
                                )}

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-[#111111] mb-2 leading-snug">{cert.title}</h3>
                                <p className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">{cert.issuer} • {cert.date}</p>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                                    {cert.description}
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="pt-4 border-t border-black/5 flex items-center gap-3">
                                {cert.image ? (
                                    <a
                                        href={cert.image}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full btn btn-primary py-3 text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow"
                                    >
                                        <span>View Certificate</span>
                                        <ExternalLink size={16} />
                                    </a>
                                ) : (
                                    <div className="w-full py-3 px-4 bg-gray-50 rounded-full text-center text-xs font-bold text-slate-400 border border-black/5">
                                        Verified Academic Qualification
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Certificates;
