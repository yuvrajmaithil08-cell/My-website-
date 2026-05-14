import { motion } from 'motion/react';
import { personalDetails } from '../../constants/data';
import Scene3D from '../canvas/Scene3D';
import { ArrowRight, ChevronDown, Cpu, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <Scene3D />
      
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-[1]" />
      <div className="absolute inset-0 bg-grid opacity-[0.15] z-[1] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="px-4 py-1.5 glass rounded-full flex items-center gap-2 border-white/20">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-mono text-white uppercase tracking-[0.3em] font-semibold">
              Available for Research & Dev
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
           <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-display font-bold tracking-tighter text-white mb-4 leading-[0.85] drop-shadow-2xl">
            BUILDING THE <br />
            <span className="text-ai-glow italic">FUTURE</span> WITH AI
          </h1>
          
          <div className="absolute -top-12 -right-12 hidden lg:block opacity-30">
            <Sparkles className="text-blue-400 animate-pulse" size={64} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8 mb-16"
        >
          {["AI", "ML", "Data Science", "Innovation"].map((tag) => (
             <span key={tag} className="text-sm font-mono text-zinc-500 tracking-widest px-4 border-r last:border-0 border-white/10 uppercase">
                {tag}
             </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#skills"
            className="group relative px-10 py-5 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <span className="relative z-10 flex items-center gap-2">
                Explore Portfolio <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="#contact"
            className="group px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full backdrop-blur-md border border-white/10 transition-all hover:border-white/20 active:scale-95"
          >
             Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-12 z-10 hidden md:block"
      >
        <div className="flex items-center gap-4 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
            <Cpu size={14} className="text-blue-500" />
            <span>Neural Engine Status: Online</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 right-12 z-10 hidden md:block"
      >
        <ChevronDown className="text-zinc-500" size={24} />
      </motion.div>
    </section>
  );
}
