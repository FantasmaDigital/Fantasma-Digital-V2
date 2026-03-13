import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Facebook, Instagram, Mail, ArrowUpRight, Music2 } from 'lucide-react';


export const Footer = () => {
    const navigate = useNavigate();

    const sections = [
        {
            title: 'Principal',
            links: [
                { name: 'Soluciones', path: '/solutions' },
                { name: 'El Dossier', path: 'eng/dossier' },
                { name: 'Filosofía', path: '/philosophy' },
                { name: 'Iniciar Proyecto', path: '/intake' },
            ]
        },
        {
            title: 'Tecnología',
            links: [
                { name: 'Ecosistema', path: '/ecosystem' },
                { name: 'Stack Técnico', path: '/stack' },
            ]
        }
    ];

    return (
        <footer className="border-t border-white/10 bg-[#040406] pt-24 pb-12 px-6 lg:px-20 mt-auto relative overflow-hidden">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" aria-hidden="true"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-[1800px] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-24">
                    {/* Brand Column */}
                    <div className="lg:col-span-2 space-y-8 flex flex-col items-center text-center">
                        <div className="flex flex-col items-center gap-6 w-full">
                            <div className="flex flex-col lg:flex-row items-center gap-4 group cursor-default">

                                <div className="relative">
                                    <img src="/logo.png" alt="Fantasma Digital" className="w-20 h-20 object-contain opacity-80 group-hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-700" />
                                    <div className="absolute -inset-1 border border-primary/20 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-sm"></div>
                                </div>
                                <div className="text-center lg:text-left">

                                    <span className="font-display font-black text-2xl tracking-tighter text-white uppercase leading-none">
                                        Fantasma <br />
                                        <span className="text-primary">Digital</span>
                                    </span>
                                </div>
                            </div>
                            <p className="text-white/30 text-sm leading-relaxed font-light max-w-sm">
                                <span className="text-white/60 font-mono text-[10px] block mb-2 uppercase tracking-widest">// Manifiesto_v2.4</span>
                                Evolucionamos la complejidad técnica en absoluta simplicidad estética. Ingeniería de vanguardia desplegada desde el vacío digital.
                            </p>
                        </div>

                        <div className="flex gap-3 justify-center">

                            {[
                                { icon: Github, label: 'GitHub', href: 'https://github.com/FantasmaDigital' },
                                { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/p/Fantasma-Digital-61550038745296/' },
                                { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/fantasmadigitalsv/' },
                                { icon: Music2, label: 'TikTok', href: 'https://www.tiktok.com/@fantasmadigitalsv' }
                            ].map((social, i) => (

                                <a key={i} href={social.href}
                                    className="group relative w-10 h-10 flex items-center justify-center border border-white/10 hover:border-primary/40 transition-all duration-300"
                                    aria-label={social.label}>
                                    <social.icon size={16} className="text-white/40 group-hover:text-primary transition-colors" />
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {sections.map((section) => (
                        <div key={section.title} className="flex flex-col items-center text-center">
                            <h3 className="font-mono text-[10px] text-primary uppercase tracking-[0.4em] mb-10 flex items-center justify-center gap-2">

                                <span className="w-1 h-1 bg-primary rounded-full"></span>
                                {section.title}
                            </h3>
                            <ul className="space-y-5">
                                {section.links.map((link) => (
                                    <li key={link.path}>
                                        <button
                                            onClick={() => navigate(link.path)}
                                            className="text-white/40 hover:text-white text-[11px] font-mono uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-3 group text-center"
                                        >

                                            <div className="w-1 h-[1px] bg-white/20 group-hover:w-4 group-hover:bg-primary transition-all duration-300"></div>
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Footer Bottom Metadata */}
                <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8 relative">
                    {/* Ghost Watermark */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-display font-black text-[8vw] text-white opacity-[0.01] pointer-events-none select-none uppercase tracking-[1em]">
                        Fantasma
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-8 font-mono text-[9px] text-white/20 uppercase tracking-[0.3em] relative z-10">
                        <div className="flex items-center gap-3 px-3 py-1 border border-white/5 bg-white/[0.02]">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
                            <span>Sistemas Nominales</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span>Hash: 8f2b7a9...</span>
                            <span className="w-[1px] h-3 bg-white/10"></span>
                            <span>v2.4.0-STABLE</span>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-8 font-mono text-[9px] text-white/20 uppercase tracking-[0.2em] relative z-10">
                        <p>© {new Date().getFullYear()} Fantasma Digital Engineering Lab.</p>
                        <div className="flex items-center gap-6">
                            <button className="hover:text-primary transition-colors hover:tracking-[0.4em] duration-500">Privacidad</button>
                            <button className="hover:text-primary transition-colors hover:tracking-[0.4em] duration-500">Términos</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
