import { motion } from 'motion/react';
import { personalDetails } from '../../constants/data';
import { Rocket, Target, Globe, Cpu } from 'lucide-react';

export default function FutureGoals() {
  const icons = [<Rocket />, <Target />, <Globe />, <Cpu />];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-zinc-950/40">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20 text-center"
        >
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.5em] mb-4 block">Manifesting the Unknown</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">
            FUTURE <span className="text-zinc-500">VISIONS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {personalDetails.futureGoals.map((goal, i) => (
             <motion.div
               key={goal}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group p-8 glass rounded-[2.5rem] border-white/5 hover:bg-white/[0.04] transition-all"
             >
                <div className="mb-8 p-4 rounded-2xl bg-white/5 text-blue-500 w-fit group-hover:bg-blue-500 group-hover:text-white transition-all">
                    {icons[i % icons.length]}
                </div>
                <p className="text-lg font-display font-medium text-zinc-400 group-hover:text-white transition-colors leading-relaxed">
                   {goal}
                </p>
                <div className="mt-8 h-1 w-0 bg-blue-500 rounded-full group-hover:w-full transition-all duration-700" />
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
