import { motion } from 'framer-motion';
import { Award, FileText, ExternalLink, Download, CheckCircle2 } from 'lucide-react';
import certPdf from '../assets/Certs/LAVANYAA AP SELAPAN.pdf';
import deanListImg from '../assets/dean_list.jpeg';

const Certificates = () => {
    const certificates = [
        {
            id: 1,
            title: 'Official Certification & Credentials',
            issuer: 'Professional & Academic Credentials',
            date: 'Verified Document',
            category: 'Official Certificate',
            description: 'Official certification document for Lavanyaa Selapan, verifying professional qualifications and academic standing.',
            file: certPdf,
            isPdf: true,
            icon: <FileText size={24} className="text-blue-600" />
        },
        {
            id: 2,
            title: "Dean's List Award",
            issuer: "Universiti Teknikal Malaysia Melaka (UTeM)",
            date: 'Academic Excellence',
            category: 'Honor & Achievement',
            description: "Awarded for exceptional semester performance and outstanding CGPA achievement in Computer Science (Software Development).",
            image: deanListImg,
            isPdf: false,
            icon: <Award size={24} className="text-amber-500" />
        },
        {
            id: 3,
            title: 'Diploma in Information Technology',
            issuer: 'Politeknik Sultan Idris Shah, Sabak Bernam',
            date: '2021 - 2024',
            category: 'Academic Qualification',
            description: 'Successfully completed Diploma in Information Technology (Digital Technology) with High Distinction (CGPA: 3.81).',
            isPdf: false,
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
                        Official documents, academic distinctions, and verified qualifications.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-gray-100 rounded-full text-slate-500 border border-black/5">
                                        {cert.category}
                                    </span>
                                </div>

                                {/* Preview / Image Area */}
                                {cert.image && (
                                    <div className="h-44 overflow-hidden rounded-2xl mb-6 bg-gray-100 relative border border-black/5">
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                )}

                                {cert.isPdf && (
                                    <div className="h-44 rounded-2xl mb-6 bg-gradient-to-br from-gray-50 to-gray-100 border border-black/5 flex flex-col items-center justify-center p-4 text-center group-hover:bg-gray-100 transition-colors">
                                        <FileText size={40} className="text-slate-400 mb-2 group-hover:scale-110 transition-transform" />
                                        <span className="text-sm font-bold text-[#111111]">{cert.title}.pdf</span>
                                        <span className="text-xs text-slate-400 mt-1">Click below to view or download</span>
                                    </div>
                                )}

                                {/* Content */}
                                <h3 className="text-xl font-bold text-[#111111] mb-2 leading-snug">{cert.title}</h3>
                                <p className="text-xs font-bold text-slate-400 mb-3">{cert.issuer} • {cert.date}</p>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                    {cert.description}
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="pt-4 border-t border-black/5 flex items-center gap-3">
                                {cert.file ? (
                                    <a
                                        href={cert.file}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full btn btn-primary py-3 text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow"
                                    >
                                        <span>View Certificate</span>
                                        <ExternalLink size={16} />
                                    </a>
                                ) : (
                                    <div className="w-full py-2.5 px-4 bg-gray-50 rounded-xl text-center text-xs font-bold text-slate-400 border border-black/5">
                                        Verified Record
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
