import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScroll } from '../hooks/useScroll';
const Hero3D = React.lazy(() => import('../components/3d/Hero3D'));
import { projects } from '../data/projects';
import { SEO } from '../components/common/SEO';
import { partners } from '../data/partners';
import { servicesHome } from '../data/services';
import GrowthArchitecture3D from '../components/3d/GrowthArchitecture3D';
import { AITerminal } from '../components/others/IATerminal';
import { cibersecurity, dimensionX, fullText, operationalInt, performanceProof, pillars, visualIdentity } from '../data/constants';

const Home = () => {
   const navigate = useNavigate();
   const { scrollY } = useScroll();
   const [displayText, setDisplayText] = useState('');

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
            title="Ingeniería de Software de Élite | Fantasma Digital"
            description="Transformamos ideas complejas en activos digitales de alto rendimiento. Ingeniería de software, ciberseguridad y arquitecturas escalables para empresas que exigen excelencia."
            schema={[
               {
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  "name": "Fantasma Digital",
                  "url": "https://fantasmadigital.dev",
                  "potentialAction": {
                     "@type": "SearchAction",
                     "target": "https://fantasmadigital.dev/solutions?q={search_term_string}",
                     "query-input": "required name=search_term_string"
                  }
               },
               {
                  "@context": "https://schema.org",
                  "@type": "ProfessionalService",
                  "name": "Fantasma Digital",
                  "url": "https://fantasmadigital.dev",
                  "telephone": "+503-7707-9798",
                  "priceRange": "$$$",
                  "address": {
                     "@type": "PostalAddress",
                     "addressLocality": "San Salvador",
                     "addressCountry": "SV"
                  },
                  "geo": {
                     "@type": "GeoCoordinates",
                     "latitude": 13.6929,
                     "longitude": -89.2182
                  },
                  "openingHoursSpecification": {
                     "@type": "OpeningHoursSpecification",
                     "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday"
                     ],
                     "opens": "09:00",
                     "closes": "18:00"
                  },
                  "sameAs": [
                     "https://www.facebook.com/p/Fantasma-Digital-61550038745296/",
                     "https://www.instagram.com/fantasmadigitalsv/",
                     "https://github.com/FantasmaDigital",
                     "https://www.tiktok.com/@fantasmadigitalsv"
                  ]
               }
            ]}
         />
         {/* Hero */}

         <section className="relative h-[85vh] lg:h-[90vh] flex flex-col items-center justify-center overflow-hidden">
            <React.Suspense fallback={null}>
               <Hero3D />
            </React.Suspense>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none opacity-[0.02] overflow-hidden" aria-hidden="true">
               <div className="flex flex-col items-center">
                  <span className="text-[25vw] md:text-[20vw] font-black leading-none uppercase tracking-tighter transition-all duration-700">
                     Fantasma
                  </span>
                  <span className="text-[25vw] md:text-[20vw] font-black leading-none uppercase tracking-tighter text-transparent stroke-white" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}>
                     Digital
                  </span>
               </div>
            </div>
            <div
               className="relative z-10 text-center max-w-4xl px-6 will-change-transform transition-transform duration-75 ease-out"
               style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            >
                <h1 className="font-display text-4xl md:text-7xl font-light leading-tight tracking-tight mb-8">
                   Tu negocio merece <span className="font-bold text-white">tecnología de primer nivel.</span> <span className="italic text-primary">Construido para no fallar.</span>
                </h1>
               <h2 className="font-display font-black text-5xl md:text-8xl leading-none text-white mb-8 tracking-tighter min-h-[1em]" aria-label="Software">
                  {displayText}
                  <span className="animate-pulse text-primary" aria-hidden="true">_</span>
               </h2>
               <div className="flex items-center justify-center gap-4 font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">
                  <img src="/logo.png" alt="Fantasma Digital Icon" className="w-6 h-6 object-contain opacity-20 mr-2 grayscale brightness-200" />
                  <span>Arquitectura Ghost Code</span>
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  <span>Ingeniería de Élite</span>
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
                  <span className="font-mono text-[10px] text-primary uppercase tracking-[0.4em] mb-4 block animate-pulse">// Aliados_Estratégicos</span>
                  <h3 className="font-display font-bold uppercase tracking-tighter">
                     <span className="line-through opacity-30 mr-4 text-white/50 text-2xl md:text-3xl lg:text-4xl">Clientes</span>
                     <span className="text-4xl md:text-5xl lg:text-6xl text-white">Alianzas</span>
                  </h3>
               </div>
               <p className="font-mono text-[9px] md:text-[10px] text-white/30 uppercase tracking-[0.3em] max-w-xl">
                  Empresas que ya confían en nuestra ingeniería para crecer sin límites.
               </p>
            </div>

            <div className="relative w-full overflow-hidden opacity-60">
               <div className="animate-marquee gap-8 md:gap-14 px-6">
                  {[...partners, ...partners].map((partner, idx) => (
                     <div key={`${partner.name}-${idx}`} className={`group relative transition-all duration-700 flex-shrink-0 ${idx >= partners.length ? 'md:hidden' : ''}`}>
                        <img
                           src={partner.image}
                           alt={partner.name}
                           loading="lazy"
                           decoding="async"
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

         {/* 03. CAPACIDADES HUD */}
         <section className="py-20 md:py-32 px-6 max-w-[1440px] mx-auto overflow-hidden border-b border-white/5">
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 gap-6 text-center md:text-left">
               <div className="max-w-2xl">
                  <span className="font-mono text-xs text-primary tracking-[0.4em] uppercase mb-4 block underline decoration-primary/30 underline-offset-8">¿En qué te podemos ayudar?</span>
                  <h2 className="font-display text-4xl md:text-6xl font-bold mt-6 leading-none text-white italic">
                     Lo que <span className="text-white/20">construimos.</span>
                  </h2>
               </div>
               <button
                  onClick={() => navigate('/solutions')}
                  className="w-full md:w-auto px-6 py-3 border border-white/10 hover:border-primary transition-all font-mono text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 group"
               >
                  Ver todos los servicios <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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

         {/* 04. DIRECCIÓN TÉCNICA */}
         <section className="py-20 md:py-32 px-6 max-w-[1440px] mx-auto border-b border-white/5 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
               <div className="w-full lg:w-1/3 relative group">
                  <div className="aspect-[3/4] overflow-hidden border border-white/10 bg-surface grayscale transition-all duration-700 group-hover:grayscale-0">
                     <img
                        src="/Founding Engineer.png"
                        alt="Lead Engineer - Jonathan Hernandez"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                     />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-primary/30 pointer-events-none"></div>
                  <div className="absolute -top-6 -left-6 w-32 h-32 border-l border-t border-primary/30 pointer-events-none"></div>
               </div>
               <div className="w-full lg:w-2/3">
                  <span className="font-mono text-xs text-primary tracking-[0.4em] uppercase mb-4 block underline decoration-primary/30 underline-offset-8">Dirección Técnica</span>
                  <h2 className="font-display text-4xl md:text-6xl font-bold mt-6 mb-8 leading-none italic">
                     Ingeniería <span className="text-white/20">con Rostro.</span>
                  </h2>
                  <div className="space-y-6 text-white/70 font-light text-lg leading-relaxed max-w-2xl">
                     <p>
                        Detrás de cada línea de código en <span className="text-white font-bold">Fantasma Digital</span> hay una obsesión por la seguridad y el rendimiento. Como Lead Engineer, mi enfoque no es solo construir software, sino blindar el futuro de tu operación.
                     </p>
                     <p>
                        Con certificación en <span className="text-primary italic">Cybersecurity (CS50CS)</span> y años de experiencia en arquitecturas escalables, transformo el riesgo tecnológico en una ventaja competitiva de lujo.
                     </p>
                  </div>
                  <div className="mt-12 flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                     <div className="flex flex-col">
                        <span className="font-display font-black text-2xl tracking-tighter uppercase">Jonathan Hernandez</span>
                        <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em]">Founding Engineer & Cybersecurity Expert</span>
                     </div>
                     <div className="h-px w-20 bg-white/10 hidden sm:block"></div>
                     <button
                        onClick={() => navigate('/intake')}
                        className="font-mono text-[10px] uppercase tracking-widest text-primary border-b border-primary/30 pb-1 hover:text-white hover:border-white transition-all"
                     >
                        Agendar Consultoría Directa
                     </button>
                  </div>
               </div>
            </div>
         </section>

         {/* 05. PROJECT GALLERY */}
         <section className="py-20 md:py-32 px-6 max-w-[1440px] mx-auto border-b border-white/5">
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 gap-6 text-center md:text-left">
               <div className="max-w-2xl">
                  <span className="font-mono text-xs text-primary tracking-[0.4em] uppercase mb-4 block underline decoration-primary/30 underline-offset-8">Lo que hemos construido</span>
                  <h2 className="font-display text-4xl md:text-6xl font-bold mt-6 leading-none italic">
                     Trabajo <span className="text-white/20">Real.</span>
                  </h2>
               </div>
               <button
                  onClick={() => navigate('/solutions')}
                  className="w-full md:w-auto px-6 py-3 border border-white/10 hover:border-primary transition-all font-mono text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 group"
               >
                  Ver portfolio completo <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
               </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               {projects.map((project, idx) => (
                  <div key={idx} className="group cursor-pointer" onClick={() => navigate(`/dossier/${project.slug}`)}>
                     <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-surface border border-white/5">
                        <img
                           src={project.image}
                           alt={project.title}
                           loading="lazy"
                           decoding="async"
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

         {/* 06. Dimensión X: Ingeniería Cognitiva y Visual */}
         <section className="py-32 px-6 bg-primary/[0.02] border-b border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
               <div className="lg:w-1/2 text-center lg:text-left">
                  <div className="inline-block px-3 py-1 border border-primary/20 bg-primary/5 rounded mb-8">
                     <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary">MOD_007: Dimensión X</span>
                  </div>
                  <h2 className="font-display text-4xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
                     Ingeniería <span className="text-primary italic">Cognitiva</span> & Visual.
                  </h2>
                  <p className="text-xl md:text-2xl text-white/50 font-light leading-snug tracking-tight mb-8">
                     Tu sitio web no es solo una vitrina — es tu mejor vendedor. Combinamos <span className="text-white font-bold">Modelado 3D Interactivo</span> con <span className="text-white font-bold">Inteligencia Artificial</span> para crear experiencias que convierten.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-12 text-left">
                     {dimensionX.map((spec, i) => (
                        <div key={i} className="border-l border-primary/20 pl-4 py-2 bg-white/[0.02]">
                           <div className="font-mono text-[8px] text-white/30 uppercase tracking-widest">{spec.label}</div>
                           <div className="font-display font-bold text-white tracking-widest text-xs mt-1">{spec.val}</div>
                        </div>
                     ))}
                  </div>

                  <p className="text-white/30 text-base mt-12 font-light italic hidden lg:block">
                     "Creamos activos digitales que no solo informan, sino que razonan y seducen."
                  </p>
               </div>

               <div className="lg:w-1/2 w-full">
                  <React.Suspense fallback={<div className="h-[500px] w-full bg-white/5 animate-pulse rounded-lg"></div>}>
                     <GrowthArchitecture3D />
                  </React.Suspense>
                  
                  {/* Decorative caption for 3D module */}
                  <div className="mt-6 flex items-center justify-between font-mono text-[9px] text-white/20 uppercase tracking-[0.2em] px-2">
                     <span>Module_ID: X-99</span>
                     <span>FANTASMA_CORE_READY</span>
                  </div>
               </div>
            </div>
            
            {/* Background elements for Dimension X */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(255,204,0,0.05)_0%,transparent_70%)] pointer-events-none"></div>
         </section>

         {/* 03. IDENTIDAD VISUAL */}
         <section className="py-24 md:py-32 px-6 bg-[#08080a] border-b border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
               <div className="lg:w-1/2">
                  <div className="inline-block px-3 py-1 border border-primary/20 bg-primary/5 rounded mb-8">
                     <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary">MOD_004: Identidad Visual</span>
                  </div>
                  <span className="font-mono text-[11px] text-primary tracking-[0.5em] uppercase mb-4 block underline decoration-primary/30 underline-offset-[12px]">Ingeniería de Marca</span>
                  <h2 className="font-display text-4xl md:text-7xl font-bold mt-10 leading-[0.9] tracking-tighter">
                     Sistemas <span className="text-primary italic">Visuales</span> de Alta Gama.
                  </h2>
                  <p className="text-white/50 text-xl font-light leading-relaxed mt-10 max-w-xl">
                     Tu logo es la primera impresión que nadie olvida. Construimos <span className="text-white font-bold tracking-tight">identidades de marca completas</span> que te hacen ver diferente, profesional y memorable — desde el primer día.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-16 border-t border-white/5 pt-10">
                     {visualIdentity.map((spec, i) => (
                        <div key={i} className="flex flex-col gap-1">
                           <span className="text-[8px] font-mono text-primary/40 uppercase tracking-[0.4em]">{spec.label}</span>
                           <span className="text-[14px] font-display font-medium text-white/80 uppercase tracking-widest">{spec.val || spec.label2}</span>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="lg:w-1/2 w-full">
                  <div className="relative group overflow-hidden border border-white/5 bg-surface aspect-[4/5] md:aspect-square">
                     <img 
                        src="/assets/brand-identity.png" 
                        alt="Parametric Identity Mockup" 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                     
                     {/* HUD OVERLAY */}
                     <div className="absolute inset-0 pointer-events-none z-10 p-8 flex flex-col justify-between font-mono">
                        <div className="flex justify-between items-start opacity-60">
                           <div className="space-y-1">
                              <div className="text-[10px] tracking-[0.4em] text-primary flex items-center gap-2 font-bold uppercase">
                                 <span className="w-2 h-2 bg-primary rotate-45 animate-pulse"></span>
                                 ASSET_SYSTEM: MOD_004_VI
                              </div>
                              <div className="text-[8px] text-white/50 uppercase tracking-widest leading-none mt-2">Parametric_Verified: OK</div>
                           </div>
                           <div className="text-right">
                              <span className="text-[8px] text-white/30 lowercase italic whitespace-nowrap tracking-tight">render_precision: infinity</span>
                           </div>
                        </div>
                        <div className="flex justify-between items-end">
                           <div className="space-y-1">
                              <div className="text-[7px] text-white/20 uppercase tracking-widest">Balance</div>
                              <div className="text-[12px] text-primary font-bold">黄金比 1.618</div>
                           </div>
                           <div className="text-right flex flex-col items-end gap-2">
                              <div className="w-32 h-[1px] bg-white/10"></div>
                              <div className="font-display font-black text-white/5 text-[40px] leading-none select-none tracking-tighter">
                                 CORE_VI
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="mt-8 flex items-center justify-between font-mono text-[9px] text-white/10 uppercase tracking-[0.3em] px-2 italic">
                     <span>Module_Ref: VI-DESIGN-004</span>
                     <span>Geometric_Verified: OK</span>
                  </div>
               </div>
            </div>
         </section>

         {/* 03. INTELIGENCIA OPERATIVA */}
         <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-b border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true"></div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
               <div className="lg:w-1/2">
                  <span className="font-mono text-xs text-primary tracking-[0.4em] uppercase mb-4 block underline decoration-primary/30 underline-offset-8">Inteligencia Operativa</span>
                  <h2 className="font-display text-4xl md:text-7xl font-bold mt-6 leading-tight tracking-tighter">
                     Más allá de la interfaz: <span className="text-primary italic">Sistemas Autónomos.</span>
                  </h2>
                  <p className="text-white/60 text-lg font-light leading-relaxed mt-8">
                     Imagina un sitio que responde preguntas, califica prospectos y agenda citas <span className="text-white font-bold">mientras duermes.</span> Con <span className="text-white font-bold">Agentes de IA</span> y marketing de precisión, tu infraestructura trabaja sola basándose en datos reales.
                  </p>

                  <div className="mt-12 space-y-6">
                     {operationalInt.map((item, i) => (
                        <div key={i} className="flex gap-4 items-start">
                           <div className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(255,204,0,0.5)]"></div>
                           <div>
                              <h4 className="font-bold uppercase text-xs tracking-widest text-white">{item.title}</h4>
                              <p className="text-white/40 text-[11px] mt-1">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="lg:w-1/2">
                  <AITerminal />
               </div>
            </div>
         </section>



         {/* 04. PILLARS */}
         <section className="py-20 md:py-32 px-6 max-w-[1440px] mx-auto border-b border-white/5">
            <div className="mb-16 md:mb-20 text-center md:text-left">
               <span className="font-mono text-xs text-primary tracking-[0.4em] uppercase mb-4 block underline decoration-primary/30 underline-offset-8">Por qué elegir Fantasma Digital</span>
               <h2 className="font-display text-3xl md:text-5xl font-bold max-w-2xl mt-6">Tecnología robusta. Resultados que se miden.</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
               {pillars.map((item) => (
                  <div key={item.id} className="group bg-surface p-8 lg:p-10 border-l border-white/5 hover:border-primary transition-all duration-500 flex flex-col gap-6 lg:gap-8 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/10 group-hover:text-primary transition-colors" aria-hidden="true">{item.id}</div>
                     <div className="text-primary">
                        <item.icon size={44} strokeWidth={1} aria-hidden="true" />
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
                  Cada día que tu sitio no está protegido es un riesgo real para tu negocio y tus clientes. No esperes a que algo falle para actuar.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
               {cibersecurity.map((item, idx) => (
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

                        <h3 className="text-lg font-bold uppercase mb-4 tracking-tighter group-hover:text-red-400 transition-colors">{item.title}</h3>
                        <p className="text-white/40 text-[11px] leading-relaxed font-light">{item.desc}</p>
                        <div className="mt-6 flex items-center gap-2">
                           <span className="font-mono text-[9px] text-red-400/40 uppercase tracking-widest">{item.statLabel}</span>
                           <div className="flex-1 h-px bg-red-400/10"></div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </section>

         {/* PERFORMANCE PROOF SECTION */}
         <section className="py-20 border-b border-white/5 bg-white/[0.01]">
            <div className="max-w-7xl mx-auto px-6">
               <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                  <div className="text-center lg:text-left">
                     <span className="font-mono text-[10px] text-primary tracking-[0.4em] uppercase mb-4 block underline decoration-primary/30 underline-offset-8">Rendimiento Extremo</span>
                     <h3 className="font-display text-4xl md:text-5xl font-bold italic tracking-tighter">Pura <span className="text-white/20">Ingeniería.</span></h3>
                     <p className="mt-4 font-mono text-[10px] text-white/30 uppercase tracking-widest">Puntuación real de despliegue en producción</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
                     {performanceProof.map((score, i) => (
                        <div key={i} className="flex flex-col items-center gap-4">
                           <div className={`w-20 h-20 rounded-full border-2 border-current ${score.color} flex items-center justify-center font-mono font-bold text-xl relative`}>
                              {score.val}
                              <div className="absolute inset-0 rounded-full animate-ping border border-current opacity-20"></div>
                           </div>
                           <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest text-center">{score.label}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>



         {/* 09. PHILOSOPHY TEASER */}
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
                     Comencemos <span className="opacity-40 italic">algo grande</span>
                  </h2>
                  <p className="mt-4 font-mono text-[10px] text-background/50 uppercase tracking-widest">Respondemos en menos de 24 horas hábiles. Sin compromiso.</p>
               </div>

               <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="hidden xl:block text-right mr-6">
                     <p className="font-mono text-[10px] text-background/40 uppercase tracking-widest">Tiempo estimado de respuesta</p>
                     <p className="font-mono text-xs font-bold text-background uppercase tracking-tighter">&lt; 24 Horas Hábiles</p>
                  </div>

                  <button
                     onClick={() => navigate('/intake')}
                     className="group relative px-10 py-5 bg-background text-primary font-mono text-sm font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                     aria-label="Agendar Consultoría de Arquitectura"
                  >
                     <span className="relative z-10 flex items-center gap-3">
                        Agendar Consultoría <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                     </span>
                     <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </button>
               </div>
            </div>

            {/* Bottom Edge Accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-black/10"></div>
         </section>
      </div>
   );
};

export default Home;