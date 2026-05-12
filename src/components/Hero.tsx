import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="profil" className="pt-40 pb-24 relative overflow-hidden grid-bg">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-mono tracking-widest uppercase mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              BTS SIO SISR • ESTIAM • 2024-2026
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6"
            >
              Mohamed <br />
              <span className="gradient-text">Laroura</span>
              <span className="text-blue-600">.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400 max-w-xl leading-relaxed mb-10"
            >
              Étudiant en <span className="text-white font-semibold">BTS SIO option SISR</span> à l'ESTIAM. Je déploie des 
              <span className="text-white font-semibold"> infrastructures Docker</span>, administre des réseaux segmentés et 
              mets en place des solutions de <span className="text-white font-semibold">monitoring, VPN et cloud privé</span>. 
              Actuellement en alternance chez <span className="text-white font-semibold">Nu3ge</span>.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projets" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl flex items-center gap-2 group transition-all shadow-xl shadow-blue-500/20">
                VOIR MES PROJETS
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold px-8 py-4 rounded-xl transition-all">
                ME CONTACTER
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 grid grid-cols-2 gap-8 max-w-lg"
            >
              <div>
                <p className="text-4xl font-black text-blue-500">Nu3ge</p>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">Alternance Cloud</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white">2026</p>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">Diplôme BTS SIO</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1 relative group"
          >
            <div className="absolute -inset-4 bg-linear-to-r from-blue-600 to-purple-600 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative glass-card overflow-hidden rounded-[2.5rem] border-white/10 aspect-square max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                alt="Mohamed Laroura"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-3 p-4 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   <p className="text-xs font-mono tracking-widest uppercase text-white/80">MOHAMED LAROURA — BTS SIO SISR</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
