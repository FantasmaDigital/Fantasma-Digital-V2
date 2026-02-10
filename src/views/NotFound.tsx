import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
   const navigate = useNavigate();
   return (
      <div className="min-h-screen bg-background relative flex flex-col items-center justify-start md:justify-center overflow-y-auto px-6 py-12 md:py-0 animate-fadeIn">
         {/* Terminal BG */}
         <div className="fixed inset-0 pointer-events-none opacity-[0.03] md:opacity-[0.05] font-mono text-[8px] md:text-[10px] p-6 md:p-10 overflow-hidden leading-relaxed select-none">
            {Array(30).fill(0).map((_, i) => (
               <p key={i} className="mb-2 whitespace-nowrap">&gt; error: architecture_mismatch at layer_{Math.floor(Math.random() * 10)} [FAILED] --abort_sequence</p>
            ))}
         </div>

         <div className="relative z-10 text-center w-full max-w-4xl flex flex-col items-center">
            <div className="relative inline-block mb-8 md:mb-12">
               <h1 className="text-[35vw] md:text-[20rem] font-black leading-none text-primary/10 md:text-primary/90 select-none font-display relative">
                  404
               </h1>
               {/* Badges */}
               <div className="absolute top-[10%] -right-2 md:right-0 flex flex-col items-start gap-1 transform rotate-3 md:rotate-0">
                  <span className="bg-primary text-background text-[7px] md:text-[10px] font-bold px-2 py-0.5 tracking-tighter font-mono shadow-xl">SEÑAL_PERDIDA</span>
                  <span className="border border-cyan-400 text-cyan-400 text-[6px] md:text-[8px] font-bold px-2 py-0.5 tracking-tighter font-mono backdrop-blur-sm bg-black/50">ERR_0X404</span>
               </div>
            </div>

            <h2 className="text-xl md:text-3xl font-bold tracking-[0.2em] uppercase text-primary mb-4 md:mb-6 font-display leading-tight">
               SISTEMA INTERCEPTADO
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed tracking-wide font-light max-w-xs md:max-w-lg mx-auto mb-10 md:mb-12">
               El nodo solicitado está fuera de la arquitectura actual.<br className="hidden md:block" />
               <span className="italic opacity-80 font-mono text-[10px] md:text-xs mt-3 block border-t border-white/5 pt-3">El fantasma está en otro lugar.</span>
            </p>

            <button
               onClick={() => navigate('/')}
               className="w-full md:w-auto px-10 py-5 border border-primary/60 text-primary text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-primary hover:text-background transition-all active:scale-95 mb-12 md:mb-0"
            >
               [ RE-ESTABLECER CONEXIÓN ]
            </button>
         </div>

         {/* Diagnostics - Adaptive Positioning */}
         <div className="relative md:fixed md:bottom-10 md:right-10 w-full md:w-80 bg-surface/90 border border-primary/20 backdrop-blur-md p-5 md:p-6 font-mono text-[9px] md:text-[10px] text-white/50 shadow-2xl z-20">
            <div className="flex justify-between border-b border-primary/20 pb-3 mb-4">
               <div className="flex items-center gap-2">
                  <img src="/logo.png" alt="" className="w-4 h-4 opacity-50 grayscale" />
                  <span className="text-primary font-bold tracking-widest text-[8px] md:text-[10px]">DIAGNÓSTICO_SISTEMA</span>
               </div>
               <div className="flex gap-1.5 items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_#ef4444]"></span>
               </div>
            </div>
            <div className="space-y-2.5">
               <div className="flex justify-between items-center bg-white/[0.02] px-2 py-1">
                  <span>ESTADO:</span>
                  <span className="text-red-400 font-bold">RUTA_NO_ENCONTRADA</span>
               </div>
               <div className="flex justify-between items-center px-2 py-1">
                  <span>PROTOCOLO:</span>
                  <span className="text-white/80">GHOST_ENGINE_V4</span>
               </div>
               <div className="flex justify-between items-center px-2 py-1">
                  <span>ORIGEN:</span>
                  <span className="text-white/80 font-mono">NODO_DESCONOCIDO</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default NotFound;