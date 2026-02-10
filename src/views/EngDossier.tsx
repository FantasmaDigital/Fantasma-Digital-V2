import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Smartphone, Cpu, Layout, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';

const EngDossier = () => {
   const navigate = useNavigate();

   return (
      <div className="min-h-screen bg-[#0a0a0c] text-gray-100 pt-32 pb-20 px-6 lg:px-20 max-w-[1800px] mx-auto animate-fadeIn" style={{ backgroundImage: 'radial-gradient(rgba(250, 177, 110, 0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>

         {/* Title Section */}
         <section className="mb-12 lg:mb-20 border-l border-primary/30 pl-6 lg:pl-10 py-4 relative">
            <div className="absolute -left-[1px] top-0 w-[5px] h-full bg-primary/20"></div>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-8">
               <div className="max-w-4xl">
                  <span className="font-mono text-[9px] md:text-[10px] text-primary mb-3 block tracking-[0.3em] uppercase">REPOSITORIO // ACCESO NIVEL ALPHA</span>
                  <h2 className="text-[12vw] md:text-7xl lg:text-8xl font-black leading-[0.85] uppercase tracking-tighter italic font-display">
                     Ultimos Proyectos <br className="hidden md:block" />
                     <span className="flex flex-wrap items-baseline gap-4">
                        Desplegados
                        <span className="text-primary font-mono text-[4vw] md:text-4xl align-top not-italic opacity-80">v2.4</span>
                     </span>
                  </h2>
               </div>
               <div className="font-mono text-left lg:text-right text-[9px] md:text-[10px] text-primary/60 space-y-1 lg:mt-0">
                  <p>ESTADO: SISTEMAS_EN_LÍNEA</p>
                  <p>ENCRIPTACIÓN: END-TO-END</p>
               </div>
            </div>
         </section>

         {/* Project Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {projects.map((project, idx) => (
               <div
                  key={project.slug}
                  className="group relative bg-surface border border-white/10 hover:border-primary/40 transition-all duration-500 rounded-sm overflow-hidden flex flex-col cursor-pointer"
                  onClick={() => navigate(`/dossier/${project.slug}`)}
               >
                  {/* Image/Visual Area */}
                  <div className="aspect-video relative overflow-hidden bg-black">
                     <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>

                     {/* Floating Badge */}
                     <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-sm shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all z-10">
                        <span className="text-[10px] font-mono font-bold text-background uppercase">Ver Dossier</span>
                     </div>
                  </div>

                  {/* Info Area */}
                  <div className="p-6 lg:p-8 flex-grow flex flex-col gap-5">
                     <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] text-primary/60 tracking-widest uppercase">{project.industry}</span>
                        <span className="font-mono text-[10px] text-white/20">#{String(idx + 1).padStart(2, '0')}</span>
                     </div>
                     <div>
                        <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">{project.title}</h3>
                        <p className="text-[10px] font-mono text-white/40 mt-2 uppercase tracking-tighter line-clamp-1">{project.tech}</p>
                     </div>
                     <p className="text-xs lg:text-sm text-white/60 font-light leading-relaxed line-clamp-3 italic">
                        "{project.desc}"
                     </p>

                     {/* Action Bar */}
                     <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                        <div className="flex gap-4 opacity-30 group-hover:opacity-100 transition-opacity">
                           {idx === 0 && <Smartphone size={16} />}
                           {idx === 1 && <Cpu size={16} />}
                           {idx === 2 && <Layout size={16} />}
                        </div>
                        <div className="flex items-center gap-2 text-primary font-mono text-[10px] font-bold tracking-widest opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all">
                           EXPLORAR <ChevronRight size={14} />
                        </div>
                     </div>
                  </div>
               </div>
            ))}

            {/* Empty Spot / Coming Soon */}
            <div className="bg-surface/30 border border-white/5 border-dashed p-10 rounded-sm flex flex-col items-center justify-center text-center opacity-40 hover:opacity-100 transition-opacity group h-full min-h-[300px]">
               <Lock size={40} className="text-white/10 mb-4 group-hover:text-primary transition-colors" />
               <h4 className="font-mono text-[11px] uppercase tracking-widest text-white/20 group-hover:text-white transition-colors">Nuevo_Proyecto_en_Cola</h4>
               <p className="text-[10px] font-mono text-white/10 mt-3 uppercase tracking-widest italic">CIFRADO_PENDIENTE_...</p>
            </div>
         </div>

         {/* Call to Action Phrase & Button */}
         <section className="mt-24 lg:mt-40 py-16 lg:py-32 border-t border-white/10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary/50 to-transparent"></div>

            <div className="max-w-4xl mx-auto space-y-12 lg:space-y-16">
               <h3 className="text-[10vw] md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.9] font-display">
                  Tu arquitectura tecnológica <br className="hidden md:block" />
                  <span className="text-primary underline decoration-primary/20 underline-offset-8">podría ser la próxima</span> <br className="hidden md:block" />
                  en este repositorio
               </h3>

               <p className="text-white/40 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] max-w-2xl mx-auto leading-relaxed px-4">
                  Inicia una secuencia de ingeniería personalizada y despliega un sistema de alto rendimiento bajo el estandarte de Fantasma Digital.
               </p>

               <button
                  onClick={() => navigate('/intake')}
                  className="group relative bg-primary text-background px-8 md:px-14 py-5 font-mono font-black text-base md:text-xl uppercase hover:bg-white transition-all overflow-hidden flex items-center gap-4 mx-auto"
               >
                  <span className="relative z-10">[ INICIAR_NUEVA_SECUENCIA ]</span>
                  <div className="w-2 md:w-3 h-2 md:h-3 bg-background group-hover:bg-primary animate-pulse relative z-10"></div>

                  {/* Hover Background Effect */}
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
               </button>
            </div>
         </section>
      </div>
   );
};

export default EngDossier;