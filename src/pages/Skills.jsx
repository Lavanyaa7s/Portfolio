import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: [
                { name: 'C', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
                { name: 'C++', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
                { name: 'Java', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
                { name: 'Python', level: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            ]
        },
        {
            title: "Web Development",
            skills: [
                { name: 'HTML', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                { name: 'CSS', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                { name: 'Tailwind', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
                { name: 'JavaScript', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                { name: 'React', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'PHP', level: 65, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
            ]
        },
        {
            title: "Tools & Database",
            skills: [
                { name: 'MySQL', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                { name: 'Git', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                { name: 'GitHub', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
                { name: 'VS Code', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
            ]
        },
        {
            title: "Design & Multimedia",
            skills: [
                { name: 'Canva', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
                { name: 'Photoshop', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <div className="container mx-auto px-6 pt-10 pb-20">
            <motion.h1
                className="text-3xl md:text-4xl font-bold mb-10 md:mb-16 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                My <span className="text-gradient">Skills</span>
            </motion.h1>

            <div className="space-y-12 md:space-y-16">
                {skillCategories.map((category, catIndex) => (
                    <div key={category.title}>
                        <motion.h2
                            className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-white flex items-center gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="w-6 h-1 md:w-8 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
                            {category.title}
                        </motion.h2>

                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {category.skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    variants={itemVariants}
                                    className="glass-panel p-4 md:p-6 flex flex-col items-center justify-between hover:border-primary/50 transition-colors group relative overflow-hidden"
                                >
                                    <div className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 p-2 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                                        <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                                    </div>

                                    <h3 className="font-medium text-sm md:text-base text-white mb-2 md:mb-3 text-center">{skill.name}</h3>

                                    {/* Progress Bar Container */}
                                    <div className="w-full bg-slate-800 rounded-full h-1.5 md:h-2 overflow-hidden mt-auto">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-primary to-secondary"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                                        />
                                    </div>

                                    <span className="text-[10px] md:text-xs text-slate-400 mt-2">{skill.level}%</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>

            <motion.h2
                className="text-3xl font-bold mt-24 mb-10 text-center text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                Soft <span className="text-secondary">Skills</span>
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
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
