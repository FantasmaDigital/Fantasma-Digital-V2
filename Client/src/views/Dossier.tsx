import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Terminal, Bolt, FileText, Smartphone, Server, Globe, Database, Shield, Layout, Package, Cpu, ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import { SEO } from '../components/common/SEO';

const Dossier = () => {
   const { slug } = useParams<{ slug: string }>();
   const navigate = useNavigate();
   const project = projects.find(p => p.slug === slug);

   useEffect(() => {
      if (!project && slug) {
         navigate('/404');
      }
      window.scrollTo(0, 0);
   }, [project, slug, navigate]);

   if (!project) return null;

   return (
      <div className="min-h-screen bg-background text-white lg:pb-20 animate-fadeIn">
         <SEO
            title={`${project.title} | Dossier de Ingeniería de Élite`}
            description={`Explora el despliegue técnico y la arquitectura de ${project.title}. Un activo digital de alto rendimiento diseñado por Fantasma Digital.`}
            ogImage={project.image}
            schema={{
               "@context": "https://schema.org",
               "@type": "SoftwareApplication",
               "name": project.title,
               "operatingSystem": "Web, iOS, Android",
               "applicationCategory": "BusinessApplication, DeveloperApplication",
               "description": project.desc,
               "provider": {
                  "@type": "Organization",
                  "name": "Fantasma Digital",
                  "url": "https://fantasmadigital.dev"
               },
               "softwareVersion": "2.4.0",
               "featureList": project.features.map(f => f.title).join(", "),
               "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock"
               }
            }}
         />
         {/* Navigation & Header */}
         <section className="relative pt-10 lg:pt-20 pb-10 lg:pb-20 px-6 text-center">
            <button
               onClick={() => navigate('/')}
               className="relative mb-6 md:mb-0 md:absolute md:top-24 md:left-12 flex items-center justify-center md:justify-start gap-2 font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-primary transition-colors group w-full md:w-auto"
            >
               <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
               Volver al Nexo
            </button>

            <div className="inline-block px-3 py-1 border border-primary/20 bg-primary/5 rounded mb-8">
               <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary">Archivo de Ingeniería: {project.title}</span>
            </div>
            <h1 className="font-display text-7xl md:text-9xl font-bold tracking-tighter mb-4">El Dossier</h1>
            <p className="font-mono text-xs text-white/30 uppercase tracking-[0.5em] mb-12">{project.subtitle}</p>

            <div className="relative max-w-5xl mx-auto bg-surface rounded-xl overflow-hidden border border-white/10 aspect-[16/9] shadow-2xl flex items-center justify-center group">
               <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
               <div className="relative z-10 flex flex-col items-center">
                  <Layout size={64} className="text-primary mb-6 opacity-80" />
                  <span className="font-mono text-primary/80 text-[10px] tracking-[0.4em] uppercase">[ ARCHIVO_SISTEMA_ACTIVOV ]</span>
               </div>
            </div>
         </section>

         {/* Metrics */}
         <section className="border-y border-white/5 bg-white/[0.02] py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8 text-center lg:text-left">
               {project.metrics.map((m, i) => (
                  <div key={i} className="flex flex-col gap-1 lg:border-l border-white/5 lg:pl-6">
                     <span className="font-mono text-[9px] uppercase text-white/40 tracking-widest">{m.label}</span>
                     <div className="flex items-baseline gap-2 justify-center lg:justify-start">
                        <span className="font-mono text-3xl font-medium text-primary">{m.val}</span>
                        <span className="font-mono text-xs text-primary/60 uppercase">{m.unit}</span>
                     </div>
                  </div>
               ))}
            </div>
         </section>

         {/* Overview */}
         <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-4 text-center md:text-left">
               <h2 className="text-3xl md:text-5xl font-bold uppercase md:sticky md:top-32 leading-none tracking-tighter italic">
                  Análisis <br /> <span className="text-primary">Estratégico</span>
               </h2>
            </div>
            <div className="md:col-span-8 space-y-16 md:space-y-20">
               {project.longDesc.map((text, i) => {
                  const hasPrefix = text.includes(':');
                  const prefix = hasPrefix ? text.split(':')[0] : `PILLAR_0${i + 1}`;
                  const content = hasPrefix ? text.split(':').slice(1).join(':').trim() : text;
                  
                  return (
                     <div key={i} className="space-y-8 group">
                        <div className="flex items-center gap-4">
                           <span className="text-primary font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold">
                              [ {prefix} ]
                           </span>
                           <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
                        </div>
                        <p className="text-xl md:text-3xl text-white/90 leading-tight md:leading-snug font-light tracking-tight group-hover:text-white transition-colors">
                           {content}
                        </p>
                     </div>
                  );
               })}
            </div>
         </section>

         {/* Dynamic Features */}
         <section className="py-24 px-6 bg-surface/30 border-t border-white/5">
            <div className="max-w-7xl mx-auto space-y-32">
               {project.features.map((feature, idx) => (
                  <div key={idx} className="grid lg:grid-cols-2 gap-16 items-start">
                     <div className={idx % 2 === 1 ? 'lg:order-2 space-y-12' : 'space-y-12'}>
                        <div>
                           <div className="flex items-center gap-4 mb-4">
                              <feature.icon className="text-primary" size={24} />
                              <span className="font-mono text-primary text-[10px] uppercase tracking-widest leading-none">Ingeniería Aplicada</span>
                           </div>
                           <h3 className="font-display text-3xl font-bold mb-6 italic underline decoration-primary/20 underline-offset-8">{feature.title}</h3>
                           <p className="text-white/60 leading-relaxed max-w-lg mb-8 text-lg">
                              {feature.desc}
                           </p>
                           <ul className="space-y-3 font-mono text-[10px] text-white/40 uppercase tracking-widest text-left">
                              {feature.items.map((item, i) => (
                                 <li key={i} className="flex items-center gap-3">
                                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                                    {item}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>

                     <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''} min-w-0`}>
                        <div className="bg-[#050507] rounded-xl border border-white/10 p-8 shadow-2xl relative overflow-hidden group w-full max-w-full">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[80px] rounded-full pointer-events-none"></div>

                           <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                              <div className="flex gap-2">
                                 <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
                                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30"></div>
                                 <div className="w-2.5 h-2.5 rounded-full bg-green-500/30"></div>
                              </div>
                              <span className="font-mono text-[10px] text-white/20 uppercase tracking-[0.3em]">{feature.filename}</span>
                           </div>

                           {feature.code ? (
                              <div className="font-mono text-xs space-y-2 opacity-80 leading-relaxed overflow-x-auto whitespace-pre w-full">
                                 {feature.code.split('\n').map((line, i) => (
                                    <div key={i} className="flex gap-4 min-w-max">
                                       <span className="text-white/10 w-4 text-right select-none">{i + 1}</span>
                                       <p className="text-white/80">{line}</p>
                                    </div>
                                 ))}
                              </div>
                           ) : feature.details.length > 0 ? (
                              <div className="space-y-6">
                                 {feature.details.map((detail, i) => (
                                    <div key={i} className="flex justify-between items-center text-xs font-mono group-hover:bg-white/5 p-2 transition-colors">
                                       <span className="text-white/40 uppercase tracking-widest">{detail.label}</span>
                                       <span className="text-primary font-bold">{detail.value}</span>
                                    </div>
                                 ))}
                                 <div className="w-full bg-white/5 h-[1px] mt-8 overflow-hidden">
                                    <div className="bg-primary h-full w-[85%] animate-pulse origin-left"></div>
                                 </div>
                              </div>
                           ) : null}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </section>

         {/* Quote */}
         <section className="py-32 px-6 text-center border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            <blockquote className="font-display text-4xl md:text-6xl font-medium leading-tight max-w-4xl mx-auto mb-12 italic text-white/90">
               "{project.quote.split(project.title).map((part, i) => (
                  <React.Fragment key={i}>
                     {part}
                     {i < project.quote.split(project.title).length - 1 && (
                        <span className="text-primary underline decoration-primary/30 underline-offset-8">{project.title}</span>
                     )}
                  </React.Fragment>
               ))}"
            </blockquote>
            <div className="flex items-center justify-center gap-4 text-white/60 font-mono text-[10px] tracking-[0.4em] uppercase">
               <div className="w-12 h-px bg-white/10"></div>
               <span>{project.quoteAuthor}</span>
               <div className="w-12 h-px bg-white/10"></div>
            </div>
         </section>
      </div>
   );
};

export default Dossier;