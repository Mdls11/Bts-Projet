import { motion } from 'motion/react';
import { Mail, Linkedin, MapPin, X, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <div className="inline-block border-b-2 border-purple-500 pb-2">
            <h2 className="text-purple-500 font-mono text-sm tracking-[0.3em] uppercase font-bold">Me contacter</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-4 space-y-10">
            <div className="flex items-center gap-6 p-10 glass-card bg-white/[0.02] border-white/5 rounded-[2.5rem]">
              <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center text-purple-400">
                <Mail size={28} />
              </div>
              <div>
                <p className="text-gray-500 text-[10px] font-mono uppercase tracking-[0.2em] mb-1">Email</p>
                <p className="font-bold text-sm tracking-wide">MOHAMEDLAROURA5@GMAIL.COM</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-10 glass-card bg-white/[0.02] border-white/5 rounded-[2.5rem]">
              <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center text-purple-400">
                <Linkedin size={28} />
              </div>
              <div>
                <p className="text-gray-500 text-[10px] font-mono uppercase tracking-[0.2em] mb-1">Linkedin</p>
                <p className="font-bold text-sm tracking-wide uppercase">Mohamed-Laroura</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-10 glass-card bg-white/[0.02] border-white/5 rounded-[2.5rem]">
              <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center text-purple-400">
                <MapPin size={28} />
              </div>
              <div>
                <p className="text-gray-500 text-[10px] font-mono uppercase tracking-[0.2em] mb-1">Localisation</p>
                <p className="font-bold text-sm tracking-wide uppercase font-black italic">ÎLE-DE-FRANCE</p>
              </div>
            </div>
          </div>

          {/* Right Side: Form and Profile Card */}
          <div className="lg:col-span-8 relative">
            <div className="glass-card bg-[#121212] border-white/5 rounded-[3rem] p-12 lg:p-16 relative">
              {/* Profile Badge Overlay */}
              <div className="absolute top-8 left-8 lg:top-12 lg:left-12 flex items-center gap-4 bg-[#1a1a1a] p-3 pr-6 rounded-2xl border border-white/5 z-20">
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" 
                    alt="Mohamed Laroura"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div>
                  <p className="text-xs font-black tracking-tight uppercase">Mohamed Laroura</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <p className="text-[10px] font-mono text-emerald-500 font-bold uppercase tracking-widest">OPEN TO HIRING</p>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-500 hover:text-white transition-colors cursor-pointer">
                  <X size={12} />
                </div>
              </div>

              <form className="mt-20 space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] font-bold">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Votre nom"
                      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-sm focus:outline-hidden focus:border-purple-500/50 transition-all font-light"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] font-bold">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="votre@email.com"
                      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-sm focus:outline-hidden focus:border-purple-500/50 transition-all font-light"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] font-bold">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Comment puis-je vous aider ?"
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-sm focus:outline-hidden focus:border-purple-500/50 transition-all font-light resize-none"
                  ></textarea>
                </div>

                <button className="w-full py-6 bg-purple-600 hover:bg-purple-500 rounded-2xl text-white font-black tracking-[0.2em] uppercase text-xs flex items-center justify-center gap-3 transition-all shadow-2xl shadow-purple-600/20 group">
                  Submit Request
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
