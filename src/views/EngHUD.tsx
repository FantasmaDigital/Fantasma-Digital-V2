import React from 'react';
import { Database, Terminal, Layers } from 'lucide-react';

const EngHUD = () => {
   return (
      <div className="min-h-screen bg-[#040406] text-slate-300 font-display animate-fadeIn">
         <div className="max-w-[1440px] mx-auto px-6 lg:px-20 pt-8 pb-32">
            {/* Hero Section */}
            <section className="py-24 border-b border-white/10">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                  <div>
                     <div className="mb-6 inline-flex items-center gap-3 border border-primary/30 px-3 py-1 bg-primary/5">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Estado del Sistema: Activo</span>
                     </div>
                     <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter">
                        ARTESANÍA DIGITAL.<br />
                        <span className="text-transparent" style={{ WebkitTextStroke: '1px #fab16e' }}>PODER CORPORATIVO.</span>
                     </h1>
                  </div>
                  <div className="max-w-md pb-4 font-mono text-sm text-slate-400 border-l-2 border-primary pl-6">
                     No construimos sitios web; desplegamos infraestructuras de negocio.
                  </div>
               </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-20">
               <div className="flex items-center justify-between mb-12 border-l-4 border-primary pl-4">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">SOLUCIONES_DE_INGENIERÍA.EXE</h2>
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.3em]">/srv/solutions/core/</span>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                     { id: '001', title: 'Full-Stack', icon: Terminal, desc: 'Backend de alta resistencia para operaciones de misión crítica.', tags: ['NODE', 'PHP', 'TS'] },
                     { id: '002', title: 'Ecosistemas API', icon: Layers, desc: 'Capas de integración seguras y escalables.', tags: ['FINTECH', 'ERP', 'REST'] },
                     { id: '003', title: 'Refactorización de Élite', icon: Database, desc: 'Transformando la deuda técnica en activos de alto rendimiento.', tags: ['MOD', 'OPT', 'AUTO'] }
                  ].map((item) => (
                     <div key={item.id} className="relative bg-surface border border-white/10 hover:border-primary/50 transition-all group overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="flex justify-between items-center border-b border-white/10 px-4 py-2 font-mono text-[9px] bg-black/40">
                           <span className="text-primary">[ ID: {item.id} ]</span>
                           <span className="text-green-500">[ ACTIVO ]</span>
                        </div>
                        <div className="p-8">
                           <item.icon size={48} className="text-white/20 mb-6 group-hover:text-primary transition-colors" />
                           <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                           <p className="text-slate-400 text-sm leading-relaxed mb-8">{item.desc}</p>
                           <div className="flex gap-2">
                              {item.tags.map(tag => (
                                 <span key={tag} className="font-mono text-[9px] px-2 py-0.5 border border-white/10 bg-white/5">{tag}</span>
                              ))}
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </section>
         </div>
      </div>
   );
};

export default EngHUD;