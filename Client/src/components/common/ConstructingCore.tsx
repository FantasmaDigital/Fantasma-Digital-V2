import React from 'react';

const ConstructingCore = () => {
    return (
        <div className="relative w-64 h-64 md:w-[450px] md:h-[450px] flex items-center justify-center select-none pointer-events-none">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px] animate-pulse"></div>

            {/* Outer Rotating Ring (Broken/Dashed) */}
            <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_120s_linear_infinite]"></div>

            {/* Construction Elements - Rotating Dashed Ring */}
            <div className="absolute inset-4 border border-dashed border-primary/20 rounded-full animate-[spin_80s_linear_infinite_reverse]"></div>

            {/* Main Orbital Structure */}
            <div className="absolute inset-16 border-2 border-white/5 rounded-full">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full blur-[2px] animate-pulse"></div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/40 rounded-full"></div>
            </div>

            {/* Pulsing Core Ring */}
            <div className="absolute inset-24 border-2 border-primary/10 rounded-full border-t-primary/40 border-r-transparent border-b-transparent border-l-transparent animate-[spin_10s_linear_infinite]"></div>

            {/* Text Path Circle */}
            <div className="absolute inset-0 animate-[spin_30s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                        <path id="corePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                    </defs>
                    <text className="font-mono text-[3px] fill-primary/30 tracking-[0.6em] uppercase">
                        <textPath href="#corePath">
                            &nbsp;&nbsp;&nbsp;Arquitectura Inefable • Poder Invisible • Ghost Code • 0x44_ART • System Core Building •
                        </textPath>
                    </text>
                </svg>
            </div>

            {/* Core Center */}
            <div className="relative w-32 h-32 flex items-center justify-center">
                {/* Geometric Core */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* Hexagon Layout */}
                    {[0, 60, 120, 180, 240, 300].map((angle) => (
                        <div
                            key={angle}
                            className="absolute w-12 h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0"
                            style={{ transform: `rotate(${angle}deg)` }}
                        ></div>
                    ))}

                    {/* Inner Core Pulse */}
                    <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-primary/5 animate-pulse"></div>
                        <div className="w-8 h-8 rounded-full border border-primary/50 animate-ping opacity-20"></div>
                        <div className="relative font-mono text-[8px] text-primary/80 font-bold tracking-[0.2em] animate-pulse">
                            CORE
                        </div>
                    </div>
                </div>

                {/* Orbitals */}
                {[0, 1, 2].map((i) => (
                    <div
                        key={i}
                        className="absolute inset-0 border border-primary/10 rounded-full"
                        style={{
                            transform: `rotate(${i * 60}deg) scale(${1 + i * 0.1})`,
                            animation: `spin ${15 + i * 5}s linear infinite`
                        }}
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/60 rounded-full blur-[1px]"></div>
                    </div>
                ))}
            </div>

            {/* Scanning Line Effect */}
            <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none opacity-20">
                <div className="absolute top-[-100%] left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-[scan_4s_linear_infinite]"></div>
            </div>

            {/* Decorative Bits */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <div
                    key={i}
                    className="absolute w-0.5 h-0.5 bg-white/40 rounded-full"
                    style={{
                        transform: `rotate(${angle}deg) translateY(-210px)`,
                        opacity: 0.5
                    }}
                ></div>
            ))}

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes scan {
          0% { transform: translateY(0%); }
          100% { transform: translateY(200%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}} />
        </div>
    );
};

export default ConstructingCore;
