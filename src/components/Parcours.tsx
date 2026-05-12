import { motion } from 'motion/react';
import { EXPERIENCE } from '../data/portfolioData';

export default function Parcours() {
  return (
    <section id="parcours" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4">// 05 — PARCOURS</h2>
          <h3 className="text-5xl font-bold tracking-tight">Formation <span className="gradient-text">& expérience</span></h3>
        </div>

        <div className="max-w-4xl space-y-12">
          {EXPERIENCE.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-12 before:absolute before:left-0 before:top-2 before:w-px before:h-full before:bg-white/10 last:before:hidden group"
            >
              <div className="absolute left-0 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-[var(--color-bg-dark)] z-10 group-hover:scale-125 transition-transform" />
              
              <div className="space-y-4">
                <span className="text-blue-500 font-mono text-xs tracking-widest">{item.date}</span>
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                  <h4 className="text-2xl font-bold">{item.title}</h4>
                  <span className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">{item.company} — {item.location}</span>
                </div>
                <p className="text-gray-400 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
