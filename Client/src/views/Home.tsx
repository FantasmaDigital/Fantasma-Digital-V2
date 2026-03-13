import React, { useState, useEffect } from 'react';
import { ArrowRight, Activity, PenTool, Cloud, Terminal, Database, Layers, FileText, Cpu, Shield, ChevronRight, Handshake, Zap, BarChart3, Building2, ExternalLink, Palette, Brain, ShoppingCart, Smartphone, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TypedLine } from '../components/common/TypedLine';
import { useScroll } from '../hooks/useScroll';
const Hero3D = React.lazy(() => import('../components/3d/Hero3D'));
const DimensionX3D = React.lazy(() => import('../components/3d/DimensionX3D'));
import { projects } from '../data/projects';
import { SEO } from '../components/common/SEO';

import { partners } from '../data/partners';
import { servicesHome } from '../data/services';

// --- TENSOR GRID SCIENTIFIC VISUALIZATION ---
const TensorGrid = () => {
   const canvasRef = React.useRef<HTMLCanvasElement>(null);

   React.useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let width = 0, height = 0;
      const resize = () => {
         width = canvas.width = canvas.parentElement?.clientWidth || 400;
         height = canvas.height = canvas.parentElement?.clientHeight || 300;
      };
      resize();
      window.addEventListener('resize', resize);

      const gridSize = 40;
      const mathSymbols = ['Σ', '∇', '∂', '∫', 'ψ', 'λ', 'ρ', 'Ω', 'μ'];
      
      const nodes = [];
      for (let x = 0; x < width; x += gridSize) {
         for (let y = 0; y < height; y += gridSize) {
            nodes.push({
               x, y,
               symbol: mathSymbols[Math.floor(Math.random() * mathSymbols.length)],
               opacity: 0.1,
               targetOpacity: Math.random() * 0.3,
               pulse: Math.random() * Math.PI
            });
         }
      }

      const draw = () => {
         ctx.clearRect(0, 0, width, height);
         const time = Date.now() * 0.001;

         // Draw connections (Neural Style)
         ctx.beginPath();
         ctx.strokeStyle = 'rgba(255, 204, 0, 0.03)';
         ctx.lineWidth = 0.5;
         nodes.forEach((node, i) => {
            if (i % 7 === 0 && nodes[i+1]) {
               ctx.moveTo(node.x, node.y);
               ctx.lineTo(nodes[i+1].x, nodes[i+1].y);
            }
         });
         ctx.stroke();

         // Draw nodes
         ctx.font = '8px monospace';
         nodes.forEach(node => {
            const glow = (Math.sin(time + node.pulse) + 1) / 2;
            const currentOpacity = (node.targetOpacity * glow) + 0.05;
            
            ctx.fillStyle = `rgba(255, 204, 0, ${currentOpacity})`;
            ctx.fillText(node.symbol, node.x, node.y);
            
            // Subtle tensor box
            if (Math.random() > 0.99) {
               ctx.strokeStyle = `rgba(255, 204, 0, 0.1)`;
               ctx.strokeRect(node.x - 5, node.y - 10, 15, 15);
            }
         });

         // Scanline effect
         const scanY = (time * 50) % height;
         ctx.fillStyle = 'rgba(255, 204, 0, 0.02)';
         ctx.fillRect(0, scanY, width, 2);

         requestAnimationFrame(draw);
      };

      const animId = requestAnimationFrame(draw);
      return () => {
         cancelAnimationFrame(animId);
         window.removeEventListener('resize', resize);
      };
   }, []);

   return (
      <canvas 
         ref={canvasRef} 
         className="absolute inset-0 pointer-events-none" 
      />
   );
};

