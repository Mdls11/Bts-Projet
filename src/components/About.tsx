import { motion } from 'motion/react';
import { 
  User, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Briefcase, 
  Mail, 
  Linkedin,
  CheckCircle2
} from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4">// 01 — À PROPOS</h2>
          <h3 className="text-5xl font-bold tracking-tight">Qui je suis, <br /><span className="gradient-text">ce que je construis.</span></h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <p className="text-xl text-gray-400 leading-relaxed">
              Étudiant en <span className="text-white font-bold">BTS SIO option SISR</span> à l'ESTIAM, promo 2024–2026. Passionné par l'infrastructure IT, je me spécialise dans l'administration système Linux et Windows, la conteneurisation Docker et les architectures réseau segmentées.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed">
              Mes projets BTS m'ont permis de déployer concrètement des solutions de <span className="text-white font-bold">monitoring avec Grafana</span>, un <span className="text-white font-bold">cloud privé Nextcloud</span>, un <span className="text-white font-bold">VPN WireGuard</span> et une <span className="text-white font-bold">architecture DMZ complète</span> sous Docker.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed">
              Je suis actuellement en <span className="text-white font-bold text-blue-400">alternance chez Nu3ge</span>, une entreprise de cloud, où j'applique ces compétences en environnement professionnel réel.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {['Docker', 'Linux', 'Grafana', 'WireGuard', 'Nextcloud', 'GLPI', 'Bash', 'MariaDB', 'Prometheus'].map((tool) => (
                <span key={tool} className="px-4 py-2 glass-card text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card p-0 overflow-hidden">
            <div className="bg-white/5 border-b border-white/10 p-6 flex items-center justify-between">
               <h4 className="font-mono text-[10px] tracking-widest uppercase text-gray-500">Profil Détail</h4>
               <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
               </div>
            </div>
            <div className="p-8 space-y-6">
              {[
                { label: 'Nom', value: 'Mohamed Laroura', icon: User },
                { label: 'Formation', value: 'BTS SIO SISR — ESTIAM', icon: GraduationCap },
                { label: 'Promo', value: '2024 – 2026', icon: Calendar },
                { label: 'Alternance', value: 'Nu3ge — Cloud', icon: Briefcase },
                { label: 'Localisation', value: 'Paris / Île-de-France', icon: MapPin },
                { label: 'Statut', value: 'En alternance', status: true },
              ].map((info) => (
                <div key={info.label} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    {info.icon && <info.icon size={14} className="text-gray-600" />}
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{info.label}</span>
                  </div>
                  <span className={`text-sm font-semibold flex items-center gap-2 ${info.status ? 'text-emerald-500' : 'text-white'}`}>
                    {info.value}
                    {info.status && <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />}
                  </span>
                </div>
              ))}
              <div className="pt-6 flex gap-4">
                <a href="mailto:Mohamedlaroura5@gmail.com" className="flex-1 p-3 flex items-center justify-center gap-2 glass-card text-[10px] font-mono tracking-widest uppercase hover:bg-white/10 transition-all">
                  <Mail size={14} /> Email
                </a>
                <a href="#" className="flex-1 p-3 flex items-center justify-center gap-2 glass-card text-[10px] font-mono tracking-widest uppercase hover:bg-white/10 transition-all">
                  <Linkedin size={14} /> Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
