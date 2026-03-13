import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cloud, Database, Box, Zap, Shield, Globe, Server, Cpu, HardDrive, Terminal, Hexagon, Activity, ChevronRight } from 'lucide-react';
import { SEO } from '../components/common/SEO';


const Ecosystem = () => {
   const navigate = useNavigate();
   const providers = [
      { name: 'GoDaddy', type: 'Domain Control', desc: 'Gestión masiva de dominios y servicios DNS de alta disponibilidad.' },
      { name: 'NameCheap', type: 'Domain Privacy', desc: 'Estructura de registro de dominios centrada en la privacidad y redundancia.' },
      { name: 'Vercel', type: 'Edge Runtime', desc: 'Despliegue instantáneo en el Edge con frameworks reactivos de última generación.' }
   ];

   const osSupport = [
      { name: 'Ubuntu', version: 'LTS 24.04', color: 'text-orange-500' },
      { name: 'CentOS', version: 'Stream 9', color: 'text-blue-400' },
      { name: 'AlmaLinux', version: 'v9.3 Stable', color: 'text-green-500' },
      { name: 'RedHat', version: 'RHEL 9.2', color: 'text-red-500' }
   ];

   return (
      <div className="min-h-screen bg-background text-white lg:pb-32 animate-fadeIn">
         <SEO
            title="Ecosistema & Infraestructura | Total Control"
            description="Desde dominios hasta Bare Metal. Garantizamos soberanía total sobre tu stack tecnológico con infraestructuras optimizadas para el rendimiento."
         />
         <div className="max-w-[1400px] mx-auto px-6 py-12 lg:py-24">

            {/* Hero Section */}
            <section className="mb-20 md:mb-32 flex flex-col items-center text-center">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 mb-8">
                  <span className="relative flex h-2 w-2">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Sincronización de Sistemas: 100%</span>
               </div>
               <h1 className="text-[11vw] md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic break-words w-full">
                  Ecosistema <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-white">Omnicanal</span>
               </h1>
               <p className="text-white/50 text-base md:text-xl max-w-3xl font-light leading-relaxed px-4">
                  Desplegamos una infraestructura total. Desde el registro del dominio hasta la configuración del kernel en servidores físicos, garantizando soberanía absoluta sobre tu stack tecnológico.
               </p>
            </section>

            {/* Grid 1: Domains & Edge */}
            <section className="mb-24 md:mb-40">
               <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 border-b border-white/10 pb-6 gap-4">
                  <div>
                     <span className="text-primary font-mono text-xs md:text-sm uppercase tracking-widest tracking-[0.3em]">01 // Capa de Acceso y Red</span>
                     <h2 className="text-3xl md:text-4xl font-bold mt-2 uppercase tracking-tight">Dominios y Edge Computing</h2>
                  </div>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {providers.map((p) => (
                     <div key={p.name} className="group bg-surface p-6 md:p-8 border border-white/5 hover:border-primary/50 transition-all rounded-sm flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                           <Globe size={100} />
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                           <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center bg-primary/5">
                              <Zap className="w-5 h-5 text-primary" />
                           </div>
                           <span className="text-xs font-mono text-primary font-bold uppercase tracking-widest">{p.type}</span>
                        </div>
                        <h3 className="text-2xl font-black mb-4 uppercase">{p.name}</h3>
                        <p className="text-sm text-white/40 leading-relaxed font-light mb-8">{p.desc}</p>
                        <button className="mt-auto flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-white/20 group-hover:text-white transition-colors">
                           Configurar Nodo <ChevronRight size={12} />
                        </button>
                     </div>
                  ))}
               </div>
            </section>

            {/* Grid 2: Dockerization & Orchestration */}
            <section className="mb-24 md:mb-40 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] pointer-events-none -z-10"></div>

               <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 border-b border-white/10 pb-6 gap-4">
                  <div>
                     <span className="text-primary font-mono text-xs md:text-sm uppercase tracking-widest tracking-[0.3em]">02 // Virtualización Adaptativa</span>
                     <h2 className="text-3xl md:text-4xl font-bold mt-2 uppercase tracking-tight">Dockerización y Orquestación</h2>
                  </div>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 leading-relaxed">
                  <div className="lg:col-span-8 bg-surface p-6 md:p-10 border border-white/5 rounded-sm relative overflow-hidden group">
                     <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                        <div className="flex-1 min-w-0">
                           <h3 className="text-xl md:text-2xl font-black mb-6 uppercase flex items-center gap-3">
                              <Box className="text-primary shrink-0" /> Docker Engine
                           </h3>
                           <p className="text-white/60 mb-8 font-light leading-relaxed">
                              Empaquetamos aplicaciones en contenedores aislados que garantizan un comportamiento idéntico en desarrollo, pruebas y producción.
                           </p>
                           <ul className="space-y-4 font-mono text-[10px] md:text-xs text-white/40 overflow-x-auto pb-2">
                              <li className="flex items-center gap-3 whitespace-nowrap"><span className="text-green-500">$</span> docker build -t fd-core .</li>
                              <li className="flex items-center gap-3 whitespace-nowrap"><span className="text-green-500">$</span> docker-compose up -d --scale-api=5</li>
                              <li className="flex items-center gap-3 text-primary whitespace-nowrap"><span className="animate-pulse">&gt;</span> STATUS: ACTIVE_CLUSTER</li>
                           </ul>
                        </div>
                        <div className="flex-1 bg-black/40 border border-white/5 p-6 md:p-8 rounded flex flex-col justify-center items-center text-center">
                           <Hexagon size={48} className="text-primary mb-6 stroke-[1px] animate-[pulse_3s_infinite] md:w-16 md:h-16" />
                           <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Kubernetes Mesh</h4>
                           <p className="text-[11px] text-white/30 lowercase font-mono">Auto-healing, load balancing & zero-downtime rolling updates.</p>
                        </div>
                     </div>
                  </div>

                  <div className="lg:col-span-4 bg-primary p-8 md:p-10 rounded-sm text-background flex flex-col items-center justify-center text-center relative overflow-hidden group">
                     <div className="absolute top-0 left-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <Activity size={48} className="mb-6" />
                     <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 leading-none">Cero Residuos Técnicos</h3>
                     <p className="text-sm font-medium opacity-80 leading-relaxed">
                        Nuestra arquitectura de contenedores elimina el "funciona en mi máquina" para siempre.
                     </p>
                  </div>
               </div>
            </section>

            {/* Grid 3: Bare Metal & Systems */}
            <section>
               <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 border-b border-white/10 pb-6 gap-4">
                  <div>
                     <span className="text-primary font-mono text-xs md:text-sm uppercase tracking-widest tracking-[0.3em]">03 // Capa Física y Sistemas</span>
                     <h2 className="text-3xl md:text-4xl font-bold mt-2 uppercase tracking-tight">Instalación Bare Metal y S.O.</h2>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {osSupport.map((os) => (
                     <div key={os.name} className="bg-surface p-6 md:p-8 border border-white/5 hover:border-white/10 transition-all rounded-sm group">
                        <Server className={`mb-6 group-hover:scale-110 transition-transform ${os.color}`} size={32} />
                        <h3 className="text-xl md:text-2xl font-black mb-2 uppercase">{os.name}</h3>
                        <p className={`font-mono text-[10px] font-bold uppercase tracking-widest mb-6 ${os.color}`}>{os.version}</p>
                        <div className="space-y-4">
                           <div className="flex items-center justify-between text-[10px] font-mono text-white/20">
                              <span>KERNEL_MOD</span>
                              <span className="text-green-500">OK</span>
                           </div>
                           <div className="h-0.5 bg-white/5 w-full">
                              <div className="h-full bg-white/10 w-full"></div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="mt-12 bg-surface/50 border border-white/5 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 rounded-sm">
                  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left">
                     <HardDrive size={48} className="text-white/10 md:w-16 md:h-16" />
                     <div>
                        <h4 className="text-lg md:text-xl font-bold uppercase mb-2">Instalación Física en Sitio</h4>
                        <p className="text-sm text-white/40 font-light max-w-xl">
                           Configuramos servidores físicos de alto rendimiento (Dell, HP, Lenovo) con optimizaciones personalizadas para bases de datos de alta frecuencia y clouds privados.
                        </p>
                     </div>
                  </div>
                  <button
                     onClick={() => navigate('/intake')}
                     className="w-full md:w-auto px-8 md:px-10 py-4 bg-white text-background font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-widest hover:bg-primary transition-colors whitespace-nowrap"
                  >
                     Solicitar Despliegue Local
                  </button>
               </div>
            </section>
         </div>
      </div>
   );
};

export default Ecosystem;