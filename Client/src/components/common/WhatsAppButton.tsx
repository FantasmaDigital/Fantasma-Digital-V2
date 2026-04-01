import React from 'react';
import { MessageSquare } from 'lucide-react';

export const WhatsAppButton = () => {
    const handleWhatsApp = () => {
        const phone = "50377079798";
        const message = "Hola, busco asesoría técnica de Fantasma Digital. He visto el sitio web.";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <button
            onClick={handleWhatsApp}
            className="fixed bottom-6 right-6 z-[999] p-4 bg-primary text-background rounded-sm shadow-[0_0_20px_rgba(250,182,30,0.3)] hover:scale-110 active:scale-95 transition-all group flex items-center gap-3 overflow-hidden"
            aria-label="Abrir WhatsApp para consultoría inmediata"
        >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <div className="relative flex items-center gap-3">
                <span className="font-mono text-[10px] font-bold tracking-widest hidden md:block uppercase">CONECTAR_AHORA</span>
                <MessageSquare size={20} className="relative z-10" />
            </div>
            
            {/* Pulsing Aura */}
            <div className="absolute inset-0 rounded-sm border border-primary animate-pulse-slow"></div>
        </button>
    );
};
