import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

// Use placeholders for now until files are uploaded
// import deanList from '../assets/dean_list.jpeg';
// import raya from '../assets/rayaCelebration.jpeg';
// import workshop from '../assets/workshop1Presentation.jpeg';
// import discussion from '../assets/discussion.jpeg';
// import campus from '../assets/utemenviromnet.jpeg';
// import firstDay from '../assets/firstdaydegree.jpeg';
// import mtsDay from '../assets/mtsday.jpeg';
// import firstExam from '../assets/firstexamdegree.jpeg';
// import lastExam from '../assets/lastdayexam.jpeg';

const Gallery = () => {
    const photos = [
        { id: 1, title: "Dean's List Award", desc: 'Academic Excellence', size: 'large', image: 'dean_list.jpeg' },
        { id: 2, title: 'Workshop Presentation', desc: 'Sharing technical insights', size: 'normal', image: 'workshop1Presentation.jpeg' },
        { id: 3, title: 'Group Discussion', desc: 'Brainstorming with the team', size: 'normal', image: 'discussion.jpeg' },
        { id: 4, title: 'UTeM Campus', desc: 'Beautiful evening at the university', size: 'wide', image: 'utemenviromnet.jpeg' },
        { id: 5, title: 'Raya Celebration', desc: 'Festive moments with friends', size: 'normal', image: 'rayaCelebration.jpeg' },
        { id: 6, title: 'First Day of Degree', desc: 'The beginning of a new chapter', size: 'normal', image: 'firstdaydegree.jpeg' },
        { id: 7, title: 'MTS Day', desc: 'Participating in campus events', size: 'normal', image: 'mtsday.jpeg' },
        { id: 8, title: 'First Exam', desc: 'Coding our way through', size: 'normal', image: 'firstexamdegree.jpeg' },
        { id: 9, title: 'Last Exam', desc: 'Wrapping up the semester!', size: 'normal', image: 'lastdayexam.jpeg' },
    ];

    return (
        <div className="container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold mb-4 text-center">Life @ <span className="text-gradient">UTeM</span></h1>
                <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                    A glimpse into my university journey, events, and memories beyond the code.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel overflow-hidden relative group h-64"
                        >
                            {/* Image */}
                            <img
                                src={new URL(`../assets/${photo.image}`, import.meta.url).href}
                                alt={photo.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                            />

                            {/* Fallback Placeholder (if image missing) */}
                            <div className="absolute inset-0 bg-slate-800 border border-white/10 flex flex-col items-center justify-center text-slate-400 hidden">
                                <Camera size={48} className="mb-2 opacity-50 text-white" />
                                <span className="text-base font-medium text-white/70">Missing: {photo.image}</span>
                            </div>

                            {/* Overlay Info */}
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                                <h3 className="text-xl font-bold text-white mb-1">{photo.title}</h3>
                                <p className="text-sm text-slate-200 font-medium">{photo.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Gallery;
