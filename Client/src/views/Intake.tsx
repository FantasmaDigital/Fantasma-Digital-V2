import React, { useState, useEffect, useRef } from 'react';
import { Fingerprint, Layers, DollarSign, CheckCircle, MessageSquare, ChevronDown, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { servicesSolutions } from '../data/services';
import { ProjectService, ProjectPayload } from '../services/ProjectService';
import { SEO } from '../components/common/SEO';


interface Log {
   id: number;
   time: string;
   message: string;
   type?: 'default' | 'success' | 'primary' | 'warning';
}

const Intake = () => {
   const navigate = useNavigate();
   const terminalRef = useRef<HTMLDivElement>(null);
   const scopeRef = useRef<HTMLDivElement>(null);
   const [isScopeOpen, setIsScopeOpen] = useState(false);
   const [isSubmitting, setIsSubmitting] = useState(false);

   // Form State
   const [formData, setFormData] = useState({
      projectId: '',
      email: '',
      company: '',
      message: '',
      scopes: [] as string[],
      budget: 5000
   });

   // Terminal Logs State
   const [logs, setLogs] = useState<Log[]>([
      { id: 1, time: '08:44:21', message: 'INITIALIZING_CORE_ENGINE...', type: 'default' },
      { id: 2, time: '08:44:22', message: 'SECURITY_HANDSHAKE: SUCCESS', type: 'success' },
      { id: 3, time: '08:44:23', message: 'FETCHING_NEURAL_TEMPLATES...', type: 'default' },
      { id: 4, time: '08:44:25', message: '> ESTADO: Esperando_Identidad_de_Arquitectura', type: 'primary' },
   ]);

   const addLog = (message: string, type: Log['type'] = 'default') => {
      const time = new Date().toLocaleTimeString('en-GB', { hour12: false });
      setLogs(prev => {
         // Prevent duplicate logs for the same action in close succession
         const lastLog = prev[prev.length - 1];
         if (lastLog && lastLog.message === message) return prev;
         return [...prev, { id: Date.now() + Math.random(), time, message, type }];
      });
   };

   // Auto-scroll terminal
   useEffect(() => {
      if (terminalRef.current) {
         terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
   }, [logs]);

   // Handle input changes with single state update and separate logging
   const handleInputChange = (field: 'projectId' | 'email' | 'company' | 'message', value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));
   };

   // Separate effect for logging input changes to avoid delay and double-triggering
   useEffect(() => {
      if (formData.projectId.length === 1) {
         addLog(`IDENTITY_UPDATE: Detectando proyecto [${formData.projectId}]`, 'primary');
      }
      if (formData.projectId.length > 5 && formData.projectId.length % 7 === 0) {
         addLog(`PROJECT_VERIFICATION: Nucleo [${formData.projectId}] verificado.`, 'success');
      }
   }, [formData.projectId]);

   useEffect(() => {
      if (formData.email.length > 5 && formData.email.includes('@') && !logs.some(l => l.message.includes(formData.email))) {
         addLog(`EMAIL_INGESTED: Canal de comunicación [${formData.email}] activo.`, 'success');
      }
   }, [formData.email]);

   useEffect(() => {
      if (formData.message.length > 10 && !logs.some(l => l.message.includes('BRAINSTORM_DATA'))) {
         addLog(`BRAINSTORM_DATA: Analizando concepto y requerimientos...`, 'primary');
      }
   }, [formData.message]);

   const toggleScope = (scope: string) => {
      const exists = formData.scopes.includes(scope);
      setFormData(prev => ({
         ...prev,
         scopes: exists ? prev.scopes.filter(s => s !== scope) : [...prev.scopes, scope]
      }));
      addLog(`${exists ? 'REMOVING' : 'ADDING'}_MODULE: ${scope.toUpperCase()}`, exists ? 'warning' : 'primary');
   };

   const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value);
      setFormData(prev => ({ ...prev, budget: value }));
   };

   // Log budget changes with a debounce to prevent terminal spam
   useEffect(() => {
      const timer = setTimeout(() => {
         addLog(`RESOURCE_REALLOCATION: Potencia de cómputo ajustada a $${formData.budget.toLocaleString()}`, 'primary');
      }, 500);
      return () => clearTimeout(timer);
   }, [formData.budget]);

   // Click outside handler for Scope Select
   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (scopeRef.current && !scopeRef.current.contains(event.target as Node)) {
            setIsScopeOpen(false);
         }
      };
      if (isScopeOpen) {
         document.addEventListener('mousedown', handleClickOutside);
      }
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [isScopeOpen]);



   const handleSubmit = async () => {
      setIsSubmitting(true);
      addLog('INITIATING_UPLINK: Establishing secure connection to core server...', 'primary');

      const payload: ProjectPayload = {
         name: formData.projectId,
         email: formData.email,
         company: formData.company,
         project_type: formData.scopes.length > 0 ? formData.scopes : ['General Inquiry'],
         description: formData.message || 'No description provided',
         budget_range: `$${formData.budget}`,
      };

      try {
         const response = await ProjectService.submit(payload);

         if (response.ok) {
            addLog('TRANSMISSION_COMPLETE: Project payload delivered successfully.', 'success');
            addLog(`SERVER_RESPONSE: ${response.message}`, 'success');
            setTimeout(() => {
               navigate('/deployed');
            }, 2000);
         } else {
            // If we have validation errors in data, log them
            if (response.data && Array.isArray(response.data)) {
               response.data.forEach((err: any) => {
                  addLog(`VALIDATION_ERROR: [${err.path.join('.')}] ${err.message}`, 'warning');
               });
            }
            throw new Error(response.message || 'Unknown error');
         }
      } catch (error: any) {
         addLog(`TRANSMISSION_ERROR: ${error.message}`, 'warning');
         setIsSubmitting(false);
      }
   };

   return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-3 lg:p-12 relative animate-fadeIn">
         <SEO
            title="Iniciar Proyecto | Configuración de Sistema"
            description="Comienza la secuencia de construcción de tu próximo activo digital. Define alcances, objetivos y presupuesto para infraestructura de alto rendimiento."
         />
         {/* Background watermark */}

         <div className="fixed bottom-0 right-0 p-8 opacity-5 pointer-events-none select-none overflow-hidden max-w-[80vw]">
            <div className="text-[150px] font-black leading-none text-primary uppercase whitespace-nowrap">
               {formData.projectId || 'FANTASMA'}
            </div>
         </div>

         <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 border border-white/10 rounded shadow-2xl overflow-hidden relative z-10">
            {/* Form */}
            <div className="lg:col-span-8 bg-surface p-8 lg:p-12">
               <div className="mb-10">
                  <h1 className="text-4xl font-black tracking-tighter text-white mb-2 font-display">Iniciar Construcción del Sistema</h1>
                  <p className="text-white/50 font-medium font-mono text-sm">Define la arquitectura de tu próximo activo.</p>
               </div>

               <div className="space-y-10">
                  {/* 01. Identity */}
                  <section>
                     <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-2 font-mono">
                        <Fingerprint size={16} /> 01. Identidad del Proyecto
                     </h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                           <label className="text-xs font-mono text-white/40 uppercase tracking-tighter">ID_Proyecto / Nombre</label>
                           <input
                              type="text"
                              value={formData.projectId}
                              onChange={(e) => handleInputChange('projectId', e.target.value)}
                              placeholder="GHOST_PROTOCOL_01"
                              className="bg-transparent border border-white/20 focus:border-primary rounded p-4 font-mono text-sm text-white placeholder:text-white/10 outline-none transition-colors"
                           />
                        </div>
                        <div className="flex flex-col gap-2">
                           <label className="text-xs font-mono text-white/40 uppercase tracking-tighter">Email_del_Arquitecto</label>
                           <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              placeholder="info@fantasmadigital.dev"
                              className="bg-transparent border border-white/20 focus:border-primary rounded p-4 font-mono text-sm text-white placeholder:text-white/10 outline-none transition-colors"
                           />
                        </div>
                        <div className="flex flex-col gap-2 md:col-span-2">
                           <label className="text-xs font-mono text-white/40 uppercase tracking-tighter">Organización / Compañía</label>
                           <input
                              type="text"
                              value={formData.company}
                              onChange={(e) => handleInputChange('company', e.target.value)}
                              placeholder="ACME CORP INT."
                              className="bg-transparent border border-white/20 focus:border-primary rounded p-4 font-mono text-sm text-white placeholder:text-white/10 outline-none transition-colors"
                           />
                        </div>
                     </div>
                  </section>

                  {/* 02. Scope */}
                  <section>
                     <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-2 font-mono">
                        <Layers size={16} /> 02. Alcance de la Infraestructura
                     </h3>

                     <div className="relative" ref={scopeRef}>
                        {/* Custom Select Trigger */}
                        <button
                           onClick={() => setIsScopeOpen(!isScopeOpen)}
                           className="w-full bg-white/5 border border-white/10 p-4 rounded flex items-center justify-between group hover:border-primary/50 transition-all font-mono text-sm"
                        >
                           <span className={formData.scopes.length > 0 ? 'text-white' : 'text-white/20'}>
                              {formData.scopes.length > 0
                                 ? `${formData.scopes.length} Módulo(s) Seleccionado(s)`
                                 : 'SELECCIONAR_MÓDULOS_DE_SISTEMA...'}
                           </span>
                           <ChevronDown size={18} className={`text-primary transition-transform duration-300 ${isScopeOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown Menu */}
                        {isScopeOpen && (
                           <div className="absolute top-full left-0 right-0 mt-2 bg-surface border border-white/10 rounded shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                              <div className="max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10">
                                 {servicesSolutions.map(s => (
                                    <button
                                       key={s.id}
                                       onClick={() => toggleScope(s.title)}
                                       className={`w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors border-b border-white/5 last:border-none group ${formData.scopes.includes(s.title) ? 'bg-primary/5' : ''}`}
                                    >
                                       <div className="flex items-center gap-3">
                                          <div className={`w-2 h-2 rounded-full ${formData.scopes.includes(s.title) ? 'bg-primary shadow-[0_0_8px_rgba(250,179,112,0.8)]' : 'bg-white/10'}`}></div>
                                          <span className={`text-xs font-mono uppercase tracking-tight ${formData.scopes.includes(s.title) ? 'text-primary' : 'text-white/60'}`}>
                                             {s.title}
                                          </span>
                                       </div>
                                       {formData.scopes.includes(s.title) && <CheckCircle size={14} className="text-primary" />}
                                    </button>
                                 ))}
                              </div>
                           </div>
                        )}
                     </div>

                     {/* Selected Tags Display */}
                     {formData.scopes.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                           {formData.scopes.map(s => (
                              <div key={s} className="bg-primary/10 border border-primary/20 px-3 py-1 rounded-sm flex items-center gap-2 animate-fadeIn">
                                 <span className="text-[10px] font-mono text-primary font-bold uppercase">{s}</span>
                                 <button onClick={() => toggleScope(s)} className="text-primary hover:text-white transition-colors">
                                    <X size={12} />
                                 </button>
                              </div>
                           ))}
                        </div>
                     )}
                  </section>

                  {/* 03. Concept */}
                  <section>
                     <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-2 font-mono">
                        <MessageSquare size={16} /> 03. Concepto y Objetivos
                     </h3>
                     <div className="flex flex-col gap-2">
                        <label className="text-xs font-mono text-white/40 uppercase tracking-tighter">Visión_del_Sistema</label>
                        <textarea
                           value={formData.message}
                           onChange={(e) => handleInputChange('message', e.target.value)}
                           placeholder="Describe tu visión, desafíos y lo que esperas lograr..."
                           rows={4}
                           className="bg-transparent border border-white/20 focus:border-primary rounded p-4 font-mono text-sm text-white placeholder:text-white/10 outline-none transition-colors resize-none"
                        />
                     </div>
                  </section>

                  {/* 04. Budget */}
                  <section>
                     <div className="flex justify-between items-end mb-6">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary flex items-center gap-2 font-mono">
                           <DollarSign size={16} /> 04. Presupuesto de Ingeniería
                        </h3>
                        <div className="flex items-center gap-2 bg-primary/5 px-3 py-2 rounded border border-primary/20">
                           <span className="text-primary font-mono text-sm leading-none">$</span>
                           <input
                              type="number"
                              value={formData.budget}
                              min="40"
                              max="25000"
                              onChange={(e) => {
                                 const val = parseInt(e.target.value) || 0;
                                 setFormData(prev => ({ ...prev, budget: Math.min(Math.max(val, 0), 25000) }));
                              }}
                              onBlur={() => {
                                 if (formData.budget < 40) setFormData(prev => ({ ...prev, budget: 40 }));
                              }}
                              className="bg-transparent border-none outline-none font-mono text-primary text-sm w-20 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-0 leading-none"
                           />
                        </div>
                     </div>
                     <div className="relative w-full h-8 flex items-center group">
                        <input
                           type="range"
                           min="40"
                           max="25000"
                           step="10"
                           value={formData.budget}
                           onChange={handleBudgetChange}
                           className="w-full h-1 bg-white/20 appearance-none cursor-pointer accent-primary"
                        />
                        <div
                           className="absolute h-1 bg-primary shadow-[0_0_10px_rgba(250,179,112,0.5)] pointer-events-none"
                           style={{ width: `${((Math.max(formData.budget, 40) - 40) / 24960) * 100}%` }}
                        ></div>
                     </div>
                  </section>

                  {/* Footer Actions */}
                  <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10">
                     <div className="flex items-center gap-4 text-[10px] font-mono text-white/50 uppercase tracking-widest">
                        <span className="flex items-center gap-1">
                           <span className={`w-1.5 h-1.5 rounded-full ${formData.projectId && formData.email ? 'bg-green-500' : 'bg-red-500 animate-pulse'}`}></span>
                           {formData.projectId && formData.email ? 'Sistema Listo' : 'Esperando Identidad'}
                        </span>
                        <span>v2.4.0-estable</span>
                     </div>
                     <button
                        onClick={handleSubmit}
                        disabled={!formData.projectId || !formData.email || isSubmitting}
                        className="w-full sm:w-auto px-10 py-4 bg-primary text-background font-bold uppercase tracking-widest text-sm rounded hover:bg-white disabled:opacity-30 disabled:hover:bg-primary transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2"
                     >
                        {isSubmitting ? (
                           <>
                              <div className="w-4 h-4 border-2 border-background/50 border-t-background rounded-full animate-spin" />
                              PROCESANDO...
                           </>
                        ) : (
                           'Solicitar Despliegue'
                        )}
                     </button>
                  </div>
               </div>
            </div>

            {/* Terminal Sidebar */}
            <div className="lg:col-span-4 bg-black flex flex-col border-l border-white/10">
               <div className="p-6 border-b border-white/10 bg-white/5 flex justify-between items-center">
                  <div>
                     <h4 className="text-xs font-bold font-mono text-white/50 uppercase tracking-widest mb-1">Monitor_de_Diagnóstico</h4>
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary animate-pulse rounded-full"></div>
                        <span className="text-[10px] font-mono text-primary uppercase tracking-tighter">
                           {formData.projectId ? `Sincronizado: ${formData.projectId}` : 'Escuchando...'}
                        </span>
                     </div>
                  </div>
                  {formData.email && (
                     <div className="text-[9px] font-mono text-white/20 text-right">
                        LINK: {formData.email}
                     </div>
                  )}
               </div>
               <div
                  ref={terminalRef}
                  className="flex-grow p-6 font-mono text-[10px] leading-relaxed text-white/40 overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-white/10"
               >
                  <div className="space-y-3">
                     {logs.map((log) => (
                        <p key={log.id} className="break-words">
                           <span className="opacity-40">[{log.time}]</span>{' '}
                           <span className={`
                        ${log.type === 'success' ? 'text-green-500' : ''}
                        ${log.type === 'primary' ? 'text-primary font-bold' : ''}
                        ${log.type === 'warning' ? 'text-red-400' : ''}
                        ${log.type === 'default' ? 'text-white/60' : ''}
                      `}>
                              {log.message}
                           </span>
                        </p>
                     ))}
                     <div className="animate-pulse text-primary font-bold">_</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Intake;