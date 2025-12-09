import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CursorBackground from './CursorBackground';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <CursorBackground />
            <Navbar />
            <main className="flex-grow pt-28 pb-10">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
