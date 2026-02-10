import { Terminal, Layers, Palette, Cloud, Brain, Database, ShoppingCart, Smartphone, Gauge, Zap, Server, Code, Cpu, Shield, HardDrive } from 'lucide-react';

export const servicesHome = [
    { id: '01', title: 'Páginas y Sistemas Web', slug: 'full-stack-development', icon: Terminal, desc: 'Creamos sitios web potentes y aplicaciones interactivas.' },
    { id: '02', title: 'Conexión entre Sistemas', slug: 'api-ecosystems', icon: Layers, desc: 'Hacemos que tus herramientas de software hablen entre sí.' },
    { id: '03', title: 'Modernización de Software', slug: 'elite-refactoring', icon: Cpu, desc: 'Actualizamos tus sistemas antiguos para que sean rápidos y modernos.' },
    { id: '04', title: 'Diseño Visual Digital', slug: 'ui-ux-design', icon: Palette, desc: 'Diseñamos interfaces elegantes y fáciles de usar.' },
    { id: '05', title: 'Nube y Servidores', slug: 'cloud-devops', icon: Cloud, desc: 'Gestionamos tu presencia en internet con máxima estabilidad.' },
    { id: '06', title: 'Inteligencia Artificial', slug: 'ai-automation', icon: Brain, desc: 'Automatizamos tus procesos con tecnología inteligente.' },
    { id: '07', title: 'Organización de Datos', slug: 'database-architecture', icon: Database, desc: 'Guardamos y ordenamos tu información de forma segura.' },
    { id: '08', title: 'Venta Online (Tiendas)', slug: 'ecommerce-solutions', icon: ShoppingCart, desc: 'Montamos tu tienda digital lista para vender.' },
    { id: '09', title: 'Aplicaciones para Celular', slug: 'mobile-development', icon: Smartphone, desc: 'App nativas para iPhone y Android.' }
];

export const servicesSolutions = [
    {
        id: '001',
        title: 'Desarrollo de Plataformas Web',
        slug: 'full-stack-development',
        icon: Terminal,
        desc: 'Sistemas web completos, rápidos y seguros. Desde la idea hasta el lanzamiento final.',
        tags: ['PÁGINAS WEB', 'SISTEMAS', 'INTERNET'],
        stat: 'ESTADO: ALTA CARGA'
    },
    {
        id: '002',
        title: 'Integración de Herramientas',
        slug: 'api-ecosystems',
        icon: Layers,
        desc: 'Conectamos tus diferentes programas y servicios internos para que trabajen como uno solo.',
        tags: ['CONEXIONES', 'ENLACES', 'FLUJO'],
        stat: 'DOCS: INCLUIDO'
    },
    {
        id: '003',
        title: 'Actualización de Sistemas Antiguos',
        slug: 'elite-refactoring',
        icon: Cpu,
        desc: 'Tomamos tu software actual y lo transformamos en una herramienta moderna y veloz.',
        tags: ['MEJORA', 'VELOCIDAD', 'ESTABILIDAD'],
        stat: 'OPTIMIZACIÓN: TOTAL'
    },
    {
        id: '004',
        title: 'Diseño Digital y de Usuario',
        slug: 'ui-ux-design',
        icon: Palette,
        desc: 'Diseño de interfaces que enamoran a tus clientes y simplifican su experiencia.',
        tags: ['DISEÑO', 'MARCA', 'EXPERIENCIA'],
        stat: 'CALIDAD: PREDICTIVA'
    },
    {
        id: '005',
        title: 'Infraestructura y Nube',
        slug: 'cloud-devops',
        icon: Server,
        desc: 'Montamos y mantenemos tus servidores en la nube para que nunca dejen de funcionar.',
        tags: ['NUBE', 'ESTABILIDAD', 'AWS'],
        stat: 'UPTIME: 99.99%'
    },
    {
        id: '006',
        title: 'IA y Automatización de Tareas',
        slug: 'ai-automation',
        icon: Brain,
        desc: 'Usamos Inteligencia Artificial para ahorrarte tiempo y automatizar trabajos repetitivos.',
        tags: ['BOTS', 'IA', 'EFICIENCIA'],
        stat: 'SISTEMA: INTELIGENTE'
    },
    {
        id: '007',
        title: 'Gestión de Bases de Datos',
        slug: 'database-architecture',
        icon: Database,
        desc: 'Ordenamos y protegemos toda la información de tu empresa para un acceso rápido.',
        tags: ['DATOS', 'SEGURIDAD', 'ORDEN'],
        stat: 'INTEGRIDAD: 100%'
    },
    {
        id: '008',
        title: 'Venta Digital y E-commerce',
        slug: 'ecommerce-solutions',
        icon: Gauge,
        desc: 'Todo lo que necesitas para vender tus productos o servicios por internet.',
        tags: ['TIENDA', 'PAGOS', 'VENTAS'],
        stat: 'CONVERSIÓN: ACTIVA'
    },
    {
        id: '009',
        title: 'Aplicaciones Móviles',
        slug: 'mobile-development',
        icon: Zap,
        desc: 'Desarrollamos aplicaciones personalizadas para celulares iOS y Android.',
        tags: ['MOBILE', 'APP', 'CELULAR'],
        stat: 'CALIDAD: NATIVA'
    },
    {
        id: '010',
        title: 'Revisión y Seguridad Técnica',
        slug: 'technical-audit',
        icon: Shield,
        desc: 'Evaluamos tu sistema actual para encontrar fallas de seguridad y puntos de mejora.',
        tags: ['REVISIÓN', 'SEGURIDAD', 'CONTROL'],
        stat: 'CUMPLIMIENTO: MAX'
    },
    {
        id: '011',
        title: 'Servidores y Equipos Físicos',
        slug: 'on-premise-infrastructure',
        icon: HardDrive,
        desc: 'Configuración de servidores reales instalados directamente en tu oficina o sede.',
        tags: ['EQUIPOS', 'LOCAL', 'POTENCIA'],
        stat: 'RED: CONFIGURADA'
    }
];
