import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const Gallery = () => {
    const photos = [
        { id: 10, title: 'FYP 1 Completed!', desc: 'Final Year Project milestone achieved', image: 'FYP 1 DONE.jpeg' },
        { id: 11, title: 'Google Malaysia Visit', desc: 'Exploring tech industry innovation', image: 'Visited Google Malaysia.jpeg' },
        { id: 12, title: 'Google AI Program', desc: 'Attending Build with AI workshop', image: 'Attended Google Ai program.jpeg' },
        { id: 13, title: "Dean's List Award (2025/2026)", desc: 'Continuing academic excellence', image: 'Dean list for 2526.jpeg' },
        { id: 14, title: 'FYP Development Progress', desc: 'Deep in code & building solutions', image: 'FYP progess.jpeg' },
        { id: 1, title: "Dean's List Award (2024/2025)", desc: 'Academic Excellence', image: 'dean_list.jpeg' },
        { id: 2, title: 'Workshop Presentation', desc: 'Sharing technical insights', image: 'workshop1Presentation.jpeg' },
        { id: 3, title: 'Group Discussion', desc: 'Brainstorming with the team', image: 'discussion.jpeg' },
        { id: 4, title: 'UTeM Campus', desc: 'Beautiful evening at the university', image: 'utemenviromnet.jpeg' },
        { id: 5, title: 'Raya Celebration', desc: 'Festive moments with friends', image: 'rayaCelebration.jpeg' },
        { id: 6, title: 'First Day of Degree', desc: 'The beginning of a new chapter', image: 'firstdaydegree.jpeg' },
        { id: 7, title: 'MTS Day', desc: 'Participating in campus events', image: 'mtsday.jpeg' },
        { id: 8, title: 'First Exam', desc: 'Coding our way through', image: 'firstexamdegree.jpeg' },
        { id: 9, title: 'Last Exam', desc: 'Wrapping up the semester!', image: 'lastdayexam.jpeg' },
    ];

    return (
        <div className="container mx-auto px-4 md:px-6 pt-8 pb-16">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-block bg-white border border-black/5 shadow-sm px-4 py-1.5 rounded-full text-xs font-semibold text-slate-500 mb-4">
                        Campus Memories
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-bold text-[#111111] tracking-tight">
                        Life @ UTeM.
                    </h1>
                    <p className="text-slate-500 text-center mt-3 max-w-xl mx-auto text-sm md:text-base">
                        A glimpse into my university journey, events, and memories beyond the code.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {photos.map((photo, index) => (
                        <motion.a
                            key={photo.id}
                            href={new URL(`../assets/${photo.image}`, import.meta.url).href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="glass-panel overflow-hidden relative group h-64 md:h-72 bg-white shadow-sm hover:shadow-md m-1 block cursor-pointer"
                        >
                            {/* Image */}
                            <img
                                src={new URL(`../assets/${photo.image}`, import.meta.url).href}
                                alt={photo.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                            />

                            {/* Fallback Placeholder (if image missing) */}
                            <div className="absolute inset-0 bg-gray-100 border border-black/5 flex flex-col items-center justify-center text-slate-400 hidden">
                                <Camera size={40} className="mb-2 opacity-50 text-slate-500" />
                                <span className="text-sm font-medium text-slate-500">Missing: {photo.image}</span>
                            </div>

                            {/* Overlay Info */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 backdrop-blur-[2px] text-white">
                                <h3 className="text-xl font-bold text-white mb-1">{photo.title}</h3>
                                <p className="text-xs font-semibold text-gray-200">{photo.desc}</p>
                                <span className="text-[10px] text-gray-300 mt-2 flex items-center gap-1">Click to enlarge ↗</span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Gallery;
