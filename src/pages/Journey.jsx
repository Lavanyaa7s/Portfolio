import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Briefcase } from 'lucide-react';

const Journey = () => {
    const history = [
        {
            type: 'education',
            institution: 'Universiti Teknikal Malaysia Melaka (UTeM)',
            degree: 'Bachelor of Computer Science (Software Development)',
            year: '2024 - Present',
            desc: 'Currently in Year 2. Majoring in Software Development.'
        },
        {
            type: 'work',
            institution: 'Integro Technologies',
            degree: 'Business Analyst Intern',
            year: '21 Aug 2023 - 5 Jan 2024',
            desc: 'Completed internship as a Business Analyst.'
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
        <div className="container mx-auto px-6 py-10">
            <h1 className="text-4xl font-bold mb-12 text-center">My <span className="text-gradient">Journey</span></h1>

            <div className="max-w-3xl mx-auto relative border-l-2 border-slate-700 pl-8 space-y-12">
                {history.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="glass-panel p-6 relative"
                    >
                        <div className={`absolute -left-[41px] top-6 p-2 rounded-full border-4 border-slate-900 ${item.type === 'work' ? 'bg-secondary' : 'bg-primary'}`}>
                            {item.type === 'work' ? (
                                <Briefcase size={20} className="text-white" />
                            ) : (
                                <GraduationCap size={20} className="text-white" />
                            )}
                        </div>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                            <h2 className="text-xl font-bold text-white">{item.institution}</h2>
                            <span className={`inline-flex items-center text-xs md:text-sm px-3 py-1 rounded-full border ${item.type === 'work' ? 'text-secondary bg-secondary/10 border-secondary/20' : 'text-primary bg-primary/10 border-primary/20'}`}>
                                <Calendar size={14} className="mr-2" /> {item.year}
                            </span>
                        </div>
                        <h3 className="text-lg text-slate-300 font-medium mb-2">{item.degree}</h3>
                        <p className="text-slate-400">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Journey;
