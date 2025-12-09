import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { name: 'HTML', level: 100 },
        { name: 'CSS / Tailwind', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'C++', level: 75 },
        { name: 'Python', level: 70 },
        { name: 'Canva', level: 95 },
        { name: 'Photoshop', level: 85 },
    ];

    return (
        <div className="container mx-auto px-6 pt-10">
            <motion.h1
                className="text-4xl font-bold mb-12 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                My <span className="text-gradient">Skills</span>
            </motion.h1>

            <div className="max-w-3xl mx-auto glass-panel p-8 md:p-12">
                <div className="grid gap-8">
                    {skills.map((skill, index) => (
                        <div key={skill.name}>
                            <div className="flex justify-between mb-2">
                                <span className="text-white font-medium">{skill.name}</span>
                                <span className="text-primary font-bold">{skill.level}%</span>
                            </div>
                            <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-primary to-secondary"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <motion.h2
                className="text-3xl font-bold mt-16 mb-8 text-center text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                Soft <span className="text-secondary">Skills</span>
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pb-12">
                {[
                    { name: 'Teamwork', desc: 'Collaborative & Supportive' },
                    { name: 'Problem Solving', desc: 'Analytical Thinking' },
                    { name: 'Communication', desc: 'Clear & Effective' },
                    { name: 'Time Management', desc: 'Organized & Punctual' }
                ].map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        className="glass-panel p-6 text-center hover:border-accent transition-colors cursor-default"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                    >
                        <h3 className="font-bold text-lg text-primary mb-2">{skill.name}</h3>
                        <p className="text-xs text-slate-400">{skill.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
