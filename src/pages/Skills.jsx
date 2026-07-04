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
                { name: 'Tailwind CSS', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
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
            transition: { staggerChildren: 0.08 }
        }
    };

    const itemVariants = {
        hidden: { y: 15, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="container mx-auto px-4 md:px-6 pt-8 pb-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="inline-block bg-white border border-black/5 shadow-sm px-4 py-1.5 rounded-full text-xs font-semibold text-slate-500 mb-4">
                    Capabilities & Toolkit
                </div>
                <h1 className="text-3xl sm:text-5xl font-bold text-[#111111] tracking-tight">
                    Technical & Soft Skills.
                </h1>
            </div>

            <div className="space-y-14 md:space-y-16">
                {skillCategories.map((category) => (
                    <div key={category.title}>
                        <h2 className="text-xl md:text-2xl font-bold mb-6 text-[#111111] flex items-center gap-3">
                            <span className="w-2.5 h-2.5 bg-[#111111] rounded-full"></span>
                            {category.title}
                        </h2>

                        <motion.div
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {category.skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    variants={itemVariants}
                                    className="glass-panel p-5 bg-white flex flex-col items-center justify-between hover:border-black/20 transition-all group shadow-sm hover:shadow-md"
                                >
                                    <div className="w-14 h-14 mb-3 p-2.5 bg-gray-100 rounded-2xl group-hover:bg-gray-200 transition-colors flex items-center justify-center">
                                        <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                                    </div>

                                    <h3 className="font-bold text-sm md:text-base text-[#111111] mb-3 text-center">{skill.name}</h3>

                                    {/* Progress Bar Container */}
                                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden mt-auto border border-black/5">
                                        <motion.div
                                            className="h-full bg-[#111111]"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                                        />
                                    </div>

                                    <span className="text-xs font-semibold text-slate-500 mt-2">{skill.level}%</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>

            <div className="mt-24 mb-6 text-center">
                <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] mb-8">
                    Soft Skills & Qualities.
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
                    {[
                        { name: 'Teamwork', desc: 'Collaborative & Supportive' },
                        { name: 'Problem Solving', desc: 'Analytical Thinking' },
                        { name: 'Communication', desc: 'Clear & Effective' },
                        { name: 'Time Management', desc: 'Organized & Punctual' }
                    ].map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="glass-panel p-6 text-center bg-white hover:bg-gray-50 transition-all shadow-sm hover:shadow"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className="font-bold text-lg text-[#111111] mb-1">{skill.name}</h3>
                            <p className="text-xs font-medium text-slate-500">{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
