import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Globe, Zap, Grid, Code, Palette } from 'lucide-react';
import ConstructingCore from '../components/common/ConstructingCore';
import { SEO } from '../components/common/SEO';


const Philosophy = () => {
   const navigate = useNavigate();
   return (
      <div className="min-h-screen bg-background text-white animate-fadeIn">
         <SEO
            title="Filosofía Ghost Code | Ingeniería & Arte"
            description="Arquitectura inefable. Poder invisible. Conoce nuestra visión sobre la ingeniería-artista y la eliminación de fricción técnica."
         />
         {/* Hero Section */}

         <section className="min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto py-20">
            <div className="mb-8 flex items-center justify-center md:justify-start gap-4 text-primary">
               <span className="h-px w-8 md:w-12 bg-primary"></span>
               <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase">Filosofía Ingeniero-Artista</span>
            </div>
            <h1 className="text-[11vw] md:text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] tracking-tighter uppercase mb-12 text-center md:text-left break-words w-full">
               Arquitectura<br />Inefable.<br />
               <span className="text-primary italic">Poder Invisible.</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-12 items-center md:items-start justify-between text-center md:text-left">
               <p className="max-w-xl text-base md:text-xl text-white/60 font-light leading-relaxed">
                  El software debe funcionar de forma invisible, sin sobrecarga ni fricción. Construimos sistemas donde la limpieza de la base de datos se encuentra con la fluidez de la interfaz.
               </p>
               <div className="flex flex-col items-center md:items-start gap-4">
                  <div className="text-[10px] text-primary font-mono tracking-widest uppercase mb-2 animate-pulse">// Inicialización_Protocolo</div>
                  <button
                     onClick={() => navigate('/intake')}
                     className="group relative flex w-full md:min-w-[320px] items-center justify-between border border-primary/50 bg-primary/5 px-8 py-5 font-mono text-primary transition-all hover:bg-primary hover:text-background active:scale-[0.98]"
                  >
                     <div className="flex items-center gap-3">
                        <span className="text-xs opacity-70 group-hover:opacity-100">$</span>
                        <span className="text-sm font-bold tracking-[0.2em] uppercase truncate">iniciar_sistema</span>
                     </div>
                     <div className="flex items-center gap-4">
                        <span className="w-2 h-4 bg-primary animate-pulse group-hover:bg-background"></span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                     </div>
                  </button>
               </div>
            </div>
         </section>

         {/* Manifesto Section */}
         <section className="py-24 md:py-32 border-y border-white/5 bg-white/[0.01]">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
               <div className="md:col-span-4 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase md:sticky md:top-32 leading-none tracking-tighter">
                     El Manifiesto de<br className="hidden md:block" /> <span className="text-primary italic">Ghost Code</span>
                  </h2>
               </div>
               <div className="md:col-span-8 space-y-16 md:space-y-20">
                  {[
                     { id: '01. El Vacío', text: 'Creemos en eliminar lo innecesario hasta que solo quede el alma. El código no es solo lógica; es un fantasma que habita la máquina.' },
                     { id: '02. Sin Fricción', text: 'La experiencia del usuario es la manifestación física de la disciplina del backend. Si un usuario nota la arquitectura, la arquitectura ha fallado.' },
                     { id: '03. Permanencia', text: 'Construye para la posteridad, no para las tendencias. Las estructuras digitales deben poseer la misma integridad estructural que las catedrales de piedra.' }
                  ].map((item, idx) => (
                     <div key={idx} className="space-y-8 group">
                        <div className="flex items-center gap-4">
                           <span className="text-primary font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
                              [ {item.id} ]
                           </span>
                           <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
                        </div>
                        <p className="text-xl md:text-3xl text-white/90 leading-tight md:leading-snug font-light tracking-tight group-hover:text-white transition-colors">
                           {item.text}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Core Principles Section */}
         <section className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
               <h3 className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-primary mb-12 md:mb-20 text-center">// Principios_Fundamentales</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
                  {[
                     { icon: Globe, title: 'Ubicuidad', desc: 'Integración fluida en todos los entornos y plataformas.' },
                     { icon: Zap, title: 'Eficiencia', desc: 'Lógica sin desperdicios. Cada línea de código debe justificar su existencia funcional.' },
                     { icon: Grid, title: 'Simplicidad', desc: 'La reducción como máxima forma de sofisticación técnica y artística.' }
                  ].map((principle, idx) => (
                     <div key={idx} className={`p-8 md:p-12 border-b border-white/10 md:border-b-0 ${idx < 2 ? 'md:border-r' : ''} group hover:bg-primary/5 transition-all duration-500`}>
                        <principle.icon className="text-primary w-10 md:w-12 h-10 md:h-12 mb-8 md:mb-12 stroke-[1px] group-hover:scale-110 transition-transform" />
                        <h4 className="text-2xl font-bold uppercase mb-4 tracking-tighter text-white group-hover:text-primary transition-colors">{principle.title}</h4>
                        <p className="text-white/50 text-sm md:text-base leading-relaxed font-light">{principle.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Identity Cards Section */}
         <section className="py-24 md:py-32 bg-background relative">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8 md:gap-12">
               {/* Engineering Card */}
               <div className="flex-1 bg-white/[0.02] p-8 md:p-12 border border-white/10 relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
                  <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-primary/30 tracking-widest leading-none">0x44_LOGIC</div>
                  <Code className="text-primary w-10 h-10 mb-8 transition-transform group-hover:rotate-12" />
                  <h3 className="text-2xl md:text-3xl font-bold uppercase mb-6 tracking-tighter">El Ingeniero</h3>
                  <p className="text-white/60 mb-10 font-light leading-relaxed">
                     La limpieza de la base de datos es nuestro santuario. La lógica es el esqueleto invisible sobre el cual se construye toda belleza funcional.
                  </p>
                  <div className="p-4 md:p-6 bg-black/50 border border-white/5 font-mono text-[10px] md:text-xs relative group/terminal overflow-hidden flex flex-col gap-3">
                     <div className="flex justify-between items-center opacity-30">
                        <span className="tracking-widest">QUERY_MONITOR_V4.0</span>
                        <div className="flex gap-1.5">
                           <span className="w-1.5 h-1.5 rounded-full bg-green-500/50 shadow-[0_0_5px_rgba(34,197,94,0.3)]"></span>
                           <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shadow-[0_0_5px_rgba(234,179,8,0.3)]"></span>
                        </div>
                     </div>
                     <div className="text-primary/70 flex flex-wrap gap-2">
                        <span className="text-white/30">$</span>
                        <span className="break-all whitespace-pre-wrap overflow-hidden border-r-2 border-primary animate-pulse">
                           SELECT ghost_code FROM architecture WHERE friction = 0;
                        </span>
                     </div>
                     <div className="text-[10px] text-green-500/0 md:group-hover/terminal:text-green-500/60 transition-colors duration-700">
                        [SUCCESS] Resilient_Core returned 128ms
                     </div>
                  </div>
               </div>

               {/* Artist Card */}
               <div className="flex-1 bg-primary/[0.03] p-8 md:p-12 border border-primary/20 relative overflow-hidden group hover:bg-primary/[0.05] transition-all duration-500">
                  <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-primary/30 tracking-widest leading-none">0xAA_ART</div>
                  <Palette className="text-primary w-10 h-10 mb-8 transition-transform group-hover:-rotate-12" />
                  <h3 className="text-2xl md:text-3xl font-bold uppercase mb-6 tracking-tighter">El Artista</h3>
                  <p className="text-white/80 mb-10 font-light leading-relaxed">
                     La fluidez de la interfaz es nuestra poesía. La estética no es una capa superficial; es la realización final de la excelencia funcional absoluta.
                  </p>
                  <div className="flex items-center gap-6 opacity-30 group-hover:opacity-60 transition-opacity">
                     <div className="flex -space-x-4">
                        {[1, 2, 3].map(i => (
                           <div key={i} className="w-10 md:w-12 h-10 md:h-12 rounded-full border border-primary bg-primary/20 backdrop-blur-sm"></div>
                        ))}
                     </div>
                     <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Pure_Aesthetics</span>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Philosophy;