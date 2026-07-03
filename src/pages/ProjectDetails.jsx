import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

import mobileDemo from '../assets/mobile-demo.mp4';
import fingerprintDemo from '../assets/demo fingerprint.mp4';
import tourDemo from '../assets/tourdemo.mp4';
import hciPreview from '../assets/Portfolio.png';
import tourismPreview from '../assets/projects/tour cover.png';
import secureSwipePreview from '../assets/projects/fingerprint.png';
import neptuneGymPreview from '../assets/projects/Neptune Gym.jpg';
import campusConnectPreview from '../assets/projects/CampusConnect.jpg';

const ProjectDetails = () => {
    const { id } = useParams();

    const projectsData = {
        1: {
            title: 'HCI Portfolio Website',
            description: "This portfolio itself is a testament to my frontend development skills. Designed and developed from scratch, it showcases my journey as a software developer student. The application features a modern, responsive interface built with React and Tailwind CSS, enhanced with fluid animations using Framer Motion. Key implementations include a custom intro splash screen, interactive navigation, and a cohesive glassmorphism design system that provides a premium user experience.",
            tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Lucide React'],
            image: hciPreview,
            link: 'https://lavanyaa-selapan.netlify.app'
        },
        2: {
            title: 'Event Booking System',
            description: "A comprehensive platform designed to facilitate efficient event management and seamless booking experiences. The system caters to administrators for robust event oversight and analytics, while providing users with an intuitive interface for effortless event discovery and registration. Key features include secure login, a powerful search function, personalized settings, and a scalable backend architecture, bridging the gap between organizers and attendees.",
            tech: ['Android Studio', 'Java', 'Firebase'],
            video: mobileDemo
        },
        3: {
            title: 'TripTastic Travel Package System',
            description: "An innovative digital solution designed to revolutionize travel agency operations by automating tour package management, customer bookings, payment processing, and sales reporting. This system replaces manual processes with a centralized, user-friendly platform that improves operational efficiency, ensures secure transactions, and enhances customer satisfaction through data-driven insights.",
            tech: ['C++', 'Object-Oriented Programming', 'Data Structures'],
            image: tourismPreview,
            video: tourDemo
        },
        4: {
            title: 'SecureSwipe (Fingerprint Attendance System)',
            description: "A web-based attendance system designed to eliminate proxy attendance in educational institutions. Implementing fingerprint recognition technology, it ensures secure and authentic attendance recording. The system streamlines the process, saves time for instructors, and promotes accountability. Features include real-time feedback, automated reporting, and role-based access control for students, staff, and administrators.",
            tech: ['HTML/CSS/JS', 'Python', 'Django', 'MySQL', 'Biometric Integration'],
            image: secureSwipePreview,
            video: fingerprintDemo
        },
        5: {
            title: 'Neptune Endless Gym',
            description: "A modern web application built for fitness enthusiasts and gym members. Neptune Endless Gym features interactive exercise catalogs, workout tracking concepts, and a sleek, energetic interface designed to motivate users on their fitness journey. Developed with a focus on responsive UI/UX and seamless performance across all devices.",
            tech: ['React', 'Web Dev', 'Responsive UI/UX', 'Vercel'],
            image: neptuneGymPreview,
            link: 'https://neptune-endless-gym.vercel.app'
        },
        6: {
            title: 'CampusConnect',
            description: "A centralized digital platform designed to bridge communication and networking gaps among university students. CampusConnect enables peer-to-peer collaboration, campus event sharing, academic discussions, and resource exchange in a secure student-focused environment.",
            tech: ['Web Dev', 'Frontend Dev', 'UI/UX Design'],
            image: campusConnectPreview
        }
    };

    const project = projectsData[id] || {
        title: 'Project Details',
        description: 'Project details not found.',
        tech: []
    };

    return (
        <div className="container mx-auto px-6 pt-10">
            <Link to="/projects" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft size={16} className="mr-2" /> Back to Projects
            </Link>

            <div className="glass-panel p-6 md:p-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-white">{project.title}</h1>
                    <div className="flex gap-3">
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary flex items-center gap-2 text-sm"
                            >
                                <ExternalLink size={16} /> Live Demo
                            </a>
                        )}
                    </div>
                </div>

                <div className="overflow-hidden bg-slate-800/50 rounded-xl flex items-center justify-center mb-10 border border-white/5">
                    {project.video ? (
                        <video controls className="w-full h-auto max-h-[500px]">
                            <source src={project.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto object-cover max-h-[500px]"
                        />
                    ) : (
                        <div className="h-64 md:h-96 flex items-center justify-center w-full">
                            <span className="text-slate-500 font-medium">Project Preview / Screenshot</span>
                        </div>
                    )}
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                            Project Overview
                        </h3>
                        <p className="text-slate-300 leading-relaxed text-lg">
                            {project.description}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map(tag => (
                                <span key={tag} className="px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium border border-primary/20 hover:bg-primary/30 transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
