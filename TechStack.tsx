import { motion } from 'motion/react';
import { personalDetails } from '../../constants/data';

export default function TechStack() {
  const technologies = [
    "Python", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Scikit-Learn", 
    "Jupyter", "GitHub", "OpenAI", "Keras", "Matplotlib", "Seaborn",
    "NLP", "Neural Networks", "Deep Learning", "Data Analytics"
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-zinc-950 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{
            x: ['0%', '-50%']
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="flex items-center gap-16 px-8"
        >
          {/* First set */}
          {technologies.map((tech, i) => (
            <span key={`${tech}-${i}`} className="text-4xl md:text-6xl font-display font-bold text-zinc-800 hover:text-white transition-colors cursor-default select-none uppercase tracking-tighter">
              {tech}
            </span>
          ))}
          {/* Second set for infinite loop */}
          {technologies.map((tech, i) => (
            <span key={`${tech}-repeat-${i}`} className="text-4xl md:text-6xl font-display font-bold text-zinc-800 hover:text-white transition-colors cursor-default select-none uppercase tracking-tighter">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
