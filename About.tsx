import { motion } from 'motion/react';
import { personalDetails } from '../../constants/data';
import { Brain, Code, Database, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-tight">
              PIONEERING THE <br />
              <span className="text-zinc-500 italic">ALGORITHMIC</span> FRONTIER.
            </h2>
            <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
              <p>
                Based in <span className="text-white font-medium">Bhopal</span>, I am Yash Solanki—a visionary student and developer architecting the next generation of intelligent systems.
              </p>
              <p>
                My philosophy is centered on the belief that <span className="text-white">Artificial Intelligence</span> is the ultimate tool for human elevation. From my academic pursuits at Government Polytechnic College to strategic data analysis during my internships, I focus on bridging the gap between raw compute and real-world impact.
              </p>
              <p>
                Currently, I am obsessively exploring <span className="text-white">Neural Network Architectures</span> and <span className="text-white">Predictive Modeling</span>. My goal is to build an AI-first venture that solves systemic challenges through data-driven innovation.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureCard
                title="AI & ML"
                desc="Exploring the frontier of artificial intelligence and predictive modeling."
                icon={<Brain className="text-blue-500" />}
                delay={0.1}
            />
            <FeatureCard
                title="Data Science"
                desc="Unlocking insights and patterns hidden within complex datasets."
                icon={<Database className="text-zinc-400" />}
                delay={0.2}
            />
            <FeatureCard
                title="Modern Dev"
                desc="Crafting high-performance, cinematic web experiences."
                icon={<Code className="text-zinc-400" />}
                delay={0.3}
            />
            <FeatureCard
                title="Innovation"
                desc="Developing a mindset for future full-stack challenges."
                icon={<Sparkles className="text-white" />}
                delay={0.4}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, desc, icon, delay }: { title: string, desc: string, icon: React.ReactNode, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-8 glass rounded-3xl hover:bg-white/10 transition-all group"
    >
      <div className="mb-4 p-3 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-display font-bold mb-2">{title}</h3>
      <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
