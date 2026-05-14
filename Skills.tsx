import { motion } from 'motion/react';
import { personalDetails } from '../../constants/data';
import { Cpu, Database, Brain, Activity, LineChart, Network, Microscope, Wrench } from 'lucide-react';

export default function Skills() {
  const aiSkills = [
    { name: 'Artificial Intelligence', icon: <Brain size={24} />, color: 'from-blue-500 to-cyan-400', delay: 0.1 },
    { name: 'Machine Learning', icon: <Cpu size={24} />, color: 'from-purple-500 to-pink-500', delay: 0.2 },
    { name: 'Python', icon: <Microscope size={24} />, color: 'from-yellow-400 to-orange-500', delay: 0.3 },
    { name: 'Deep Learning', icon: <Network size={24} />, color: 'from-green-400 to-emerald-600', delay: 0.4 },
    { name: 'Data Science', icon: <Database size={24} />, color: 'from-blue-400 to-indigo-600', delay: 0.5 },
    { name: 'Data Analytics', icon: <LineChart size={24} />, color: 'from-red-400 to-rose-600', delay: 0.6 },
    { name: 'Neural Networks', icon: <Activity size={24} />, color: 'from-cyan-400 to-blue-600', delay: 0.7 },
    { name: 'AI Tools', icon: <Wrench size={24} />, color: 'from-zinc-400 to-zinc-600', delay: 0.8 },
  ];

  return (
    <section id="skills" className="py-32 px-6 relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-dot opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-[0.4em] mb-4 block">Core Competencies</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">
            INTELLIGENT <span className="text-ai-glow">SYSTEMS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiSkills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>

        {/* Currently Learning */}
        <div className="mt-32">
             <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h3 className="text-2xl font-display font-bold tracking-tight flex items-center gap-3">
                    <div className="w-12 h-px bg-blue-500/50" />
                    RESEARCH & GROWTH
                </h3>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {personalDetails.skills.learning.map((item, i) => (
                    <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 glass rounded-2xl border-white/5 flex items-center justify-between group hover:border-blue-500/30 transition-all cursor-default"
                    >
                        <span className="text-zinc-400 group-hover:text-white transition-colors">{item}</span>
                        <div className="w-2 h-2 rounded-full bg-blue-500/20 group-hover:bg-blue-500 group-hover:shadow-[0_0_8px_#3b82f6] transition-all" />
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ name, icon, color, delay }: { name: string, icon: React.ReactNode, color: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
      style={{ perspective: 1000 }}
      className="group relative p-8 glass-card rounded-[2.5rem] flex flex-col items-center text-center cursor-default overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-[0.03] transition-opacity`} />
      
      <div className={`mb-6 p-5 rounded-3xl bg-gradient-to-br ${color} bg-opacity-10 text-white shadow-lg`}>
        {icon}
      </div>
      
      <h4 className="text-xl font-display font-bold tracking-tight mb-2 group-hover:text-white transition-colors">{name}</h4>
      <div className="w-8 h-1 bg-white/10 rounded-full group-hover:w-16 group-hover:bg-blue-500 transition-all duration-500" />
      
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent -translate-y-full -translate-x-full group-hover:translate-y-[-50%] group-hover:translate-x-[50%] transition-transform duration-700 blur-2xl" />
    </motion.div>
  );
}
