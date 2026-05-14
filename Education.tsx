import { motion } from 'motion/react';
import { personalDetails } from '../../constants/data';
import { GraduationCap, Milestone, ArrowUpRight } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-32 px-6 bg-black relative">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-24"
        >
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.5em] mb-4 block">Knowledge Acquisition</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">
            ACADEMIC <span className="text-ai-glow">ROADMAP</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
           {/* Connecting Line (Desktop) */}
           <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-white/10 to-transparent hidden lg:block -translate-x-1/2" />

           {personalDetails.education.map((edu, i) => (
             <motion.div
               key={edu.institution}
               initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: i * 0.2 }}
               className={`relative glass p-10 rounded-[3rem] border-white/5 hover:bg-white/[0.03] transition-all group ${i % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'}`}
             >
                <div className="flex items-start justify-between mb-12">
                   <div className="p-5 rounded-3xl bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                      <GraduationCap size={32} />
                   </div>
                   <div className="text-right">
                      <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Status</p>
                      <span className={`text-[10px] font-mono px-3 py-1 rounded-full border ${edu.status === 'Current' ? 'border-blue-500/50 text-blue-400' : 'border-zinc-800 text-zinc-500'}`}>
                         {edu.status}
                      </span>
                   </div>
                </div>

                <div className="space-y-4">
                   <p className="text-sm font-mono text-blue-500/70">{edu.period}</p>
                   <h3 className="text-3xl font-display font-bold tracking-tight">{edu.degree}</h3>
                   <p className="text-lg text-zinc-400 font-light italic">{edu.institution}</p>
                </div>

                <div className="mt-12 flex items-center gap-2 text-xs text-zinc-600 font-mono transition-colors group-hover:text-zinc-400">
                    <Milestone size={14} className="group-hover:text-blue-500" />
                    Specializing in Neural Architectures
                </div>
                
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={24} className="text-blue-500/50" />
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
