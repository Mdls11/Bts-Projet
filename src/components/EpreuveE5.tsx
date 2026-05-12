import { motion } from 'motion/react';
import { Calendar, GraduationCap, MapPin, ExternalLink } from 'lucide-react';

export default function EpreuveE5() {
  return (
    <section id="e5" className="py-24 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4">// 04 — ÉPREUVE E5 BTS SIO SISR</h2>
          <h3 className="text-5xl font-bold tracking-tight">Dossier <span className="gradient-text">E5 / E6</span></h3>
        </div>

        <div className="glass-card p-12 relative overflow-hidden backdrop-blur-3xl bg-white/[0.02]">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <GraduationCap size={240} />
          </div>

          <div className="flex flex-col lg:flex-row gap-12 relative z-10">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 border border-blue-500/20">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">Épreuve E5 — Support et mise à disposition de services informatiques</h4>
                  <p className="text-blue-400 font-mono text-[10px] tracking-widest uppercase mt-1">(BTS SIO SISR)</p>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-8 max-w-3xl">
                Ces projets constituent le dossier pour l'épreuve E5 — Support et mise à disposition de services informatiques (BTS SIO SISR). 
                L'oral porte sur la conception, le déploiement et la maintenance d'une infrastructure IT complète.
              </p>

              <div className="inline-flex flex-wrap gap-8 p-6 glass-card bg-black/40">
                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-blue-500" />
                  <div>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-tighter">Date Oral</p>
                    <p className="font-bold text-sm">13 MAI 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-blue-500" />
                  <div>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-tighter">Lieu</p>
                    <p className="font-bold text-sm">Lycée ENCP, Paris</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ExternalLink size={18} className="text-blue-500" />
                  <div>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-tighter">Statut</p>
                    <p className="font-bold text-sm text-emerald-500 tracking-widest uppercase">EN PRÉPARATION</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 grid grid-cols-1 gap-4">
              <div className="glass-card p-6 border-white/5 bg-white/[0.03]">
                 <p className="text-[10px] font-mono text-blue-500 uppercase tracking-widest mb-2">PROJET E5 — 01</p>
                 <h5 className="text-lg font-bold mb-3">Supervision avec Grafana</h5>
                 <p className="text-xs text-gray-500 leading-relaxed">Déploiement complet via Docker Compose. Prometheus + cAdvisor pour les métriques temps réel.</p>
              </div>
              <div className="glass-card p-6 border-white/5 bg-white/[0.03]">
                 <p className="text-[10px] font-mono text-blue-500 uppercase tracking-widest mb-2">PROJET E5 — 02</p>
                 <h5 className="text-lg font-bold mb-3">Architecture DMZ avec Docker</h5>
                 <p className="text-xs text-gray-500 leading-relaxed">Segmentation réseau 3 zones (WAN/DMZ/LAN). Pare-feu Debian avec règles iptables.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
