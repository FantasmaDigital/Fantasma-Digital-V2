import { Terminal, Layers, Palette, Cloud, Brain, Database, ShoppingCart, Smartphone, Gauge, Zap, Server, Cpu, Shield, HardDrive, BarChart3, TrendingUp } from 'lucide-react';

export const servicesHome = [
    { id: '01', title: 'Páginas y Sistemas Web', slug: 'full-stack-development', icon: Terminal, desc: 'Sitios y plataformas web de alto rendimiento, construidos para crecer con tu negocio.' },
    { id: '02', title: 'Conexión entre Sistemas', slug: 'api-ecosystems', icon: Layers, desc: 'Unimos tus herramientas para que trabajen solas, sin intervención manual.' },
    { id: '03', title: 'Inteligencia Artificial', slug: 'ai-automation', icon: Brain, desc: 'Agentes de IA que responden, califican y agendan por ti, las 24 horas del día.' },
    { id: '04', title: 'Identidad de Marca', slug: 'visual-identity-systems', icon: Palette, desc: 'Tu logo, colores y sistema visual completo. Hecho para que no pases desapercibido.' },
    { id: '05', title: 'Marketing y Crecimiento', slug: 'algorithmic-marketing-growth', icon: TrendingUp, desc: 'Campañas inteligentes con SEO técnico, automatización CRM e IA para escalar tu retorno.' },
    { id: '06', title: 'Infraestructura y Nube', slug: 'cloud-devops', icon: Cloud, desc: 'Tu servidor siempre activo, seguro y sin caídas. Gestión cloud que tú controlas.' },
    { id: '07', title: 'Organización de Datos', slug: 'database-architecture', icon: Database, desc: 'Bases de datos ordenadas, rápidas y seguras que soportan cualquier volumen de información.' },
    { id: '08', title: 'Tiendas en Línea', slug: 'ecommerce-solutions', icon: ShoppingCart, desc: 'Tu tienda online lista para vender, con pagos integrados y experiencia de compra fluida.' },
    { id: '09', title: 'Aplicaciones Móviles', slug: 'mobile-development', icon: Smartphone, desc: 'Apps nativas para iOS y Android que tus usuarios van a querer usar todos los días.' }
];

export const servicesSolutions = [
    {
        id: '001',
        title: 'Desarrollo de Plataformas Web',
        slug: 'full-stack-development',
        icon: Terminal,
        desc: 'Tu sitio web o plataforma, construida desde cero para ser rápida, segura y lista para crecer.',
        tags: ['WEB', 'ESCALABILIDAD', 'RENDIMIENTO'],
        stat: 'ESTADO: ALTA CARGA'
    },
    {
        id: '002',
        title: 'Conexión entre Sistemas (API)',
        slug: 'api-ecosystems',
        icon: Layers,
        desc: 'Conectamos tus herramientas — CRM, ERP, plataformas externas — para que funcionen como un solo sistema.',
        tags: ['INTEGRACIÓN', 'FLUJOS', 'AUTOMATIZACIÓN'],
        stat: 'DOCS: INCLUIDO'
    },
    {
        id: '003',
        title: 'Inteligencia Artificial y Agentes',
        slug: 'ai-automation',
        icon: Brain,
        desc: 'Un agente que conoce tu negocio, responde a tus clientes y automatiza tareas repetitivas sin que muevas un dedo.',
        tags: ['IA', 'AGENTES', 'AUTOMATIZACIÓN'],
        stat: 'SISTEMA: INTELIGENTE'
    },
    {
        id: '004',
        title: 'Identidad de Marca y Branding',
        slug: 'visual-identity-systems',
        icon: Palette,
        desc: 'Tu logo, paleta de colores, tipografía y sistema visual completo para que tu marca se vea profesional desde el día uno.',
        tags: ['MARCA', 'DISEÑO', 'BRANDING'],
        stat: 'CALIDAD: PREDICTIVA'
    },
    {
        id: '005',
        title: 'Marketing y Crecimiento Digital',
        slug: 'algorithmic-marketing-growth',
        icon: BarChart3,
        desc: 'Campañas inteligentes con SEO técnico, automatización de embudos CRM e IA para traerte más clientes al menor costo.',
        tags: ['SEO', 'CRM', 'CAMPAÑAS'],
        stat: 'CONVERSIÓN: ACTIVA'
    },
    {
        id: '006',
        title: 'Infraestructura Cloud y DevOps',
        slug: 'cloud-devops',
        icon: Server,
        desc: 'Tu servidor en la nube, siempre activo y bajo tu control. Sin caídas, sin sorpresas y sin depender de terceros.',
        tags: ['CLOUD', 'DEVOPS', 'AWS / VERCEL'],
        stat: 'UPTIME: 99.99%'
    },
    {
        id: '007',
        title: 'Arquitectura de Datos',
        slug: 'database-architecture',
        icon: Database,
        desc: 'Bases de datos diseñadas para ser rápidas, seguras y capaces de manejar millones de registros sin problemas.',
        tags: ['DATOS', 'SEGURIDAD', 'VECTORES'],
        stat: 'INTEGRIDAD: 100%'
    },
    {
        id: '008',
        title: 'Tiendas Online (E-commerce)',
        slug: 'ecommerce-solutions',
        icon: Gauge,
        desc: 'Tu tienda digital con pagos integrados, carrito optimizado y experiencia de compra que convierte visitantes en clientes.',
        tags: ['COMERCIO', 'PAGOS', 'CONVERSIÓN'],
        stat: 'CONVERSIÓN: MAX'
    },
    {
        id: '009',
        title: 'Aplicaciones Móviles (iOS y Android)',
        slug: 'mobile-development',
        icon: Zap,
        desc: 'Apps nativas diseñadas para que tus usuarios las usen a diario — rápidas, intuitivas y con tu marca en su bolsillo.',
        tags: ['MÓVIL', 'iOS', 'ANDROID'],
        stat: 'CALIDAD: NATIVA'
    },
    {
        id: '010',
        title: 'Modernización de Software',
        slug: 'elite-refactoring',
        icon: Cpu,
        desc: 'Actualizamos tu sistema antiguo a tecnología moderna sin perder un solo día de operación en el proceso.',
        tags: ['MODERNIZACIÓN', 'LEGACY', 'VELOCIDAD'],
        stat: 'OPTIMIZACIÓN: TOTAL'
    },
    {
        id: '011',
        title: 'Seguridad y Auditoría Técnica',
        slug: 'technical-audit',
        icon: Shield,
        desc: 'Buscamos las vulnerabilidades de tu sistema antes de que alguien más las encuentre. Análisis completo, sin rodeos.',
        tags: ['SEGURIDAD', 'AUDITORÍA', 'OWASP'],
        stat: 'CUMPLIMIENTO: MAX'
    },
    {
        id: '012',
        title: 'Infraestructura On-Premise',
        slug: 'on-premise-infrastructure',
        icon: HardDrive,
        desc: 'Servidores físicos configurados e instalados en tus propias instalaciones. Tu infraestructura, bajo tu techo.',
        tags: ['LOCAL', 'HARDWARE', 'SERVIDORES'],
        stat: 'RED: CONFIGURADA'
    }
];
