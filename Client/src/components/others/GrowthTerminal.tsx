import React from 'react';
import { GrowthGrid } from './GrowthGrid';

export const GrowthTerminal = () => {
   const [logs, setLogs] = React.useState<string[]>(['Initializing_Growth_Engine...']);
   const [step, setStep] = React.useState(0);

   const terminalLogs = [
      'Scanning_Market_Signals...',
      'Optimizing_Ad_Bidding_Algorithm...',
      'Deep_Link_SEO_Infrastructure_Active...',
      'Conversion_Funnel_Injected...',
      'ROI_Predictor_Calibrated (Accuracy: 98.4%)',
      'Scaling_Performance_Modules...'
   ];

   React.useEffect(() => {
      if (step < terminalLogs.length) {
         const timer = setTimeout(() => {
            setLogs(prev => [...prev.slice(-4), terminalLogs[step]]);
            setStep(s => s + 1);
         }, 1500 + Math.random() * 1000);
         return () => clearTimeout(timer);
      } else {
         const timer = setTimeout(() => {
            setLogs(['Market_Sync_Stable...', 'Efficiency_Optimized...', 'Growth_Status: SCALING']);
            setStep(0);
         }, 4000);
         return () => clearTimeout(timer);
      }
   }, [step]);

   return (
      <div className="bg-[#08080a] border border-white/10 p-5 rounded-sm shadow-2xl relative group overflow-hidden">
         <GrowthGrid />
         <div className="absolute top-3 right-6 flex items-center gap-4">
            <div className="flex flex-col items-end">
               <span className="font-mono text-[7px] text-white/30 uppercase">Market_ROAS</span>
               <div className="w-16 h-1 bg-white/5 mt-1">
                  <div className="h-full bg-primary/40 animate-pulse" style={{ width: '92%' }}></div>
               </div>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-primary/5 border border-primary/10">
               <span className="w-1 h-1 bg-primary rounded-full animate-ping"></span>
               <span className="font-mono text-[8px] text-primary/60 uppercase tracking-widest italic">Live_Yield</span>
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
               <div className="flex-1 h-32 bg-white/[0.02] border border-white/5 p-3 relative overflow-hidden text-center">
                  <div className="font-mono text-[7px] text-white/20 mb-2 uppercase tracking-widest">Yield_Curve</div>
                  <div className="h-full flex items-center justify-center">
                     <span className="text-primary/40 text-xl font-black italic">14.2x ROI</span>
                  </div>
               </div>
               <div className="flex-1 h-32 bg-white/[0.02] border border-white/5 p-3 relative overflow-hidden">
                  <div className="font-mono text-[7px] text-white/20 mb-2 uppercase tracking-widest">Ad_Spread</div>
                  <div className="grid grid-cols-2 gap-2 opacity-30 mt-2">
                     <div className="h-1 bg-white/20 w-full"></div>
                     <div className="h-1 bg-primary/40 w-[80%]"></div>
                     <div className="h-1 bg-white/20 w-[60%]"></div>
                     <div className="h-1 bg-primary/40 w-[95%]"></div>
                  </div>
               </div>
            </div>
         </div>

         <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-[8px] font-mono text-white/20 uppercase tracking-[0.2em]">
            <span>Growth_Engine_Module_005</span>
            <span>Fantasma_Performance_V1.0</span>
         </div>
      </div>
   );
};