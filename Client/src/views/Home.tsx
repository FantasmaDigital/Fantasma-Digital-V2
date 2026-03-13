import React, { useState, useEffect } from 'react';
import { ArrowRight, Activity, PenTool, Cloud, Terminal, Database, Layers, FileText, Cpu, Shield, ChevronRight, Handshake, Zap, BarChart3, Building2, ExternalLink, Palette, Brain, ShoppingCart, Smartphone, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TypedLine } from '../components/common/TypedLine';
import { useScroll } from '../hooks/useScroll';
import { projects } from '../data/projects';
import { SEO } from '../components/common/SEO';

import { partners } from '../data/partners';
import { servicesHome } from '../data/services';

const Home = () => {
   const navigate = useNavigate();
   const { scrollY } = useScroll();
   const [displayText, setDisplayText] = useState('');
   const fullText = "SOFTWARE";

   useEffect(() => {
      let currentIndex = 0;
      const startDelay = setTimeout(() => {
         const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
               setDisplayText(fullText.slice(0, currentIndex));
               currentIndex++;
            } else {
               clearInterval(interval);
            }
         }, 150);
         return () => clearInterval(interval);
      }, 500);

      return () => clearTimeout(startDelay);
   }, []);

   return (
      <div className="relative animate-fadeIn">
         <SEO
            title="Ingeniería de Software & Diseño Web de Alta Gama"
            description="Agencia de ingeniería de software en El Salvador. Especialistas en arquitecturas escalables, diseño inefable y soluciones técnicas de vanguardia."
            schema={{
               "@context": "https://schema.org",
               "@type": "Organization",
               "name": "Fantasma Digital",
               "url": "https://fantasmadigital.dev",
               "logo": "https://fantasmadigital.dev/logo.png",
               "sameAs": [
                  "https://www.facebook.com/p/Fantasma-Digital-61550038745296/",
                  "https://www.instagram.com/fantasmadigitalsv/",
                  "https://github.com/FantasmaDigital",
                  "https://www.tiktok.com/@fantasmadigitalsv"
               ],
               "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+503-7707-9798",
                  "contactType": "customer service",
                  "areaServed": "SV",
                  "availableLanguage": "Spanish"
               }
            }}
         />
         {/* Hero */}

         <section className="relative h-[75vh] lg:h-[90vh] flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none opacity-[0.02] overflow-hidden" aria-hidden="true">
               <h1 className="flex flex-col items-center">
                  <span className="text-[25vw] md:text-[20vw] font-black leading-none uppercase tracking-tighter transition-all duration-700">
                     Fantasma
                  </span>
                  <span className="text-[25vw] md:text-[20vw] font-black leading-none uppercase tracking-tighter text-transparent stroke-white" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}>
                     Digital
                  </span>
               </h1>
            </div>

            <div
               className="relative z-10 text-center max-w-4xl px-6 will-change-transform transition-transform duration-75 ease-out"
               style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            >
               <h1 className="font-display text-4xl md:text-7xl font-light leading-tight tracking-tight mb-8">
                  Evolucionamos la <span className="font-bold text-white">complejidad</span> en <span className="italic text-primary">simplicidad estética.</span>
               </h1>
               <h2 className="font-display font-black text-5xl md:text-8xl leading-none text-white mb-8 tracking-tighter min-h-[1em]" aria-label="Software">
                  {displayText}
                  <span className="animate-pulse text-primary" aria-hidden="true">_</span>
               </h2>
               <div className="flex items-center justify-center gap-4 font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">
                  <img src="/logo.png" alt="Fantasma Digital Icon" className="w-6 h-6 object-contain opacity-20 mr-2 grayscale brightness-200" />
                  <span>Ghost Code Architecture</span>
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  <span>High-End Engineering</span>
               </div>
            </div>

            <div
               className="absolute bottom-10 flex flex-col items-center gap-4 animate-bounce will-change-transform will-change-opacity"
               aria-hidden="true"
               style={{
                  transform: `translateY(${scrollY * 0.5}px)`,
                  opacity: Math.max(0, 1 - scrollY / 300)
               }}
            >
               <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">Deslizar</span>
               <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
            </div>
         </section>

         {/* 01. PARTNERS MARQUEE */}
         <section className="py-16 md:py-20 bg-black/50 border-y border-white/5 overflow-hidden">
            <style>
               {`
                  @keyframes marquee {
                     0% { transform: translateX(0); }
                     100% { transform: translateX(-50%); }
                  }
                  .animate-marquee {
                     display: flex;
                     width: max-content;
                     animation: marquee 30s linear infinite;
                  }
                  @media (min-width: 768px) {
                     .animate-marquee {
                        animation: none;
                        width: 100%;
                        justify-content: center;
                        flex-wrap: wrap;
                     }
                  }
               `}
            </style>
            <div className="max-w-[1440px] mx-auto px-6 mb-12 flex flex-col items-center text-center gap-6">
               <div className="w-full">
                  <span className="font-mono text-[10px] text-primary uppercase tracking-[0.4em] mb-4 block animate-pulse">// Trusted_By</span>
                  <h3 className="font-display font-bold uppercase tracking-tighter">
                     <span className="line-through opacity-30 mr-4 text-white/50 text-2xl md:text-3xl lg:text-4xl">Clientes</span>
                     <span className="text-4xl md:text-5xl lg:text-6xl text-white">Alianzas</span>
                  </h3>
               </div>
               <p className="font-mono text-[9px] md:text-[10px] text-white/30 uppercase tracking-[0.3em] max-w-xl">
                  Sistemas desplegados para líderes de industria en entornos críticos y de alta exigencia.
               </p>
            </div>

            <div className="relative w-full overflow-hidden opacity-60">
               <div className="animate-marquee gap-8 md:gap-24 px-6">
                  {[...partners, ...partners].map((partner, idx) => (
                     <div key={`${partner.name}-${idx}`} className={`group relative transition-all duration-700 flex-shrink-0 ${idx >= partners.length ? 'md:hidden' : ''}`}>
                        <img
                           src={partner.image}
                           alt={partner.name}
                           className={`h-12 md:h-16 w-44 md:w-48 object-contain transition-all duration-700 brightness-0 invert opacity-40 group-hover:opacity-100`}
                        />
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 font-mono text-[8px] text-primary opacity-0 group-hover:opacity-40 transition-opacity tracking-widest whitespace-nowrap uppercase">
                           {partner.name}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* 02. CAPACIDADES HUD */}
         <section className="py-20 md:py-32 px-6 max-w-[1440px] mx-auto overflow-hidden border-b border-white/5">
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 gap-6 text-center md:text-left">
               <div className="max-w-2xl">
                  <span className="font-mono text-xs text-primary tracking-[0.4em] uppercase mb-4 block underline decoration-primary/30 underline-offset-8">Ingeniería de Servicios</span>
                  <h2 className="font-display text-4xl md:text-6xl font-bold mt-6 leading-none text-white italic">
                     Nuestras <span className="text-white/20">Capacidades.</span>
                  </h2>
               </div>
               <button
                  onClick={() => navigate('/solutions')}
                  className="w-full md:w-auto px-6 py-3 border border-white/10 hover:border-primary transition-all font-mono text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 group"
               >
                  Ver Catálogo Completo <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {servicesHome.slice(0, 6).map((item) => (
                  <div key={item.id} onClick={() => navigate(`/solutions/${item.slug}`)} className="group relative bg-surface border border-white/5 p-8 border-l-2 hover:border-primary/50 transition-all cursor-pointer overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <div className="flex justify-between items-center mb-6">
                        <item.icon className="text-white/20 group-hover:text-primary transition-colors" size={32} strokeWidth={1} />
                        <span className="font-mono text-[8px] text-white/20">MOD_0{item.id}</span>
                     </div>
                     <h3 className="font-display text-lg font-bold mb-2 uppercase tracking-tight group-hover:text-white transition-colors">{item.title}</h3>
                     <p className="text-white/40 text-xs font-light leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </section>

         {/* 03. PROJECT GALLERY */}
         <section className="py-20 md:py-32 px-6 max-w-[1440px] mx-auto border-b border-white/5">
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 gap-6 text-center md:text-left">
               <div className="max-w-2xl">
                  <span className="font-mono text-xs text-primary tracking-[0.4em] uppercase mb-4 block underline decoration-primary/30 underline-offset-8">Galería de Despliegues</span>
                  <h2 className="font-display text-4xl md:text-6xl font-bold mt-6 leading-none italic">
                     Proyectos <span className="text-white/20">Recientes.</span>
                  </h2>
               </div>
               <button
                  onClick={() => navigate('/solutions')}
                  className="w-full md:w-auto px-6 py-3 border border-white/10 hover:border-primary transition-all font-mono text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 group"
               >
                  Ver Todo el Portfolio <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
               </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               {projects.map((project, idx) => (
                  <div key={idx} className="group cursor-pointer" onClick={() => navigate(`/dossier/${project.slug}`)}>
                     <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-surface border border-white/5">
                        <img
                           src={project.image}
                           alt={project.title}
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                        <div className="absolute top-4 right-4 px-2 py-1 bg-primary/10 border border-primary/20 backdrop-blur-md">
                           <span className="font-mono text-[8px] text-primary uppercase tracking-widest font-bold">{project.industry}</span>
                        </div>
                     </div>
                     <h4 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                     <p className="text-white/40 text-[11px] font-mono mb-4 uppercase tracking-tighter">{project.tech}</p>
                     <p className="text-white/60 text-sm font-light leading-relaxed md:opacity-0 group-hover:opacity-100 transition-all duration-500 transform md:translate-y-2 group-hover:translate-y-0">{project.desc}</p>
                  </div>
               ))}
            </div>
         </section>

         {/* 04. PILLARS */}
         <section className="py-20 md:py-32 px-6 max-w-[1440px] mx-auto border-b border-white/5">
            <div className="mb-16 md:mb-20 text-center md:text-left">
               <span className="font-mono text-xs text-primary tracking-[0.4em] uppercase mb-4 block underline decoration-primary/30 underline-offset-8">Pilares de Excelencia</span>
               <h2 className="font-display text-3xl md:text-5xl font-bold max-w-2xl mt-6">Arquitectura Invisible. Resultados Tangibles.</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
               {[
                  { id: '01', icon: Activity, title: 'Escalabilidad de Ingeniería', desc: 'Arquitectura impulsada por el rendimiento construida para un crecimiento infinito. Creamos sistemas que evolucionan a medida que tu base de usuarios explota.' },
                  { id: '02', icon: PenTool, title: 'Diseño a Medida', desc: 'UI/UX de alta gama que transforma la complejidad en belleza. Cerramos la brecha entre la lógica técnica y la intuición humana.' },
                  { id: '03', icon: Cloud, title: 'Soberanía Cloud', desc: 'Infraestructura segura, soberana y soluciones cloud-native. Control total sobre tus activos de datos con paradigmas modernos de devops.' }
               ].map((item) => (
                  <div key={item.id} className="group bg-surface p-8 lg:p-10 border-l border-white/5 hover:border-primary transition-all duration-500 flex flex-col gap-6 lg:gap-8 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/10 group-hover:text-primary transition-colors" aria-hidden="true">{item.id}</div>
                     <div className="text-primary">
                        <item.icon size={40} md:size={48} strokeWidth={1} aria-hidden="true" />
                     </div>
                     <div className="flex flex-col gap-4">
                        <h3 className="font-display text-xl lg:text-2xl font-bold tracking-tight">{item.title}</h3>
                        <p className="text-white/60 leading-relaxed font-light text-sm">{item.desc}</p>
                     </div>
                     <button
                        onClick={() => navigate(item.id === '01' ? '/stack' : item.id === '02' ? '/philosophy' : '/ecosystem')}
                        className="mt-auto font-mono text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:text-primary transition-colors"
                        aria-label={`Descubrir más sobre ${item.title}`}
                     >
                        {item.id === '01' ? 'Ver Stack' : item.id === '02' ? 'Leer Filosofía' : 'Ver Ecosistema'} <ArrowRight size={14} />
                     </button>
                  </div>
               ))}
            </div>
         </section>

         {/* 05. CYBERSECURITY & WEB AUDIT */}
         <section className="py-20 md:py-32 px-6 max-w-[1440px] mx-auto border-b border-white/5 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true"></div>

            <div className="mb-16 md:mb-20 text-center md:text-left relative z-10">
               <span className="font-mono text-xs text-red-400 tracking-[0.4em] uppercase mb-4 block underline decoration-red-400/30 underline-offset-8">Seguridad Digital</span>
               <h2 className="font-display text-3xl md:text-5xl font-bold max-w-3xl mt-6 leading-tight">
                  La Auditoría Web no es Opcional. Es <span className="text-red-400 italic">Crítica.</span>
               </h2>
               <p className="text-white/60 text-base md:text-lg font-light leading-relaxed mt-6 max-w-2xl">
                  En un ecosistema digital donde las brechas de seguridad cuestan millones, la auditoría proactiva y el hardening son la diferencia entre la resiliencia y el colapso.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
               {[
                  {
                     icon: Shield,
                     title: 'Auditoría de Vulnerabilidades',
                     desc: 'Escaneo profundo de vectores de ataque, identificación de CVEs y análisis de superficie expuesta.',
                     stat: '99.9%',
                     statLabel: 'Detección'
                  },
                  {
                     icon: FileText,
                     title: 'Cumplimiento Normativo',
                     desc: 'GDPR, ISO 27001, SOC 2. Aseguramos que tu infraestructura cumpla con estándares internacionales.',
                     stat: '100%',
                     statLabel: 'Compliance'
                  },
                  {
                     icon: Lock,
                     title: 'Pentesting & Hardening',
                     desc: 'Simulación de ataques reales, fortificación de endpoints y eliminación de configuraciones inseguras.',
                     stat: '24/7',
                     statLabel: 'Protección'
                  },
                  {
                     icon: Activity,
                     title: 'Monitoreo Continuo',
                     desc: 'Detección de anomalías en tiempo real, alertas automáticas y respuesta ante incidentes.',
                     stat: '<5min',
                     statLabel: 'Respuesta'
                  }
               ].map((item, idx) => (
                  <div key={idx} className="group bg-surface border border-red-500/10 p-6 lg:p-8 hover:border-red-400/30 transition-all duration-500 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>

                     <div className="relative z-10">
                        <div className="flex items-start justify-between mb-6">
                           <div className="w-12 h-12 rounded bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                              <item.icon className="text-red-400" size={24} strokeWidth={1.5} />
                           </div>
                           <div className="text-right">
                              <div className="font-display text-2xl font-bold text-red-400">{item.stat}</div>
                              <div className="font-mono text-[8px] text-white/30 uppercase tracking-widest">{item.statLabel}</div>
                           </div>
                        </div>

                        <h3 className="font-display text-base lg:text-lg font-bold mb-3 leading-tight">{item.title}</h3>
                        <p className="text-white/50 text-xs leading-relaxed font-light">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>

            <div className="mt-16 text-center relative z-10">
               <div className="inline-flex items-center gap-4 bg-red-500/5 border border-red-500/20 px-8 py-4 rounded-sm">
                  <Shield className="text-red-400" size={24} />
                  <div className="text-left">
                     <p className="font-display font-bold text-white text-sm">¿Cuándo fue tu última auditoría de seguridad?</p>
                     <p className="font-mono text-[10px] text-white/40 uppercase tracking-wider mt-1">Solicita una evaluación sin costo</p>
                  </div>
                  <button
                     onClick={() => navigate('/intake')}
                     className="ml-4 px-6 py-3 bg-red-500 hover:bg-red-400 text-white font-mono text-[10px] uppercase tracking-widest transition-colors font-bold"
                  >
                     Auditar Ahora
                  </button>
               </div>
            </div>
         </section>

         {/* 07. PHILOSOPHY TEASER */}
         <section className="py-20 md:py-24 bg-surface border-y border-white/5 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
               <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <div className="inline-block px-3 py-1 border border-primary/20 bg-primary/5 rounded mb-6">
                     <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary">Ghost Code Manifesto</span>
                  </div>
                  <h3 className="font-display text-3xl md:text-6xl font-bold mb-6 leading-none">
                     El software más potente es el que <span className="text-white/20">nunca ves.</span>
                  </h3>
                  <p className="text-white/60 text-base md:text-lg font-light leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
                     Creemos en eliminar lo innecesario hasta que solo quede el alma. El código no es solo lógica; es un fantasma que habita la máquina con precisión perfecta.
                  </p>
                  <button
                     onClick={() => navigate('/philosophy')}
                     className="group flex items-center justify-center md:justify-start gap-4 text-primary font-mono text-sm uppercase tracking-widest hover:text-white transition-colors"
                     aria-label="Decodificar Filosofía"
                  >
                     [ Decodificar Filosofía ]
                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
               </div>
               <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="relative w-48 h-48 md:w-96 md:h-96 border border-white/10 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]" aria-hidden="true">
                     <div className="absolute inset-0 border border-dashed border-white/10 rounded-full scale-90"></div>
                     <div className="absolute inset-0 border border-white/5 rounded-full scale-75"></div>
                     <div className="font-mono text-[8px] md:text-[10px] text-white/30 tracking-[0.2em] uppercase">Arquitectura Inefable</div>
                  </div>
               </div>
            </div>
         </section>

         {/* 08. INTAKE TERMINAL */}
         <section className="py-32 px-6">
            <div className="max-w-4xl mx-auto">
               <div className="bg-[#0a0a0c] border border-white/10 rounded-lg overflow-hidden shadow-2xl">
                  <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/10">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                     </div>
                     <div className="font-mono text-[10px] text-white/30">root@fantasma:~/intake</div>
                  </div>
                  <div className="p-5 md:p-8 font-mono text-[11px] md:text-sm space-y-4">
                     <div className="text-white/60 flex gap-2 md:gap-3">
                        <span className="text-green-500">➜</span>
                        <span className="text-blue-400">~</span>
                        <TypedLine text="initialize_project_sequence --force" speed={40} />
                     </div>
                     <div className="text-white/80 space-y-1 pl-3 md:pl-4 border-l border-white/10 my-4">
                        <TypedLine text="[INFO] Establishing secure... " delay={2000} speed={30} />
                        <TypedLine text="[INFO] Allocating resources... " delay={3500} speed={30} />
                        <TypedLine text="[INFO] Loading protocols... " delay={5000} speed={30} />
                        <TypedLine text="[SUCCESS] System ready." delay={6500} speed={30} className="text-primary" />
                     </div>
                     <div className="pt-2 md:pt-4">
                        <p className="mb-6 text-white text-base md:text-lg">¿Estás listo para desplegar tu visión?</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                           <button
                              onClick={() => navigate('/intake')}
                              className="bg-primary text-background px-6 py-3 md:py-2 font-bold hover:bg-white transition-colors text-center"
                              aria-label="Iniciar Secuencia de Proyecto"
                           >
                              [ Y ] INICIAR
                           </button>
                           {/* <button
                              onClick={() => navigate('/deployed')}
                              className="border border-white/20 text-white/50 px-6 py-3 md:py-2 hover:text-white transition-colors text-center"
                              aria-label="Verificar Estado de Despliegue"
                           >
                              Verificar Estado
                           </button> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* 09. INTAKE CTA STRIP */}
         <section className="bg-primary py-24 px-6 relative overflow-hidden group">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(0,0,0,0.2)_0%,transparent_50%)]"></div>
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            </div>

            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
               <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 mb-4 font-mono text-xs font-bold uppercase tracking-[0.4em] text-background/60">
                     System Status: Ready for Deployment
                  </div>
                  <h2 className="font-display text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none text-background">
                     Iniciar <span className="opacity-40 italic">Protocolo</span>
                  </h2>
                  <p className="mt-4 font-mono text-[10px] text-background/50 uppercase tracking-widest">Asegura tu bloque de ingeniería antes del próximo sprint.</p>
               </div>

               <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="hidden xl:block text-right mr-6">
                     <p className="font-mono text-[10px] text-background/40 uppercase tracking-widest">Tiempo estimado de respuesta</p>
                     <p className="font-mono text-xs font-bold text-background uppercase tracking-tighter">&lt; 24 Horas Hábiles</p>
                  </div>

                  <button
                     onClick={() => navigate('/intake')}
                     className="group relative px-10 py-5 bg-background text-primary font-mono text-sm font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                     aria-label="Iniciar Secuencia de Proyecto"
                  >
                     <span className="relative z-10 flex items-center gap-3">
                        Iniciar Secuencia <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                     </span>
                     <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </button>
               </div>
            </div>

            {/* Bottom Edge Accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-black/10"></div>
         </section>

         {/* FOOTER CTA */}
         <section className="py-24 md:py-40 px-6 max-w-[1440px] mx-auto text-center border-t border-white/5">
            <h2 className="font-display text-4xl md:text-7xl lg:text-8xl font-bold mb-12 tracking-tighter">¿Listo para irrumpir en la <span className="italic text-primary">industria?</span></h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
               <button
                  onClick={() => navigate('/intake')}
                  className="w-full md:w-auto px-12 py-5 bg-primary text-background font-display font-bold text-lg uppercase tracking-wider rounded-sm hover:scale-105 transition-transform"
                  aria-label="Iniciar un Proyecto"
               >
                  Iniciar Proyecto
               </button>
               <button
                  className="w-full md:w-auto px-12 py-5 border border-white/20 font-display font-bold text-lg uppercase tracking-wider rounded-sm hover:bg-white/5 transition-colors"
                  aria-label="Descargar Método"
               >
                  Descargar Método
               </button>
            </div>
         </section>
      </div>
   );
};

export default Home;