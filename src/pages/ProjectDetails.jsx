import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ProjectDetails = () => {
    const { id } = useParams();

    return (
        <div className="container mx-auto px-6">
            <Link to="/projects" className="inline-flex items-center text-slate-400 hover:text-white mb-8">
                <ArrowLeft size={16} className="mr-2" /> Back to Projects
            </Link>

            <div className="glass-panel p-8">
                <h1 className="text-3xl font-bold mb-4">Project Details (ID: {id})</h1>
                <p className="text-slate-300 mb-8">
                    This is a detailed view of the selected project. In a real application, I would fetch specific project data here.
                    This demonstrates the routing capability of the portfolio.
                </p>

                <div className="h-64 bg-slate-800 rounded-lg flex items-center justify-center mb-8">
                    <span className="text-slate-500">Project Screenshot / Demo Video</span>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-white">Project Description</h3>
                        <p className="text-slate-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-white">Technolgies Used</h3>
                        <div className="flex flex-wrap gap-2">
                            {['React', 'Tailwind', 'Framer Motion'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
