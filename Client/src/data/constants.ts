import { Activity, Cloud, FileText, Lock, PenTool, Shield } from "lucide-react";

export const providers = [
    { name: 'GoDaddy', type: 'Domain Control', desc: 'Gestión masiva de dominios y servicios DNS de alta disponibilidad.' },
    { name: 'NameCheap', type: 'Domain Privacy', desc: 'Estructura de registro de dominios centrada en la privacidad y redundancia.' },
    { name: 'Vercel', type: 'Edge Runtime', desc: 'Despliegue instantáneo en el Edge con frameworks reactivos de última generación.' }
];

export const osSupport = [
    { name: 'Ubuntu', version: 'LTS 24.04', color: 'text-orange-500' },
    { name: 'CentOS', version: 'Stream 9', color: 'text-blue-400' },
    { name: 'AlmaLinux', version: 'v9.3 Stable', color: 'text-green-500' },
    { name: 'RedHat', version: 'RHEL 9.2', color: 'text-red-500' }
];

export const terminalLogs = [
    'Establishing_Secure_RAG_Tunnel...',
    'Deep_Indexing_Knowledge_Vectors...',
    'Scaling_Autonomous_Agent_071...',
    'Context_Injected (Namespace: FANTASMA_CORE)',
    'Awaiting_Signal...',
    'AI_Node_Active (Priority: CRITICAL)'
];

export const mathSymbols = ['Σ', '∇', '∂', '∫', 'ψ', 'λ', 'ρ', 'Ω', 'μ'];

export const dimensionX = [
    { label: 'FIDELIDAD', val: '4K_RT' },
    { label: 'LATENCIA', val: '< 20MS' },
    { label: 'IA_ENGINE', val: 'GPT-4_O' },
    { label: 'RENDER', val: 'WEBGL_2' }
]

export const visualIdentity = [
    { label: 'Matemática', val: 'PROPORCIÓN ÁUREA' },
    { label: 'Estructura', label2: 'GRILLAS DE PRECISIÓN' },
    { label: 'Tipografía', val: 'ADN DE MARCA ÚNICO' },
    { label: 'Formato', val: 'VECTORES DE ALTA FIDELIDAD' }
]

export const operationalInt = [
    { title: 'Asistente IA 24/7', desc: 'Un agente que conoce tu negocio y responde a tus clientes en cualquier momento del día.' },
    { title: 'Marketing que aprende', desc: 'Campañas que se optimizan solas para traerte más clientes al menor costo posible.' },
    { title: 'Todo conectado', desc: 'Tu CRM, tu web y tus campañas trabajando juntos, sin intervención manual.' }
]

export const pillars = [
    { id: '01', icon: Activity, title: 'Crece sin límites', desc: 'Tu plataforma evoluciona con tu negocio. Desde 10 usuarios hasta 10 millones, sin cambiar de proveedor ni perder el sueño.' },
    { id: '02', icon: PenTool, title: 'Diseño que enamora', desc: 'Interfaces que tus clientes entenderán de inmediato, y que harán que no quieran usar nada más.' },
    { id: '03', icon: Cloud, title: 'Tu datos, tu control', desc: 'Infraestructura en la nube que solo tú controlas. Nada de dependencias frágiles ni proveedores que te pueden dejar colgado.' }
]

export const cibersecurity = [
    {
        icon: Shield,
        title: 'Encontramos tus vulnerabilidades',
        desc: 'Buscamos las puertas traseras antes de que alguien más las encuentre. Análisis profundo, sin rodeos.',
        stat: '99.9%',
        statLabel: 'Detección'
    },
    {
        icon: FileText,
        title: 'Cumples con la ley',
        desc: 'GDPR, ISO 27001, SOC 2. Tu empresa en regla, con la documentación que los clientes grandes te van a pedir.',
        stat: '100%',
        statLabel: 'Cumplimiento'
    },
    {
        icon: Lock,
        title: 'Resistente a ataques',
        desc: 'Simulamos ataques reales para reforzar tus defensas antes de que llegue alguien con malas intenciones.',
        stat: '24/7',
        statLabel: 'Protección'
    },
    {
        icon: Activity,
        title: 'Vigilancia constante',
        desc: 'Si algo raro pasa, lo sabemos antes que tú. Alertas en tiempo real y respuesta inmediata ante cualquier incidente.',
        stat: '<5min',
        statLabel: 'Respuesta'
    }
]

export const performanceProof = [
    { label: 'Rendimiento', val: '100', color: 'text-green-500' },
    { label: 'Accesibilidad', val: '100', color: 'text-green-500' },
    { label: 'Buenas Prácticas', val: '100', color: 'text-green-500' },
    { label: 'SEO', val: '100', color: 'text-green-500' },
]

export const fullText = "SOFTWARE";

export const stats = [
    { metric: '99.99%', label: 'Uptime Garantizado', context: 'Arquitectura Serverless' },
    { metric: '<30ms', label: 'Latencia Edge', context: 'Procesamiento Cercano' },
    { metric: '4x', label: 'Rendimiento Operativo', context: 'Optimización de Código' },
    { metric: '100%', label: 'Escalabilidad Elástica', context: 'Infraestructura como Código' }
];

export const logsStats = [
    { id: 1, time: '08:44:21', message: 'INITIALIZING_CORE_ENGINE...', type: 'default' },
    { id: 2, time: '08:44:22', message: 'SECURITY_HANDSHAKE: SUCCESS', type: 'success' },
    { id: 3, time: '08:44:23', message: 'FETCHING_NEURAL_TEMPLATES...', type: 'default' },
    { id: 4, time: '08:44:25', message: '> ESTADO: Esperando_Identidad_de_Arquitectura', type: 'primary' },
]