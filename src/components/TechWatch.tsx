import { motion } from 'motion/react';
import { Search, Target, Cpu, TrendingUp, ShieldAlert, BookOpen, ExternalLink } from 'lucide-react';
import { VEILLE_DATA } from '../data/portfolioData';

export default function TechWatch() {
  return (
    <section id="veille" className="py-24 bg-[#050505] overflow-hidden relative">
      <div className="container mx-auto px-6">
        {/* 1. Header (Subject & Justification) */}
        <div className="text-center mb-32">
          <div className="inline-block relative mb-12">
            <div className="flex flex-col gap-2 items-center">
              <div className="flex items-center gap-4 text-xs font-mono tracking-[0.2em] text-purple-500 font-bold uppercase">
                <div className="h-[1px] w-12 bg-purple-500" />
                DOSSIER DE VEILLE TECHNOLOGIQUE
                <div className="h-[1px] w-12 bg-purple-500" />
              </div>
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">BTS SIO — ÉPREUVE E5 — SESSION 2026</p>
            </div>
          </div>
          
          <h3 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] max-w-5xl mx-auto mb-16 uppercase">
            {VEILLE_DATA.subject}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-6xl mx-auto">
            {VEILLE_DATA.justification.reasons.map((reason, idx) => (
              <motion.div 
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 glass-card border-white/5 hover:border-purple-500/30 transition-all group"
              >
                <h4 className="text-purple-400 font-bold text-sm mb-3 uppercase tracking-wider">{reason.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Perimeter Section */}
        <div className="max-w-5xl mx-auto mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-500">
              <ShieldAlert size={24} />
            </div>
            <h4 className="text-2xl font-black tracking-tight uppercase">Périmètre de la veille</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {VEILLE_DATA.justification.perimeter.map((item) => (
              <div key={item.category} className="p-5 glass-card bg-white/[0.02] border-white/5">
                <p className="text-[10px] font-mono text-purple-500 uppercase tracking-widest mb-2">{item.category}</p>
                <p className="text-xs text-gray-300 font-medium leading-relaxed">{item.items}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Methodology Section */}
        <div className="max-w-5xl mx-auto mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h4 className="text-3xl font-black tracking-tight uppercase">MÉTHODE DE VEILLE</h4>
            <div className="h-16 w-16 opacity-10 flex-shrink-0">
               <Target size={64} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7 space-y-8">
              <p className="text-gray-400 text-sm font-light">Pour structurer cette veille sur le long terme, j'ai mis en place plusieurs outils complémentaires :</p>
              <ul className="space-y-6">
                {VEILLE_DATA.methodology.tools.map((tool) => (
                  <li key={tool.name} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                    <div>
                      <p className="text-white text-sm font-black mb-1">{tool.name}</p>
                      <p className="text-gray-400 text-xs leading-relaxed font-light">{tool.usage}</p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="p-6 border-l-2 border-purple-500/30 bg-purple-500/[0.02] rounded-r-xl italic text-xs text-gray-400 leading-relaxed font-light">
                Cette organisation m'a permis de suivre régulièrement l'évolution du sujet et de sélectionner les informations les plus utiles pour mon parcours SISR.
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="glass-card p-8 border-white/5 space-y-8">
                <div>
                   <h5 className="text-[10px] font-mono text-purple-500 uppercase tracking-widest mb-4">Sources Françaises</h5>
                   <div className="flex flex-wrap gap-2">
                     {VEILLE_DATA.methodology.sources.fr.map(s => (
                       <span key={s} className="px-3 py-1.5 bg-white/5 rounded-md text-[9px] text-gray-400 border border-white/5">{s}</span>
                     ))}
                   </div>
                </div>
                <div>
                   <h5 className="text-[10px] font-mono text-purple-500 uppercase tracking-widest mb-4">Sources Internationales</h5>
                   <div className="flex flex-wrap gap-2">
                     {VEILLE_DATA.methodology.sources.intl.map(s => (
                       <span key={s} className="px-3 py-1.5 bg-white/5 rounded-md text-[9px] text-gray-400 border border-white/5">{s}</span>
                     ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Trends Section */}
        <div className="max-w-5xl mx-auto mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-500">
              <TrendingUp size={24} />
            </div>
            <h4 className="text-2xl font-black tracking-tight uppercase">Synthèse des tendances</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VEILLE_DATA.trends.map((trend, idx) => (
              <div key={trend.title} className="p-8 glass-card border-white/5 bg-linear-to-b from-white/[0.02] to-transparent">
                <span className="text-4xl font-black text-purple-500/10 mb-4 block">0{idx + 1}</span>
                <h5 className="text-white font-bold mb-4">{trend.title}</h5>
                <p className="text-gray-400 text-xs leading-relaxed">{trend.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Capitalized Articles Table */}
        <div className="max-w-6xl mx-auto mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-500">
              <BookOpen size={24} />
            </div>
            <h4 className="text-2xl font-black tracking-tight uppercase">Fiches de veille capitalisées</h4>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="py-6 px-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest">Date / Source</th>
                  <th className="py-6 px-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest">Article & Analyse</th>
                </tr>
              </thead>
              <tbody>
                {VEILLE_DATA.articles.map((article, idx) => (
                  <tr key={idx} className="border-b border-white/[0.02] hover:bg-white/[0.01] transition-colors group">
                    <td className="py-8 px-4 w-48 align-top">
                      <p className="text-purple-400 font-mono text-xs mb-1">{article.date}</p>
                      <p className="text-gray-500 text-[10px] uppercase font-bold">{article.source}</p>
                    </td>
                    <td className="py-8 px-4 align-top">
                      <p className="text-white font-bold mb-3 group-hover:text-purple-400 transition-colors uppercase tracking-tight">{article.title}</p>
                      <div className="p-4 bg-white/[0.02] rounded-lg border border-white/5">
                        <p className="text-xs text-gray-400 leading-relaxed italic">
                          <span className="text-purple-500 font-bold not-italic mr-2">ANALYSE :</span>
                          {article.analysis}
                        </p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. Bilan & Perspectives */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-8">
              <h5 className="text-lg font-black tracking-tight text-white uppercase flex items-center gap-2">
                <span className="w-6 h-[1px] bg-emerald-500" /> Apports
              </h5>
              <div className="space-y-4">
                {VEILLE_DATA.assessment.benefits.map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-emerald-500/[0.03] border border-emerald-500/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                    <p className="text-xs text-gray-400 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h5 className="text-lg font-black tracking-tight text-white uppercase flex items-center gap-2">
                <span className="w-6 h-[1px] bg-red-500" /> Limites
              </h5>
              <div className="space-y-4">
                {VEILLE_DATA.assessment.limits.map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-red-500/[0.03] border border-red-500/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                    <p className="text-xs text-gray-400 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h5 className="text-lg font-black tracking-tight text-white uppercase flex items-center gap-2">
                <span className="w-6 h-[1px] bg-purple-500" /> Perspectives
              </h5>
              <div className="space-y-4">
                {VEILLE_DATA.assessment.perspectives.map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-purple-500/[0.03] border border-purple-500/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                    <p className="text-xs text-gray-400 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
