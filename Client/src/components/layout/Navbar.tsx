import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Cpu, Layers } from 'lucide-react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Unified Navigation
    const navLinks = [
        { name: 'Soluciones', path: '/solutions' },
        { name: 'Filosofía', path: '/philosophy' },
        { name: 'Ecosistema', path: '/ecosystem' },
        { name: 'Stack Técnico', path: '/stack' },
        { name: 'Dossier', path: '/eng/dossier' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#040406] border-b border-white/10" aria-label="Navegación Principal">
            <div className="max-w-[1800px] mx-auto px-3 lg:px-8 h-24 flex items-center justify-between">

                {/* Left: Logo */}
                <div
                    className="flex items-center gap-2 cursor-pointer group"
                    onClick={() => navigate('/')}
                    role="button"
                    tabIndex={0}
                    aria-label="Fantasma Digital Inicio"
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && navigate('/')}
                >
                    <div className="w-16 h-16 flex items-center justify-center transition-colors">
                        <img src="/logo.png" alt="Fantasma Digital Logo" className="w-full h-full object-contain" />
                    </div>
                    <span className="font-display font-bold text-xl tracking-tight text-white uppercase">
                        Fantasma <span className="text-primary">Digital</span>
                    </span>
                </div>

                {/* Center: Navigation Links */}
                <div className="hidden lg:flex items-center gap-12" role="menubar">
                    {navLinks.map((link, index) => (
                        <button
                            key={link.path}
                            onClick={() => navigate(link.path)}
                            role="menuitem"
                            aria-label={`Navegar a ${link.name}`}
                            aria-current={location.pathname === link.path ? 'page' : undefined}
                            className={`group flex items-center gap-3 font-mono text-[11px] font-medium tracking-[0.2em] uppercase transition-all ${location.pathname === link.path ? 'text-white' : 'text-white/50 hover:text-white'}`}
                        >
                            <span className={`text-primary transition-colors ${location.pathname === link.path ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
                                [{String(index + 1).padStart(2, '0')}]
                            </span>
                            <span>{link.name}</span>
                        </button>
                    ))}
                </div>

                {/* Right: CTA Button */}
                <div className="hidden lg:flex items-center gap-6">
                    <button
                        onClick={() => navigate('/intake')}
                        aria-label="Iniciar un nuevo proyecto"
                        className="group relative flex items-center justify-between border border-primary/50 bg-primary/5 px-6 py-3 font-mono text-primary transition-all hover:bg-primary hover:text-background rounded-sm"
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] opacity-70 group-hover:opacity-100">$</span>
                            <span className="text-[11px] font-bold uppercase tracking-widest">iniciar_proyecto</span>
                        </div>
                        <span className="ml-3 w-1.5 h-3 bg-primary animate-pulse group-hover:bg-background"></span>
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                        aria-expanded={isOpen}
                        className="text-primary p-2 border border-white/10 bg-white/5"
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay with Animation */}
            <div
                className={`lg:hidden fixed inset-0 z-[100] bg-[#0c0c0e] flex flex-col transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                role="dialog"
                aria-modal="true"
            >
                {/* Header in Overlay - Pinned */}
                <div className={`h-24 px-8 flex items-center justify-between border-b border-white/5 shrink-0`}>
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="Logo" className="w-16 h-16 object-contain" />
                        <span className="font-display font-bold text-lg tracking-tight text-white uppercase">
                            Fantasma <span className="text-primary">Digital</span>
                        </span>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 text-white/70 hover:text-white"
                    >
                        <X size={32} />
                    </button>
                </div>

                {/* Scrollable Content Area */}
                <div className={`flex-1 overflow-y-auto overflow-x-hidden transition-all duration-700 delay-100 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <div className="relative min-h-full flex flex-col items-center py-20 px-6">
                        {/* Background Watermark */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none overflow-hidden" aria-hidden="true">
                            <span className="font-display font-black text-[120px] md:text-[200px] uppercase tracking-[0.5em]">MENU</span>
                        </div>

                        {/* Navigation Links */}
                        <div className="relative z-10 flex flex-col items-center gap-8 mb-20 w-full">
                            {navLinks.map((link, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => { navigate(link.path); setIsOpen(false); }}
                                    className="group flex items-center gap-4 transition-all duration-500"
                                    style={{
                                        transitionDelay: isOpen ? `${200 + idx * 50}ms` : '0ms',
                                        transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                                        opacity: isOpen ? 1 : 0
                                    }}
                                >
                                    <span className={`font-mono text-sm transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-primary/40 group-hover:text-primary'}`}>
                                        [{String(idx + 1).padStart(2, '0')}]
                                    </span>
                                    <span className={`font-display text-xl md:text-2xl font-bold uppercase tracking-[0.2em] transition-all group-hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-white'}`}>
                                        {link.name}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="w-full max-w-[280px] h-[1px] bg-white/10 mb-16 shrink-0 z-10"></div>

                        {/* Contact & Location Sections with Staggered Entry */}
                        <div
                            className="relative z-10 flex flex-col items-center gap-16 mb-20 transition-all duration-700"
                            style={{
                                transitionDelay: isOpen ? '500ms' : '0ms',
                                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                                opacity: isOpen ? 1 : 0
                            }}
                        >
                            {/* Contact Section */}
                            <div className="flex flex-col items-center text-center gap-6">
                                <h3 className="font-display font-black text-primary text-xl uppercase tracking-widest px-4 py-1 border-b-2 border-primary/20">
                                    Contacto
                                </h3>
                                <div className="space-y-2 font-mono text-[11px] text-white/50 uppercase tracking-[0.2em]">
                                    <p>WhatsApp: +503 7707 9798</p>
                                    <p className="lowercase">info@fantasmadigital.dev</p>
                                </div>
                            </div>

                            {/* Location Section */}
                            <div className="flex flex-col items-center text-center gap-6">
                                <h3 className="font-display font-black text-primary text-xl uppercase tracking-widest px-4 py-1 border-b-2 border-primary/20">
                                    Ubicación
                                </h3>
                                <p className="font-mono text-[11px] text-white/50 uppercase tracking-[0.2em] max-w-[280px] leading-relaxed">
                                    San Salvador, El Salvador
                                </p>
                            </div>
                        </div>

                        {/* Intake CTA Tool */}
                        <div
                            className="mt-auto pb-12 transition-all duration-700 z-10"
                            style={{
                                transitionDelay: isOpen ? '700ms' : '0ms',
                                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                                opacity: isOpen ? 1 : 0
                            }}
                        >
                            <button
                                onClick={() => { navigate('/intake'); setIsOpen(false); }}
                                className="relative z-10 group flex items-center gap-4 bg-primary/10 border border-primary/30 px-10 py-5 rounded-sm overflow-hidden transition-all hover:bg-primary active:scale-95"
                            >
                                <span className="font-mono text-sm font-bold text-primary group-hover:text-background uppercase tracking-[0.3em]">
                                    Iniciar Proyecto
                                </span>
                                <div className="w-2 h-2 bg-primary group-hover:bg-background animate-pulse"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
