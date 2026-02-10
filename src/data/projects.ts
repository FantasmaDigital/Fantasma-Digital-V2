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
        subtitle: 'Travel Savings Ecosystem',
        industry: 'FINTECH / TRAVEL',
        tech: 'Expo / Node.js / MongoDB',
        image: '/images/projects/abonoviajes-1.webp',
        desc: 'Plataforma integral de ahorro y gestión de abonos para viajes con arquitectura monorepo.',
        longDesc: [
            'Abono Viajes es una plataforma integral diseñada para gestionar planes de ahorro y abonos para viajes. El sistema permite a los usuarios estructurar su financiamiento de ocio con precisión y seguridad.',
            'Implementamos un enfoque de monorepo para garantizar la sincronización perfecta entre la lógica de negocio del servidor y la experiencia de usuario en dispositivos móviles.'
        ],
        metrics: [
            { label: 'Arquitectura', val: 'Monorepo', unit: 'Client/Server' },
            { label: 'Build System', val: 'EAS', unit: 'Managed' },
            { label: 'Data Store', val: 'MongoDB', unit: 'NoSQL' },
            { label: 'Auth Protocol', val: 'JWT', unit: 'Secure' }
        ],
        features: [
            {
                title: 'Expo & React Native',
                desc: 'Utilizamos Expo (Managed Workflow) para un despliegue ágil. El diseño visual se orquesta mediante NativeWind (TailwindCSS), permitiendo una interfaz reactiva y de alto rendimiento.',
                icon: Smartphone,
                items: ['React Navigation Stack', 'NativeWind Styling', 'EAS Cloud Builds (APK/AAB)'],
                filename: 'Client_Deployment.json',
                details: [
                    { label: 'Framework', value: 'Expo 50+' },
                    { label: 'UI Lib', value: 'NativeWind' },
                    { label: 'Language', value: 'TypeScript' }
                ],
                code: ''
            },
            {
                title: 'RESTful Node.js API',
                desc: 'Arquitectura robusta construida con Express y TypeScript. Gestión de persistencia mediante MongoDB y seguridad integral a través de protocolos JWT.',
                icon: Server,
                items: ['MongoDB & Mongoose ORM', 'Swagger UI Documentation', 'JWT Security Layers', 'Edge Deployment (Vercel)'],
                filename: 'api_routes.ts',
                details: [],
                code: `router.post("/abonos", authenticate, (req, res) => ...)\n// Initializing save protocol\nconst abono = await Abono.create(req.body);\nres.status(201).json({ success: true });`
            }
        ],
        quote: 'Orquestamos el futuro del ahorro inteligente mediante la ingeniería de precisión de Abono Viajes.',
        quoteAuthor: 'DESPLIEGUE CLAVE: ABONO VIAJES'
    },
    {
        slug: 'music-center-pro',
        title: '2001 Music Center Pro',
        subtitle: 'E-Commerce Orchestration',
        industry: 'RETAIL / E-COMMERCE',
        tech: 'TypeScript / Node.js / Vercel',
        image: '/images/projects/musiccenterpro-1.webp',
        desc: 'Ecosistema digital para la industria musical con arquitectura de microservicios y despliegue automatizado.',
        longDesc: [
            '2001 Music Center Pro es un centro neurálgico para músicos de todos los niveles. Desarrollamos una plataforma escalable que integra inventario masivo, servicios profesionales y equipos de audio de alta gama.',
            'La arquitectura se optimizó para ofrecer tiempos de respuesta ultrarrápidos, esenciales para la gestión de stocks en tiempo real y la experiencia de compra fluida.'
        ],
        metrics: [
            { label: 'Despliegue', val: 'Vercel', unit: 'Cloud' },
            { label: 'Tipado', val: '82.6%', unit: 'TS' },
            { label: 'Protocolo', val: 'v1.4', unit: 'REST' },
            { label: 'Escalamiento', val: 'Auto', unit: 'Edge' }
        ],
        features: [
            {
                title: 'TypeScript Core Engine',
                desc: 'El 82.6% del código base está construido con TypeScript puro, garantizando una integridad de datos superior y una escalabilidad sin errores. La lógica de negocio se despliega en entornos aislados mediante microservicios.',
                icon: Cpu,
                items: ['Type-safe interfaces', 'Microservices logic', 'Static site generation'],
                filename: 'catalog_service.ts',
                details: [
                    { label: 'Code Base', value: 'TypeScript 82.6%' },
                    { label: 'Scripts', value: 'JavaScript 16%' },
                    { label: 'Styling', value: 'CSS 1.2%' }
                ],
                code: `interface MusicalAsset {\n    id: string;\n    category: InstrumentGroup;\n    stock: number;\n}\n\nexport const syncInventory = async () => {\n    // Pulse database sync\n    await revalidateTag('musical-catalog');\n};`
            }
        ],
        quote: 'Sintonizamos la eficiencia operativa con la pasión artística a través de 2001 Music Center Pro.',
        quoteAuthor: 'DESPLIEGUE CLAVE: MUSIC CENTER PRO'
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
