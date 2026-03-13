import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../components/common/SEO';

const Deployed = () => {
   const navigate = useNavigate();
   return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-background relative overflow-hidden animate-fadeIn">
         <SEO
            title="Solicitud Recibida | Handshake Establecido"
            description="Tu solicitud ha sido integrada en nuestra cola de desarrollo. Un ingeniero-artista se pondrá en contacto pronto para iniciar la arquitectura."
         />
         <div className="absolute inset-0 z-[-1]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
         </div>

         <div className="mb-12 relative animate-pulse-slow">
            <svg className="text-primary" width="120" height="120" viewBox="0 0 48 48" fill="none">
               <path d="M24 4L7 15V33L24 44L41 33V15L24 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
               <path d="M24 12V36" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
               <circle cx="24" cy="24" r="4" fill="currentColor" fillOpacity="0.2" />
            </svg>
         </div>

         <h1 className="text-white tracking-[0.4em] text-4xl md:text-5xl font-bold leading-tight mb-6 uppercase text-center font-display">
            Sistema Desplegado
         </h1>
         <p className="text-white/80 text-lg font-light leading-relaxed mb-10 max-w-lg mx-auto text-center font-display">
            Tu solicitud ha sido integrada en nuestra cola de desarrollo.<br />
            Un ingeniero-artista se pondrá en contacto en menos de <span className="text-primary font-medium">24 horas</span>.
         </p>

         <div className="flex flex-col items-center gap-4">
            <button onClick={() => navigate('/')} className="px-8 py-3 border border-primary/40 text-primary text-sm font-bold tracking-[0.2em] uppercase hover:bg-primary hover:text-background transition-colors">
               Volver al Lienzo
            </button>
            <span className="text-[10px] font-mono text-white/30 tracking-[0.3em] uppercase">ID: FD-7701-XQ</span>
         </div>

         <div className="absolute bottom-0 w-full h-48 flex items-end justify-center pb-10 bg-gradient-to-t from-background to-transparent">
            <div className="font-mono text-[10px] tracking-widest text-primary/60 uppercase text-center space-y-2">
               <p>[1.002s] HANDSHAKE_ESTABLECIDO <span className="text-primary">SISTEMA_LISTO</span></p>
               <p>[1.115s] ESPERANDO_ACK_DE_INGENIERO <span className="animate-pulse">PENDIENTE...</span></p>
            </div>
         </div>
      </div>
   );
};

export default Deployed;