/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import FutureGoals from './components/sections/FutureGoals';
import TechStack from './components/sections/TechStack';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-black min-h-screen selection:bg-blue-500/30">
        <CustomCursor />
        
        <AnimatePresence mode="wait">
            {loading ? (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-7xl font-display font-bold tracking-tighter mb-8"
                    >
                        YASH <span className="text-ai-glow">SOLANKI</span>
                    </motion.div>
                    <div className="w-64 h-px bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 2, ease: 'easeInOut' }}
                            className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"
                        />
                    </div>
                </motion.div>
            ) : null}
        </AnimatePresence>

        <Navbar />
        
        <main className="relative z-10">
            <Hero />
            <TechStack />
            <About />
            <Skills />
            <Experience />
            <Education />
            <FutureGoals />
            <Contact />
        </main>

        <Footer />
        
        {/* Global Blur Blobs - Enhanced for AI theme */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-50">
            <div className="absolute top-1/4 -left-1/4 w-[60%] h-[60%] bg-blue-600/10 blur-[180px] rounded-full" />
            <div className="absolute bottom-1/4 -right-1/4 w-[60%] h-[60%] bg-purple-600/10 blur-[180px] rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid opacity-[0.05]" />
        </div>
    </div>
  );
}

