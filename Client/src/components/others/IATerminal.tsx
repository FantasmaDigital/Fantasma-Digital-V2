import React from 'react';
import { TensorGrid } from './TensorGrid';
import { terminalLogs } from '../../data/constants';

export const AITerminal = () => {
   const [logs, setLogs] = React.useState<string[]>(['Initializing_Cognitive_Core...']);
   const [step, setStep] = React.useState(0);

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

            <div className="mt-8 pt-6 border-t border-white/5 flex gap-6">
               <div className="flex-1 h-32 bg-white/[0.02] border border-white/5 p-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,204,0,0.03)_0%,transparent_70%)]"></div>
                  <div className="font-mono text-[7px] text-white/20 mb-2 uppercase tracking-widest">Knowledge_Matrix</div>
                  <div className="grid grid-cols-4 gap-1 opacity-20">
                     {[...Array(16)].map((_, i) => (
                        <div key={i} className="h-2 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: `${i * 100}ms` }}></div>
                     ))}
                  </div>
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