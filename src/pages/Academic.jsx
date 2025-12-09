import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Academic = () => {
    const history = [
        {
            institution: 'Universiti Teknikal Malaysia Melaka (UTeM)',
            degree: 'Bachelor of Computer Science (Software Development)',
            year: '2024 - Present',
            desc: 'Currently in Year 2. Majoring in Software Development.'
        },
        {
            institution: 'Politeknik Sultan Idris Shah, Sabak Bernam',
            degree: 'Diploma in Information Technology (Digital Technology)',
            year: '2021 - 2024',
            desc: 'CGPA: 3.81'
        },
        {
            institution: 'Sekolah Menengah Kebangsaan Paya Rumput, Melaka',
            degree: 'Sijil Pelajaran Malaysia (SPM)',
            year: '2015 - 2019',
            desc: 'Result: 2 A-, 3 B+, 2 B, 2 D'
        }
    ];

    return (
        <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-12 text-center">Academic <span className="text-gradient">History</span></h1>

            <div className="max-w-3xl mx-auto relative border-l-2 border-slate-700 pl-8 space-y-12">
                {history.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="glass-panel p-6 relative"
                    >
                        <div className="absolute -left-[41px] top-6 bg-primary p-2 rounded-full border-4 border-slate-900">
                            <GraduationCap size={20} className="text-white" />
                        </div>
                        <div className="flex justify-between items-start mb-2">
                            <h2 className="text-xl font-bold text-white">{item.institution}</h2>
                            <span className="flex items-center text-sm text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
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

export default Academic;
