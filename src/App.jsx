import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import IntroScreen from './components/IntroScreen';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Journey from './pages/Journey';
import Gallery from './pages/Gallery';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import './App.css';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode='wait'>
        {showSplash ? (
          <IntroScreen key="splash" onComplete={() => setShowSplash(false)} />
        ) : (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="journey" element={<Journey />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="projects" element={<Projects />} />
              <Route path="skills" element={<Skills />} />
              <Route path="project/:id" element={<ProjectDetails />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
