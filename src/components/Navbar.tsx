import { motion } from 'motion/react';
import { NAV_LINKS } from '../data/portfolioData';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/5 bg-black/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-lg font-bold tracking-tighter flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">M</span>
          M. LAROURA
        </motion.div>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-xs font-mono font-medium tracking-widest text-gray-400 hover:text-white transition-colors uppercase"
              whileHover={{ y: -2 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-6 py-3 rounded-lg tracking-widest uppercase transition-all shadow-lg shadow-blue-500/20"
        >
          Me Contacter
        </motion.a>
      </div>
    </nav>
  );
}