// --- AI TERMINAL COMPONENT ---
const AITerminal = () => {
   const [logs, setLogs] = React.useState<string[]>(['Initializing_Cognitive_Core...']);
   const [step, setStep] = React.useState(0);
   
   const terminalLogs = [
      'Establishing_Secure_RAG_Tunnel...',
      'Deep_Indexing_Knowledge_Vectors...',
      'Scaling_Autonomous_Agent_071...',
      'Context_Injected (Namespace: FANTASMA_CORE)',
      'Awaiting_Signal...',
      'AI_Node_Active (Priority: CRITICAL)'
   ];

   React.useEffect(() => {
      if (step < terminalLogs.length) {
         const timer = setTimeout(() => {
            setLogs(prev => [...prev.slice(-4), terminalLogs[step]]);
            setStep(s => s + 1);
         }, 2000 + Math.random() * 2000);
         return () => clearTimeout(timer);
      } else {
         const timer = setTimeout(() => {
            setLogs(['System_Stable...', 'Monitoring_Operations...', 'Agent_Status: IDLE']);
            setStep(0);
         }, 5000);
         return () => clearTimeout(timer);
      }
   }, [step]);

   return (
      <div className="bg-[#08080a] border border-white/10 p-5 rounded-sm shadow-2xl relative group overflow-hidden">
         <TensorGrid />
         <style>
            {`
               @keyframes shimmer {
                  0% { transform: translateX(-100%); }
                  100% { transform: translateX(100%); }
               }
               @keyframes scan {
                  0% { transform: translateY(-100%); }
                  100% { transform: translateY(1000%); }
               }
               @keyframes move {
                  0% { transform: translate(-50%, -100%); }
                  100% { transform: translate(-50%, 400%); }
               }
            `}
         </style>
         {/* HUD Indicators */}
         <div className="absolute top-3 right-6 flex items-center gap-4">
            <div className="flex flex-col items-end">
               <span className="font-mono text-[7px] text-white/30 uppercase">Neural_Sync</span>
               <div className="w-16 h-1 bg-white/5 mt-1">
                  <div className="h-full bg-primary/40 animate-[shimmer_2s_infinite]" style={{ width: '85%' }}></div>
               </div>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-green-500/5 border border-green-500/10">
               <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
               <span className="font-mono text-[8px] text-green-500/60 uppercase tracking-widest italic">Node_Active</span>
            </div>
         </div>

         <div className="font-mono text-[11px] space-y-3 p-2 min-h-[220px]">
            {logs.map((log, i) => (
               <div key={i} className={`${i === logs.length - 1 ? 'text-primary/90' : 'text-white/40'} flex gap-2`}>
                  <span className="opacity-30">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
                  <span className="opacity-20">{">"}</span>
                  <span className={i === logs.length - 1 ? 'animate-pulse' : ''}>{log}</span>
               </div>
            ))}
            
            {/* RAG Visualizer */}
            <div className="mt-8 pt-6 border-t border-white/5 flex gap-6">
               <div className="flex-1 h-32 bg-white/[0.02] border border-white/5 p-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,204,0,0.03)_0%,transparent_70%)]"></div>
                  <div className="font-mono text-[7px] text-white/20 mb-2 uppercase tracking-widest">Knowledge_Matrix</div>
                  <div className="grid grid-cols-4 gap-1 opacity-20">
                     {[...Array(16)].map((_, i) => (
                        <div key={i} className="h-2 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: `${i * 100}ms` }}></div>
                     ))}
                  </div>
                  {/* Vector scanline */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/20 animate-[scan_3s_linear_infinite]"></div>
               </div>
               
               <div className="w-8 flex items-center justify-center">
                  <div className="w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent relative">
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full blur-[4px] animate-[move_4s_linear_infinite]"></div>
                  </div>
               </div>

               <div className="flex-1 h-32 bg-white/[0.02] border border-white/5 p-3 relative overflow-hidden">
                  <div className="font-mono text-[7px] text-white/20 mb-2 uppercase tracking-widest">Agent_Reasoning</div>
                  <div className="flex items-center justify-center h-full">
                     <div className="font-mono text-[10px] text-primary/60 text-center space-y-1">
                        <div className="animate-pulse">[[ ∂ρ/∂t, ∇·J ]]</div>
                        <div className="text-[14px]">∫ Ψ*ĤΨ dτ</div>
                        <div className="opacity-40 tracking-tighter">det(A-λI)=0</div>
                     </div>
                  </div>
                  {/* Pulse overlay */}
                  <div className="absolute inset-0 bg-primary/5 animate-pulse pointer-events-none"></div>
               </div>
            </div>
         </div>
         
         <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-[8px] font-mono text-white/20 uppercase tracking-[0.2em]">
            <span>Cognitive_Logic_Module_071</span>
            <span>Fantasma_AI_V2.0</span>
         </div>
      </div>
   );
};

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
            <React.Suspense fallback={null}>
               <Hero3D />
            </React.Suspense>
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
                  Arquitectura de <span className="font-bold text-white">Alto Rendimiento:</span> <span className="italic text-primary">Sistemas que escalan y blindan.</span>
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

         {/* 02. Dimensión X: Ingeniería Cognitiva y Visual */}
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
                     No construimos sitios para el {new Date().getFullYear()}, diseñamos para la década que viene. Combinamos la fidelidad visual del <span className="text-white font-bold">Modelado 3D Interactivo</span> con la potencia de la <span className="text-white font-bold">Inteligencia Artificial Generativa</span>.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-12 text-left">
                     {[
                        { label: 'FIDELIDAD', val: '4K_RT' },
                        { label: 'LATENCIA', val: '< 20MS' },
                        { label: 'IA_ENGINE', val: 'GPT-4_O' },
                        { label: 'RENDER', val: 'WEBGL_2' }
                     ].map((spec, i) => (
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
                     <DimensionX3D />
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

         {/* 03. INTELIGENCIA OPERATIVA (AI SECTION) */}
         <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-b border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true"></div>
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
               <div className="lg:w-1/2">
                  <span className="font-mono text-xs text-primary tracking-[0.4em] uppercase mb-4 block underline decoration-primary/30 underline-offset-8">Inteligencia Operativa</span>
                  <h2 className="font-display text-4xl md:text-6xl font-bold mt-6 leading-tight">
                     Más allá de la interfaz: <span className="text-primary italic">Sistemas Autónomos.</span>
                  </h2>
                  <p className="text-white/60 text-lg font-light leading-relaxed mt-8">
                     No construimos simples sitios, desplegamos agentes inteligentes que conocen tu negocio. Mediante <span className="text-white font-bold">RAG (Retrieval-Augmented Generation)</span>, tu web razona, asiste y convierte leads de forma autónoma.
                  </p>
                  
                  <div className="mt-12 space-y-6">
                     {[
                        { title: 'Agentes Cognitivos', desc: 'Sistemas que entienden el contexto de tu documentación técnica y comercial.' },
                        { title: 'Automatización Core', desc: 'Integración en el núcleo de tu arquitectura para toma de decisiones en tiempo real.' }
                     ].map((item, i) => (
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

         {/* 04. PROJECT GALLERY */}
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

         {/* 05. CAPACIDADES HUD */}
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

         {/* 04.5 LEAD ENGINEER / FOUNDER */}
         <section className="py-20 md:py-32 px-6 max-w-[1440px] mx-auto border-b border-white/5 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
               <div className="w-full lg:w-1/3 relative group">
                  <div className="aspect-[3/4] overflow-hidden border border-white/10 bg-surface grayscale transition-all duration-700 group-hover:grayscale-0">
                     <img 
                        src="/Founding Engineer.png" 
                        alt="Lead Engineer - Jonathan Hernandez" 
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
                     statLabel: 'Cumplimiento'
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

            {/* Lead Magnet CTA */}
            <div className="mt-20 p-8 md:p-12 bg-red-500/5 border border-red-500/20 rounded-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-red-400/30 tracking-widest leading-none">SECURE_LEAD_V1.0</div>
               <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="max-w-xl text-center md:text-left">
                     <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">¿Tu infraestructura es <span className="text-red-400">Resiliente?</span></h3>
                     <p className="text-white/60 font-light leading-relaxed">
                        Descarga nuestro checklist técnico de las <span className="text-white font-bold">10 Vulnerabilidades Críticas</span> que están comprometiendo sistemas B2B en 2024. Blindaje preventivo basado en estándares OWASP.
                     </p>
                  </div>
                  <button 
                     className="w-full md:w-auto px-10 py-5 bg-red-400 text-background font-mono font-bold text-xs uppercase tracking-[0.3em] hover:bg-white transition-all shadow-[0_0_30px_rgba(239,68,68,0.2)] active:scale-95"
                  >
                     Descargar Auditoría PDF
                  </button>
               </div>
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
                     {[
                        { label: 'Rendimiento', val: '100', color: 'text-green-500' },
                        { label: 'Accesibilidad', val: '100', color: 'text-green-500' },
                        { label: 'Buenas Prácticas', val: '100', color: 'text-green-500' },
                        { label: 'SEO', val: '100', color: 'text-green-500' },
                     ].map((score, i) => (
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
                              aria-label="Agendar Consultoría de Arquitectura"
                           >
                              [ Y ] AGENDAR CONSULTORÍA
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

         {/* FOOTER CTA */}
         <section className="py-24 md:py-40 px-6 max-w-[1440px] mx-auto text-center border-t border-white/5">
            <h2 className="font-display text-4xl md:text-7xl lg:text-8xl font-bold mb-12 tracking-tighter">¿Listo para irrumpir en la <span className="italic text-primary">industria?</span></h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
               <button
                  onClick={() => navigate('/intake')}
                  className="w-full md:w-auto px-12 py-5 bg-primary text-background font-display font-bold text-lg uppercase tracking-wider rounded-sm hover:scale-105 transition-transform"
                  aria-label="Agendar Consultoría de Arquitectura"
               >
                  Agendar Consultoría de Arquitectura
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