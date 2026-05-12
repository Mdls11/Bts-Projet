import { motion } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projets" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4">// 03 — PROJETS BTS</h2>
          <h3 className="text-5xl font-bold tracking-tight">Réalisations <span className="gradient-text">techniques</span></h3>
          <p className="mt-4 text-gray-400 font-mono text-xs uppercase tracking-widest">→ CLIQUE SUR UN PROJET POUR VOIR LES DÉTAILS</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass-card overflow-hidden border-white/10 hover:border-blue-500/30 transition-all cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/60 opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600/80 backdrop-blur-md rounded-full text-[10px] font-mono tracking-widest border border-white/10 uppercase">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 text-white/20 font-mono text-xs font-bold">
                  #{project.id}
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{project.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
