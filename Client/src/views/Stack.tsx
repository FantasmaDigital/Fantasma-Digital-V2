import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, Settings, Bolt, CheckCircle, X, Terminal, Cpu, Layers, Brain, Database, Cloud, Zap, Shield } from 'lucide-react';
import { servicesSolutions } from '../data/services';
import { caseStudies } from '../data/caseStudies';
import { SEO } from '../components/common/SEO';


const Stack = () => {
   const navigate = useNavigate();

   // Extract key metrics from case studies
   const stats = [
      { metric: '99.99%', label: 'Uptime Garantizado', context: 'Arquitectura Serverless' },
      { metric: '<30ms', label: 'Latencia Edge', context: 'Procesamiento Cercano' },
      { metric: '4x', label: 'Rendimiento Operativo', context: 'Optimización de Código' },
      { metric: '100%', label: 'Escalabilidad Elástica', context: 'Infraestructura como Código' }
   ];

   return (
      <div className="min-h-screen bg-background text-white pt-24 pb-32 px-6 lg:px-20 animate-fadeIn">
         <SEO
            title="Stack Tecnológico | Capacidades de Ingeniería"
            description="El motor técnico de Fantasma Digital: Microservicios, despliegue atómico y arquitecturas Zero-Trust para el rendimiento corporativo."
         />
         {/* Hero Section */}
         <div className="mb-20 max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6">
               <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
               NÚCLEO_DE_SISTEMA v4.0.2 // NEXO_OPERATIVO
            </div>
            <h1 className="text-[12vw] lg:text-7xl font-bold tracking-tight mb-6 font-display break-words leading-[0.85]">
               Arquitectura sin <span className="text-primary italic">Límites</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-3xl leading-relaxed">
               El Stack de Fantasma Digital no es solo un conjunto de herramientas; es el motor que orquestra
               nuestras soluciones, garantiza la soberanía de tus datos y escala tu visión corporativa.
            </p>
         </div>

         {/* Technical Core Diagnostics */}
         <div className="max-w-7xl mx-auto mb-24">
            <div className="flex items-center gap-4 mb-8">
               <div className="h-px flex-grow bg-white/10"></div>
               <h2 className="font-mono text-[10px] text-primary uppercase tracking-[0.4em]">Diagnóstico_de_Capacidades</h2>
               <div className="h-px flex-grow bg-white/10"></div>
            </div>

            <div className="rounded-xl border border-white/10 bg-surface overflow-hidden shadow-2xl">
               <div className="hidden md:grid grid-cols-12 border-b border-white/10 text-[10px] font-mono uppercase tracking-widest text-white/50 bg-white/5">
                  <div className="col-span-4 p-6">Capacidad Técnica</div>
                  <div className="col-span-4 p-6 border-l border-white/10 text-center">Protocolo Estándar</div>
                  <div className="col-span-4 p-6 border-l border-primary/20 bg-primary/5 text-primary text-center italic">Ingeniería Fantasma</div>
               </div>

               {[
                  { metric: 'Arquitectura', sub: 'Estructura Operativa', legacy: 'Monolitos rígidos / Legacy', modern: 'Microservicios de Alta Cohesión', stat: 'SOBERANÍA_DE_DATOS' },
                  { metric: 'Despliegue', sub: 'Entrega de Valor', legacy: 'Ciclos de lanzamiento manuales', modern: 'CI/CD con Despliegue Atómico', stat: '0_INTERRUPCIONES' },
                  { metric: 'Seguridad', sub: 'Blindaje Crítico', legacy: 'Seguridad Perimetral Básica', modern: 'Zero-Trust para Transacciones Fintech', stat: 'PROTECCIÓN_LVM_ACTIVA' },
                  { metric: 'Rendimiento', sub: 'Impacto Comercial', legacy: 'Latencia con fuga de rebote', modern: 'Ejecución en el Edge (Sub-30ms)', stat: 'MÁXIMA_CONVERSIÓN' }
               ].map((row, i) => (
                  <div key={i} className="flex flex-col md:grid md:grid-cols-12 border-b border-white/5 hover:bg-white/5 transition-colors group">
                     <div className="col-span-4 p-6 flex flex-col gap-1 border-b md:border-b-0 border-white/5">
                        <span className="text-white font-bold text-lg md:text-base tracking-tight">{row.metric}</span>
                        <span className="text-[9px] text-white/40 font-mono uppercase tracking-widest">{row.sub}</span>
                     </div>
                     <div className="col-span-4 p-6 md:border-l border-white/10 flex flex-col justify-center items-center text-white/30 text-sm italic gap-2 text-center">
                        <span className="md:hidden text-[9px] uppercase font-bold text-white/20 tracking-widest mb-1">Entorno Tradicional:</span>
                        {row.legacy}
                     </div>
                     <div className="col-span-4 p-6 md:border-l border-primary/10 flex flex-col justify-center items-center gap-2 bg-primary/[0.02] md:bg-transparent">
                        <span className="md:hidden text-[9px] uppercase font-bold text-primary/50 tracking-widest mb-1">Solución Optimizada:</span>
                        <span className="text-primary font-bold text-sm tracking-wide text-center uppercase">{row.modern}</span>
                        <div className="font-mono text-[9px] text-primary/80 bg-primary/10 px-3 py-1 rounded-sm border border-primary/20">
                           {row.stat}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Service Integration Nexus */}
         <div className="max-w-7xl mx-auto mb-24">
            <h2 className="text-4xl font-black mb-12 uppercase italic font-display">Capacidades en <span className="text-primary">Acción</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {servicesSolutions.slice(0, 6).map((service, i) => (
                  <div key={i} className="p-8 border border-white/10 bg-white/[0.02] hover:border-primary/50 transition-all group flex flex-col h-full relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl -mr-12 -mt-12 group-hover:bg-primary/20 transition-colors"></div>
                     <service.icon className="text-primary mb-6 group-hover:scale-110 transition-transform" size={40} />
                     <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors uppercase tracking-tight">{service.title}</h3>
                     <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
                     <div className="pt-6 border-t border-white/5">
                        <span className="font-mono text-[10px] text-primary/60 uppercase group-hover:text-primary transition-colors">Stack: {service.tags.join(' // ')}</span>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Performance Benchmarks Based on Case Studies */}
         <div className="max-w-7xl mx-auto mb-24">
            <div className="bg-surface border border-white/10 p-12 rounded-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
               <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                  <div className="lg:w-1/3">
                     <div className="flex items-center gap-3 text-primary mb-4 font-mono text-xs uppercase tracking-[0.3em]">
                        <BarChart3 size={16} /> Rendimiento Real
                     </div>
                     <h2 className="text-4xl font-black uppercase italic leading-none mb-6">Benchmarks de Éxito</h2>
                     <p className="text-white/60 text-sm leading-relaxed">
                        No hablamos de teoría. Estos son los indicadores clave que mantenemos en
                        todos nuestros proyectos de alta escala.
                     </p>
                  </div>
                  <div className="lg:w-2/3 grid grid-cols-2 gap-8 w-full">
                     {stats.map((stat, i) => (
                        <div key={i} className="space-y-2 border-l border-white/10 pl-6 hover:border-primary transition-colors">
                           <p className="text-4xl font-black italic tracking-tighter text-white">{stat.metric}</p>
                           <p className="text-[10px] font-mono text-primary uppercase tracking-widest">{stat.label}</p>
                           <p className="text-[9px] text-white/30 font-mono uppercase italic">{stat.context}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>

         {/* Strategic CTA */}
         <div className="max-w-7xl mx-auto text-center border-t border-white/10 pt-24 pb-12">
            <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-none uppercase tracking-tighter italic font-display">
               ¿Listo para <span className="text-primary italic">Desplegar?</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12">
               Convierte tu infraestructura en un activo estratégico. Deja que Fantasma Digital orqueste tu próximo nivel.
            </p>
            <button
               onClick={() => navigate('/intake')}
               className="bg-primary text-background px-12 py-6 font-mono font-black text-xl uppercase hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(250,177,110,0.3)]"
            >
               [ INICIAR_INTEGRACIÓN ]
            </button>
         </div>
      </div>
   );
};

export default Stack;