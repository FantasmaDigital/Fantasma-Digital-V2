import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Terminal, Cpu, Shield, Zap, CheckCircle, Code, Database, Server, ArrowRight } from 'lucide-react';

import { caseStudies } from '../data/caseStudies';

const ServiceCaseStudy = () => {
   const { slug } = useParams();
   const navigate = useNavigate();
   const data = caseStudies[slug as keyof typeof caseStudies];

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [slug]);

   if (!data) {
      return (
         <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-4xl font-bold text-white mb-4 font-display">Caso de Estudio No Encontrado</h1>
            <p className="text-white/50 font-mono text-sm mb-8">El registro arquitectónico solicitado no existe.</p>
            <button onClick={() => navigate('/solutions')} className="px-6 py-3 border border-primary/50 text-primary font-mono text-xs uppercase tracking-widest hover:bg-primary hover:text-background transition-colors">
               Volver a Soluciones
            </button>
         </div>
      );
   }

   return (
      <div className="min-h-screen bg-background text-white animate-fadeIn">
         {/* Header */}
         <div className="px-6 lg:px-20 py-8 lg:py-12 border-b border-white/10 bg-surface/30">
            <button
               onClick={() => navigate('/solutions')}
               className="group flex items-center gap-2 text-xs font-mono text-primary/60 hover:text-primary mb-6 lg:mb-8 transition-colors"
               aria-label="Volver a Soluciones"
            >
               <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
               VOLVER_A_SOLUCIONES
            </button>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
               <div className="w-full">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-mono text-primary mb-4">
                     <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                     ARCHIVO_CASO_DE_ESTUDIO
                  </div>
                  <h1 className="text-[8vw] lg:text-6xl font-black uppercase tracking-tighter mb-2 font-display leading-[0.9] break-words">{data.title}</h1>
                  <p className="text-lg lg:text-xl text-white/50 font-light font-display">{data.subtitle}</p>
               </div>
               <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                  {['SEGURO', 'VERIFICADO', 'DESPLEGADO'].map(tag => (
                     <span key={tag} className="px-2 py-1 border border-white/10 bg-white/5 text-[10px] font-mono text-white/40">{tag}</span>
                  ))}
               </div>
            </div>
         </div>

         {/* Main Content */}
         <div className="px-6 lg:px-20 py-12 lg:py-20 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-8 space-y-16 lg:space-y-20">
               <section>
                  <h2 className="font-mono text-xs text-primary uppercase tracking-widest mb-6 border-l-2 border-primary pl-4">01 // El Desafío</h2>
                  <p className="text-xl lg:text-2xl font-light leading-relaxed text-white/90 font-display">{data.challenge}</p>
               </section>

               <section>
                  <h2 className="font-mono text-xs text-primary uppercase tracking-widest mb-6 border-l-2 border-primary pl-4">02 // La Solución</h2>
                  <div className="bg-surface border border-white/10 p-6 lg:p-8 rounded-sm">
                     <p className="text-base lg:text-lg leading-relaxed text-white/70 mb-6">{data.solution}</p>
                     <div className="h-px w-full bg-white/5 mb-6"></div>
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {data.stack.map(tech => (
                           <div key={tech} className="flex items-center gap-2 text-sm font-mono text-white/60">
                              <Terminal size={14} className="text-primary shrink-0" /> {tech}
                           </div>
                        ))}
                     </div>
                  </div>
               </section>

               <section>
                  <h2 className="font-mono text-xs text-primary uppercase tracking-widest mb-6 border-l-2 border-primary pl-4">03 // Análisis de Impacto</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                     {data.results.map((res, i) => (
                        <div key={i} className="bg-white/[0.02] border border-white/10 p-6 hover:border-primary/30 transition-colors group">
                           <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-primary transition-colors font-display">{res.metric}</div>
                           <div className="text-[10px] lg:text-xs font-mono text-white/40 uppercase tracking-widest">{res.label}</div>
                        </div>
                     ))}
                  </div>
               </section>
            </div>

            <div className="lg:col-span-4 space-y-8">
               <div className="bg-primary text-background p-6 lg:p-8 rounded-sm lg:sticky lg:top-32">
                  <h3 className="font-bold text-xl lg:text-2xl uppercase mb-2 tracking-tight font-display">Desplegar esta Arquitectura</h3>
                  <p className="text-sm font-medium opacity-80 mb-8 leading-relaxed font-body">
                     ¿Necesitas resultados similares? Inicia una secuencia de proyecto con nuestro equipo de ingeniería.
                  </p>
                  <button
                     onClick={() => navigate('/intake')}
                     className="w-full py-4 bg-background text-primary font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2"
                     aria-label="Iniciar Proceso de Intake"
                  >
                     Iniciar Proyecto <ArrowRight size={14} />
                  </button>
               </div>

               <div className="p-6 lg:p-8 border border-white/10 bg-white/[0.02] rounded-sm">
                  <h3 className="font-mono text-xs text-white/40 uppercase tracking-widest mb-6">Contactos Técnicos</h3>
                  <div className="space-y-4">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                           <Cpu size={18} />
                        </div>
                        <div>
                           <div className="text-sm font-bold">Arquitecto Líder</div>
                           <div className="text-xs text-white/40">Nivel Senior</div>
                        </div>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                           <Shield size={18} />
                        </div>
                        <div>
                           <div className="text-sm font-bold">Seguridad Ops</div>
                           <div className="text-xs text-white/40">Responsable de Área</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ServiceCaseStudy;