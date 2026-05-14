import { motion } from 'motion/react';
import { personalDetails } from '../../constants/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <a href="#" className="text-2xl font-display font-bold tracking-tighter">
            YS<span className="text-blue-500">.</span>
          </a>
          <p className="text-sm text-zinc-500 mt-2">Built with passion & precision in Bhopal.</p>
        </div>

        <div className="flex items-center gap-8">
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#skills">Skills</FooterLink>
            <FooterLink href="#experience">Work</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
        </div>

        <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
            &copy; {currentYear} Yash Solanki. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm text-zinc-500 hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}
