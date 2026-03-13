import React from 'react';
import { Terminal, Database, Gauge, Zap, CheckCircle, Server, ArrowRight, Palette, Shield, Brain, Layers, Cpu, Code } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { servicesSolutions } from '../data/services';
import { SEO } from '../components/common/SEO';

const Solutions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background animate-fadeIn">
      <SEO
        title="Soluciones de Ingeniería | Fantasma Digital"
        description="Explora infraestructuras de alto rendimiento: desde microservicios escalables hasta interfaces cinemáticas de grado corporativo."
        schema={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": servicesSolutions.map((service, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "Service",
              "name": service.title,
              "description": service.desc,
              "provider": {
                "@type": "Organization",
                "name": "Fantasma Digital"
              },
              "areaServed": "SV",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicios de Ingeniería Digital",
                "itemListElement": service.tags.map(tag => ({
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": tag
                  }
                }))
              }
            }
          }))
        }}
      />
      {/* Hero Section */}

      <div className="relative px-6 lg:px-20 py-20 md:py-32 border-b border-white/5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-surface/50 to-background overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none select-none overflow-hidden" aria-hidden="true">
          <Terminal size={600} strokeWidth={0.5} className="rotate-12 translate-x-1/4" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Sistemas Core Operativos
          </div>
          <h1 className="text-[12vw] md:text-8xl font-black leading-[0.9] tracking-tighter uppercase mb-10">
            Artesanía Digital.<br />
            <span className="text-primary italic">Poder Corporativo.</span>
          </h1>
          <div className="max-w-2xl border-l-2 md:border-l-4 border-primary pl-6 py-2 mx-auto md:mx-0">
            <p className="text-base md:text-xl text-white/60 font-light leading-relaxed">
              No construimos sitios web; desplegamos infraestructuras de negocio. Engineering-first solutions for the modern enterprise.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="px-6 lg:px-20 py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-20 md:mb-24 gap-8 text-center md:text-left">
            <div className="border-l-0 md:border-l-4 border-primary md:pl-6">
              <h3 className="text-primary font-mono text-[10px] md:text-sm uppercase tracking-[0.3em] mb-4">// CAPACIDADES_DE_INGENIERÍA.SYS</h3>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white leading-none">Servicios de Despliegue Crítico</h2>
            </div>
            <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest leading-loose border border-white/10 px-4 py-2 bg-white/5 md:bg-transparent md:border-0">
              Nivel de Acceso: Administrador<br className="hidden md:block" />
              <span className="md:ml-4">SLA: 99.9% Garantizado</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {servicesSolutions.map((service, idx) => (
              <div key={idx} className="group relative flex flex-col bg-surface border border-white/10 p-1 hover:border-primary transition-all duration-500 hover:shadow-[0_0_30px_rgba(234,179,8,0.05)]">
                <div className="flex justify-between items-center border-b border-white/10 px-4 py-3 font-mono text-[8px] md:text-[9px] bg-black/40">
                  <span className="text-primary font-bold">[ ID: {service.id} ]</span>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-green-500 uppercase">[ STATUS: ACTIVE ]</span>
                  </div>
                </div>

                <div className="p-6 md:p-8 pb-4">
                  <div className="mb-6 text-white/20 group-hover:text-primary transition-all duration-500 transform group-hover:scale-110 origin-left flex justify-between items-start">
                    <service.icon size={40} md:size={48} strokeWidth={1} />
                    <Code size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-tighter text-white group-hover:text-primary transition-colors leading-none">{service.title}</h3>
                  <p className="text-white/50 text-sm mb-8 leading-relaxed font-light">{service.desc}</p>
                </div>

                <div className="px-6 md:px-8 pb-8 mt-auto">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 text-[8px] font-mono border border-white/10 text-white/30 uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/5 flex flex-col gap-6">
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/20">
                      <span>{service.stat}</span>
                      <div className="flex gap-1.5">
                        <div className="w-1 h-1 bg-primary rounded-full shadow-[0_0_5px_#eab308]"></div>
                        <div className="w-1 h-1 bg-primary rounded-full opacity-50"></div>
                        <div className="w-1 h-1 bg-primary rounded-full opacity-20"></div>
                      </div>
                    </div>

                    <button
                      onClick={() => navigate(`/solutions/${service.slug}`)}
                      className="w-full py-4 border border-white/10 text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-white/60 hover:text-background hover:bg-primary hover:border-primary transition-all flex items-center justify-center gap-3 group/btn relative overflow-hidden"
                    >
                      <span className="relative z-10">Solicitar Protocolo</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform relative z-10" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;