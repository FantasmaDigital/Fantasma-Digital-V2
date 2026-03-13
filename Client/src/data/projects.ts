import { Terminal, Smartphone, Server, Database, Layout, Package, Cpu } from 'lucide-react';

export interface ProjectMetric {
    label: string;
    val: string;
    unit: string;
}

export interface ProjectFeature {
    title: string;
    desc: string;
    icon: any;
    items: string[];
    details: { label: string; value: string }[];
    filename: string;
    code: string;
}

export interface Project {
    slug: string;
    title: string;
    subtitle: string;
    industry: string;
    tech: string;
    image: string;
    desc: string;
    longDesc: string[];
    metrics: ProjectMetric[];
    features: ProjectFeature[];
    quote: string;
    quoteAuthor: string;
}

export const projects: Project[] = [
    {
        slug: 'abono-viajes',
        title: 'Abono Viajes',
        subtitle: 'Arquitectura Fintech de Ahorro Programado',
        industry: 'FINTECH / TRAVEL',
        tech: 'Expo / Node.js / MongoDB',
        image: '/images/projects/abonoviajes-1.webp',
        desc: 'Sincronización financiera para el sector turismo mediante ingeniería monorepo.',
        longDesc: [
            'DESAFÍO: La fragmentación financiera en el sector turismo impedía a los usuarios planificar ahorros consistentes para ocio sin comprometer su liquidez operativa o seguridad de datos.',
            'SOLUCIÓN: Desplegamos un ecosistema monorepo de alto rendimiento utilizando Expo y Node.js. Implementamos una capa de seguridad Zero-Trust con protocolos JWT y una base de datos distribuida en MongoDB para garantizar la integridad de cada transacción.',
            'IMPACTO: Logramos una plataforma con escalabilidad elástica capaz de soportar picos de demanda estacional del 300% sin degradación de latencia, blindando el capital de ahorro de miles de usuarios.'
        ],
        metrics: [
            { label: 'Crecimiento de Ventas', val: '45%', unit: 'KPI' },
            { label: 'Integridad de Datos', val: '100%', unit: 'SEC' },
            { label: 'Arquitectura', val: 'Monorepo', unit: 'Edge' },
            { label: 'Despliegue', val: 'EAS', unit: 'CI/CD' }
        ],
        features: [
            {
                title: 'Expo & React Native Core',
                desc: 'Utilizamos TypeScript estricto para garantizar que la lógica de ahorro se mantenga íntegra entre el cliente y el servidor, eliminando errores en transacciones críticas.',
                icon: Smartphone,
                items: ['Lógica de Negocio Sincronizada', 'Interfaz Reactiva de Alta Gama', 'Seguridad Biométrica Integrada'],
                filename: 'AbonoEngine.tsx',
                details: [
                    { label: 'Tipado Estricto', value: '98%' },
                    { label: 'Seguridad', value: 'JWT + AES' },
                    { label: 'UX Perf', value: 'Premium' }
                ],
                code: ''
            },
            {
                title: 'Arquitectura de Microservicios Node.js',
                desc: 'El núcleo transaccional orquesta miles de operaciones simultáneas con latencia sub-segundo, permitiendo una gestión de abonos en tiempo real sin fricción.',
                icon: Server,
                items: ['MongoDB Distributed Cluster', 'API RESTful Segura', 'Monitoreo de Salud 24/7'],
                filename: 'transaction_service.ts',
                details: [],
                code: `// Secure Saving Protocol\nrouter.post("/saving/initialize", authenticate, async (req, res) => {\n  const vault = await FinancialVault.create(req.body);\n  return res.status(201).json({ success: true, vaultId: vault._id });\n});`
            }
        ],
        quote: 'Convertimos el ahorro en una experiencia de ingeniería blindada para el viajero moderno.',
        quoteAuthor: 'ABONO VIAJES: ARQUITECTURA FINTECH'
    },
    {
        slug: 'music-center-pro',
        title: '2001 Music Center Pro',
        subtitle: 'E-Commerce de Alta Transaccionalidad',
        industry: 'RETAIL / E-COMMERCE',
        tech: 'TypeScript / Node.js / Vercel',
        image: '/images/projects/musiccenterpro-1.webp',
        desc: 'Escalabilidad omnicanal para el líder en instrumentos musicales en El Salvador.',
        longDesc: [
            'DESAFÍO: La gestión de un inventario masivo de instrumentos de alta gama requería una sincronización en tiempo real inapreciable para evitar quiebres de stock durante ventas críticas y eventos de alto tráfico.',
            'SOLUCIÓN: Implementamos una arquitectura de microservicios con tipado estricto en TypeScript para garantizar la integridad de los datos logísticos. Optimizamos la entrega de contenido mediante Static Site Generation (SSG) y despliegue atómico en el Edge.',
            'IMPACTO: Reducción del 70% en el tiempo de carga de página y eliminación total de discrepancias en inventario, resultando en un incremento directo del 35% en conversiones digitales.'
        ],
        metrics: [
            { label: 'Conversión Web', val: '+35%', unit: 'GROWTH' },
            { label: 'Latencia Edge', val: '<30ms', unit: 'SPEED' },
            { label: 'Tipado Core', val: '100%', unit: 'TS' },
            { label: 'Disponibilidad', val: '99.9%', unit: 'UP' }
        ],
        features: [
            {
                title: 'TypeScript Core Architecture',
                desc: 'Garantizamos la integridad de los datos en transacciones de alto valor mediante un sistema de tipos robusto que previene errores humanos en capas críticas del negocio.',
                icon: Cpu,
                items: ['Type-safe Data Flow', 'Estructura Modular Escalable', 'Validación de Esquema en Tiempo Real'],
                filename: 'InventoryService.ts',
                details: [
                    { label: 'Tipado de Datos', value: '100%' },
                    { label: 'Infraestructura', value: 'Serverless' },
                    { label: 'Seguridad', value: 'WAF Guard' }
                ],
                code: `interface IProductAsset {\n  id: string;\n  stockLevel: number;\n  availability: boolean;\n}\n\n// Atomic Stock Update\nexport const syncStock = async (id: string) => {\n  await db.revalidateTag('inventory-sync');\n};`
            }
        ],
        quote: 'Sintonizamos la eficiencia operativa con la pasión artística a través de ingeniería de software de élite.',
        quoteAuthor: 'MUSIC CENTER PRO: OMNICHANNEL ENGINEERING'
    },
    {
        slug: 'inkspire-studio',
        title: 'Inkspire Studio',
        subtitle: 'Premium Personalization Lab',
        industry: 'DESIGN / E-COMMERCE',
        tech: 'Next.js / Supabase / Tailwind',
        image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800',
        desc: 'Estudio de personalización premium basado en El Salvador enfocado en estética "Chapter-based" y curaduría visual.',
        longDesc: [
            'Inkspire Studio es un estudio de personalización premium que trata las prendas como piezas de arte. Su propuesta se centra en la personalización total permitiendo a los usuarios subir sus propios diseños con validación de calidad.',
            'Implementamos un enfoque visual minimalista utilizando Next.js para un rendimiento superior y Supabase para la gestión dinámica de activos y colecciones temáticas.'
        ],
        metrics: [
            { label: 'Frontend', val: 'Next.js', unit: 'App Router' },
            { label: 'Storage', val: 'Supabase', unit: 'Buckets' },
            { label: 'Perf', val: '98/100', unit: 'Lighthouse' },
            { label: 'Estilo', val: 'Atomic', unit: 'Tailwind' }
        ],
        features: [
            {
                title: 'Next.js & Visual Curaduría',
                desc: 'Enfoque visual extremadamente cuidado que trata las categorías como "Capítulos". Interfaz minimalista con efectos de opacidad y tipografía limpia para una experiencia de galería.',
                icon: Layout,
                items: ['Rutas dinámicas por colección', 'Optimización de imágenes Vercel', 'Estructura de capítulos estéticos'],
                filename: 'next-env.d.ts',
                details: [
                    { label: 'Framework', value: 'Next.js 14+' },
                    { label: 'Styling', value: 'Tailwind CSS' },
                    { label: 'UX Focus', value: 'Minimalist Gallery' }
                ],
                code: ''
            },
            {
                title: 'Supabase Data Engine',
                desc: 'Gestión íntegra de inventario y activos multimedia mediante Supabase. Las imágenes de productos se sirven desde buckets optimizados, permitiendo una carga asíncrona y fluida.',
                icon: Database,
                items: ['Supabase Auth & Storage', 'Real-time Inventory Sync', 'Asset Bucket Management'],
                filename: 'supabase_client.ts',
                details: [],
                code: `const { data, error } = await supabase\n  .from('collections')\n  .select('*, items(*)')\n  .eq('slug', 'racing-chapter');`
            }
        ],
        quote: 'Elevamos la moda personalizada a nivel de galería artística a través de la curaduría digital de Inkspire Studio.',
        quoteAuthor: 'DESPLIEGUE CLAVE: INKSPIRE STUDIO'
    }
];
