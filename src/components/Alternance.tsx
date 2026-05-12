import { motion } from 'motion/react';
import { ALTERNANCE } from '../data/portfolioData';
import { Star } from 'lucide-react';

export default function Alternance() {
  return (
    <section id="alternance" className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-purple-500 font-mono text-sm tracking-widest uppercase mb-4">// 06 — ALTERNANCE</h2>
          <h3 className="text-5xl font-bold tracking-tight">Expérience en <span className="text-purple-500">Entreprise</span></h3>
          <p className="text-gray-400 mt-4 font-mono text-xs italic tracking-wider">Nu3ge — Technicien Cloud & Infra</p>
        </div>

        <div className="space-y-24">
          {ALTERNANCE.map((year, yearIdx) => (
            <div key={yearIdx}>
              <div className="mb-12 border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                 <div>
                   <h4 className="text-3xl font-black uppercase tracking-tight mb-2">{year.year}</h4>
                   <p className="text-gray-500 text-sm italic">{year.subtitle}</p>
                 </div>
                 <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-[10px] font-mono tracking-widest uppercase h-fit">
                   BTS SIO SISR 2026
                 </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {year.tasks.map((task, taskIdx) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: taskIdx * 0.1 }}
                    className="space-y-6"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-purple-400 font-black text-xl uppercase">{task.id}</span>
                        <div className="h-px flex-1 bg-white/5" />
                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{task.date}</span>
                      </div>
                      <h5 className="text-lg font-bold text-gray-200">
                        {task.title}
                      </h5>
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{task.context}</span>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {task.ancres.map((ancre, ancreIdx) => (
                        <div 
                          key={ancreIdx}
                          className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-purple-500/20 transition-all group"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Star size={10} className="text-purple-400 fill-purple-400" />
                            <span className="text-purple-400 font-black text-[9px] tracking-widest uppercase">{ancre.title}</span>
                          </div>
                          <p className="text-gray-400 text-xs leading-relaxed italic group-hover:text-gray-200 transition-colors">
                            « {ancre.phrase} »
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
