import React from 'react';
import { PenTool, Cloud, Layers, Terminal } from 'lucide-react';
import { SEO } from '../components/common/SEO';


const Landing = () => {
   return (
      <div className="min-h-screen bg-background relative overflow-hidden animate-fadeIn">
         <SEO
            title="Software Escalaible & Artístico | Fantasma Digital"
            description="Evolucionamos la complejidad en simplicidad estética. Expertos en ingeniería de software a medida y arquitectura de alto rendimiento."
         />
         {/* Background Text */}

         <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-[0.03]">
            <h2 className="font-display font-black text-[15vw] leading-none text-white uppercase tracking-tighter mb-[-5vw]">Scalable</h2>
            <h2 className="font-display font-black text-[18vw] leading-none text-transparent stroke-white uppercase tracking-tighter mb-[-4vw]" style={{ WebkitTextStroke: '1px white' }}>Artful</h2>
         </div>

         <section className="relative min-h-screen flex flex-col items-center justify-center pt-20">
            <div className="relative z-10 text-center px-4 max-w-5xl">
               <h1 className="font-display font-black text-6xl md:text-9xl uppercase tracking-tighter leading-[0.9] mb-8">Software</h1>
               <div className="w-20 h-[2px] bg-primary mx-auto mb-10"></div>
               <p className="font-display text-2xl md:text-4xl font-light text-white/90 max-w-3xl mx-auto leading-tight mb-6">
                  Evolucionamos la complejidad en <span className="italic font-normal text-primary">simplicidad estética</span>.
               </p>
               <p className="font-mono text-sm text-white/40 max-w-xl mx-auto uppercase tracking-widest">
                  Expertos en ingeniería de software a medida.
               </p>
            </div>
         </section>

         <section className="py-32 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
               {[
                  { title: 'Engineered Scalability', icon: Layers, sub: 'SYS_LOAD: OPTIMAL' },
                  { title: 'Tailored Design', icon: PenTool, sub: 'UI_MODE: HIGH_END' },
                  { title: 'Cloud Sovereignty', icon: Cloud, sub: 'ENCR_LVL: AES_256' }
               ].map((item, idx) => (
                  <div key={idx} className="group relative bg-surface p-10 border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <div className="mb-12 text-primary">
                        <item.icon size={40} strokeWidth={1} />
                     </div>
                     <h3 className="font-display text-2xl font-bold mb-4 uppercase tracking-tight">{item.title}</h3>
                     <div className="font-mono text-[10px] text-white/30 tracking-tighter uppercase">{item.sub}</div>
                  </div>
               ))}
            </div>
         </section>

         <section className="py-32 text-center">
            <h2 className="font-display text-sm uppercase tracking-[0.5em] text-primary mb-4">The Engines</h2>
            <div className="flex justify-center gap-8 mt-12">
               <div className="w-32 h-32 rounded-full border border-white/10 bg-surface flex items-center justify-center hover:border-primary transition-colors cursor-pointer">
                  <Cloud size={48} className="text-white/40" />
               </div>
               <div className="w-40 h-40 rounded-full border border-white/10 bg-surface flex items-center justify-center hover:border-primary transition-colors cursor-pointer -mt-12">
                  <Terminal size={64} className="text-white/40" />
               </div>
               <div className="w-32 h-32 rounded-full border border-white/10 bg-surface flex items-center justify-center hover:border-primary transition-colors cursor-pointer">
                  <Layers size={48} className="text-white/40" />
               </div>
            </div>
         </section>
      </div>
   );
};

export default Landing;