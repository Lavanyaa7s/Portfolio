import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Briefcase } from 'lucide-react';

const Journey = () => {
    const history = [
        {
            type: 'education',
            institution: 'Universiti Teknikal Malaysia Melaka (UTeM)',
            degree: 'Bachelor of Computer Science (Software Development)',
            year: '2024 - Present',
            desc: 'Currently in Year 3. Majoring in Software Development.'
        },
        {
            type: 'education',
            institution: 'Politeknik Sultan Idris Shah, Sabak Bernam',
            degree: 'Diploma in Information Technology (Digital Technology)',
            year: '2021 - 2024',
            desc: 'CGPA: 3.81'
        },
        {
            type: 'education',
            institution: 'Sekolah Menengah Kebangsaan Paya Rumput, Melaka',
            degree: 'Sijil Pelajaran Malaysia (SPM)',
            year: '2015 - 2019',
            desc: 'Result: 2 A-, 3 B+, 2 B, 2 D'
        }
    ];

    return (
        <div className="container mx-auto px-4 md:px-6 pt-8 pb-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="inline-block bg-white border border-black/5 shadow-sm px-4 py-1.5 rounded-full text-xs font-semibold text-slate-500 mb-4">
                    Education & Experience
                </div>
                <h1 className="text-3xl sm:text-5xl font-bold text-[#111111] tracking-tight">
                    Academic Journey.
                </h1>
            </div>

            <div className="max-w-3xl relative border-l-2 border-black/10 pl-8 space-y-10 ml-4 md:mx-auto">
                {history.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 }}
                        className="glass-panel p-8 bg-white shadow-sm hover:shadow transition-all relative group"
                    >
                        <div className="absolute -left-[41px] top-8 p-2 rounded-full border-4 border-[#ebebeb] bg-[#111111] group-hover:scale-110 transition-transform">
                            {item.type === 'work' ? (
                                <Briefcase size={18} className="text-white" />
                            ) : (
                                <GraduationCap size={18} className="text-white" />
                            )}
                        </div>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
                            <h2 className="text-xl font-bold text-[#111111] leading-snug">{item.institution}</h2>
                            <span className="inline-flex items-center text-xs font-bold px-3.5 py-1.5 rounded-full bg-gray-100 border border-black/5 text-[#111111] shrink-0">
                                <Calendar size={13} className="mr-1.5" /> {item.year}
                            </span>
                        </div>
                        <h3 className="text-base text-slate-700 font-bold mb-2">{item.degree}</h3>
                        <p className="text-sm font-medium text-slate-500">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Journey;
