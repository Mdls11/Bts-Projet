import { motion } from 'motion/react';
import { 
  Package, 
  Terminal, 
  ShieldCheck, 
  LineChart, 
  Code2, 
  Cpu, 
  Server, 
  Network 
} from 'lucide-react';
import { SKILLS } from '../data/portfolioData';

const iconMap: Record<string, any> = {
  Package,
  Server,
  ShieldCheck,
  LineChart,
  Code2
};

export default function TechStack() {
  return (
    <section id="skills" className="py-24 bg-black/30">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4">// 02 — COMPÉTENCES</h2>
          <h3 className="text-5xl font-bold tracking-tight">Stack <span className="gradient-text">technique</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {SKILLS.map((skill, idx) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 flex flex-col h-full border-white/5 hover:border-blue-500/30 transition-all group"
              >
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all">
                  <Icon size={24} />
                </div>
                <h4 className="text-[10px] font-mono tracking-widest uppercase text-blue-500 mb-8 border-b border-white/5 pb-4">
                  {skill.category}
                </h4>
                <ul className="space-y-4">
                  {skill.items.map((item) => (
                    <li key={item} className="text-sm text-gray-400 font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
