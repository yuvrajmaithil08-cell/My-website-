import { motion } from 'motion/react';
import { personalDetails } from '../../constants/data';
import { Briefcase, Calendar, Target, Zap } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 relative bg-zinc-950/20">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-blue-500 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <span className="text-xs font-mono text-blue-500 uppercase tracking-[0.4em] mb-4 block underline underline-offset-4 decoration-blue-500/30">Career Progression</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">
            PROFESSIONAL <span className="text-zinc-500">HISTORY</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-1/2" />

          <div className="space-y-24">
            {personalDetails.experience.map((exp, i) => (
              <motion.div 
                key={exp.organization}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Indicator */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full -translate-x-1/2 z-20 flex items-center justify-center bg-black border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                </div>

                {/* Content */}
                <div className={`w-full md:w-[45%] group`}>
                    <div className="glass p-10 rounded-[3rem] border-white/5 group-hover:border-blue-500/20 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <div className="flex items-center justify-between mb-6">
                            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-zinc-400 uppercase tracking-widest group-hover:text-blue-400 transition-colors">
                                {exp.period}
                            </span>
                            <Briefcase size={20} className="text-zinc-600 group-hover:text-blue-500 transition-colors" />
                        </div>
                        
                        <h3 className="text-3xl font-display font-bold mb-2 group-hover:text-white transition-colors">{exp.organization}</h3>
                        <p className="text-blue-500 font-mono text-xs uppercase tracking-[0.2em] mb-6">{exp.title}</p>
                        
                        <p className="text-zinc-400 font-light leading-relaxed mb-8">
                            {exp.description}
                        </p>

                        <div className="flex items-center gap-2 text-xs text-zinc-600 font-mono italic">
                            <Zap size={14} className="text-yellow-500" />
                            Focused on data-driven transformation
                        </div>
                    </div>
                </div>

                {/* Side Label (Desktop) */}
                <div className={`hidden md:block w-[45%] ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <span className="text-8xl font-display font-black text-white/[0.02] select-none">
                        0{i + 1}
                    </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
