import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Mail, Linkedin, Copy, Check, ArrowUpRight, ExternalLink } from 'lucide-react';
import { personalDetails } from '../../constants/data';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalDetails.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-40 px-6 relative bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[60%] h-[60%] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-24"
        >
          <span className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.8em] mb-6 block">Communication Protocol</span>
          <h2 className="text-6xl md:text-9xl font-display font-bold tracking-tighter mb-8 leading-none">
            ESTABLISH <br />
            <span className="text-ai-glow">CONNECTION</span>
          </h2>
          <p className="text-lg text-zinc-500 font-light max-w-xl mx-auto leading-relaxed">
            Ready to architect the next breakthrough in Machine Learning or discuss strategic AI integrations. Choose your preferred channel.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* LinkedIn Magnetic Button */}
          <MagneticButton>
            <a
              href={personalDetails.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col items-center justify-center w-64 h-64 glass rounded-full border-white/5 hover:border-blue-500/30 transition-colors duration-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Linkedin size={40} className="text-zinc-600 group-hover:text-blue-500 transition-all duration-500 group-hover:scale-110" />
              <span className="mt-4 text-xs font-mono text-zinc-500 group-hover:text-white tracking-widest uppercase">LinkedIn Profile</span>
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <ExternalLink size={14} className="text-blue-500" />
              </div>
            </a>
          </MagneticButton>

          {/* Email Magnetic Button */}
          <MagneticButton>
            <div className="group relative flex flex-col items-center justify-center w-64 h-64 glass rounded-full border-white/5 hover:border-purple-500/30 transition-colors duration-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.15)] overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <Mail size={40} className="text-zinc-600 group-hover:text-purple-500 transition-all duration-500 group-hover:scale-110" />
               <span className="mt-4 text-xs font-mono text-zinc-500 group-hover:text-white tracking-widest uppercase">Send Email</span>
               <div className="flex gap-4 mt-6">
                 <button 
                   onClick={copyEmail}
                   className="p-3 bg-white/5 rounded-xl text-zinc-500 hover:text-white hover:bg-white/10 transition-all active:scale-90 relative"
                 >
                   {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                   {copied && <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] font-mono text-green-500 whitespace-nowrap">COPIED</span>}
                 </button>
                 <a 
                   href={`mailto:${personalDetails.socials.email}`}
                   className="p-3 bg-white/5 rounded-xl text-zinc-500 hover:text-white hover:bg-white/10 transition-all active:scale-90"
                 >
                   <ArrowUpRight size={16} />
                 </a>
               </div>
            </div>
          </MagneticButton>
        </div>

        {/* Footer Info */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.6 }}
           className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-zinc-600">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_#3b82f6]" />
            <p className="text-[10px] font-mono uppercase tracking-[0.3em]">Network Status: Integrated</p>
          </div>
          <p className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">
            © {new Date().getFullYear()} Yash Solanki / AI Design System v1.0
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Limits the movement to a reasonable amount
    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
      }}
    >
      {children}
    </motion.div>
  );
}


