/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import EpreuveE5 from './components/EpreuveE5';
import Parcours from './components/Parcours';
import Alternance from './components/Alternance';
import TechWatch from './components/TechWatch';
import Contact from './components/Contact';

export default function App() {
  return (
    <main className="selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Parcours />
      <Alternance />
      <TechStack />
      <Projects />
      <EpreuveE5 />
      <TechWatch />
      <Contact />
      
      <footer className="py-12 border-t border-white/5 bg-black/40 text-center">
        <p className="text-gray-500 text-[10px] font-mono tracking-widest uppercase mb-4">
          © 2026 Mohamed Laroura — Portfolio Professionnel BTS SIO SISR
        </p>
        <div className="flex justify-center gap-4 text-xs font-mono text-gray-600">
          <span className="hover:text-blue-500 transition-colors cursor-pointer">MENTIONS LÉGALES</span>
          <span>•</span>
          <span className="hover:text-blue-500 transition-colors cursor-pointer">CONDITIONS GÉNÉRALES</span>
        </div>
      </footer>
    </main>
  );
}
