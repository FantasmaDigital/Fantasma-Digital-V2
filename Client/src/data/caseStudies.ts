export const caseStudies = {
    'full-stack-development': {
        title: 'Desarrollo de Plataformas Web',
        subtitle: 'Sistemas a medida para empresas que crecen',
        description: 'Construimos plataformas rápidas y seguras diseñadas para manejar miles de usuarios sin caídas ni lentitud.',
        challenge: 'Muchas empresas sufren cuando su sitio web no aguanta picos de tráfico o cuando su tecnología se queda pequeña para sus ambiciones de crecimiento.',
        solution: 'Diseñamos arquitecturas modernas que garantizan velocidad y estabilidad total, permitiendo que tu negocio escale sin que la tecnología sea un problema.',
        results: [
            { metric: '99.99%', label: 'Tiempo en Línea' },
            { metric: '300ms', label: 'Velocidad de Respuesta' },
            { metric: '4x', label: 'Más Rendimiento' }
        ],
        stack: ['React', 'Next.js', 'Nest.js', 'Express', 'PHP', 'TypeScript', 'Node.js']
    },
    'api-ecosystems': {
        title: 'Conexión entre Sistemas (API)',
        subtitle: 'Tus herramientas trabajando como una sola',
        description: 'Conectamos tus diferentes plataformas (CRM, pagos, inventario) para que compartan datos en tiempo real de forma automática.',
        challenge: 'Tener datos dispersos en diferentes programas genera errores manuales y pérdida de tiempo valioso para tu equipo.',
        solution: 'Creamos una red de comunicación inteligente que unifica toda tu operación, eliminando tareas manuales y asegurando que la información sea siempre precisa.',
        results: [
            { metric: '99.9%', label: 'Disponibilidad' },
            { metric: '50ms', label: 'Velocidad de Enlace' },
            { metric: '100%', label: 'Datos Sincronizados' }
        ],
        stack: ['Nest.js', 'Express.js', 'Go', 'Spring Boot', 'Swagger']
    },
    'elite-refactoring': {
        title: 'Modernización de Software',
        subtitle: 'Convierte tu sistema antiguo en un activo moderno',
        description: 'Transformamos sistemas lentos y obsoletos en plataformas ágiles y actuales sin detener tu operación.',
        challenge: 'Usar software antiguo frena la innovación, es difícil de mantener y representa un riesgo de seguridad constante para tu negocio.',
        solution: 'Refactorizamos tu código de forma progresiva, mejorando el rendimiento y la seguridad del sistema mientras lo preparamos para el futuro.',
        results: [
            { metric: '0', label: 'Interrupciones' },
            { metric: '85%', label: 'Código Asegurado' },
            { metric: '2w', label: 'Nuevas Funciones (antes 6 meses)' }
        ],
        stack: ['TypeScript', 'Jest', 'CI/CD', 'SonarQube']
    },
    'database-architecture': {
        title: 'Arquitectura de Datos',
        subtitle: 'Información segura, rápida y organizada',
        description: 'Diseñamos bases de datos capaces de procesar grandes volúmenes de información con acceso instantáneo y total seguridad.',
        challenge: 'A medida que tu empresa crece, tus datos se vuelven más difíciles de manejar, ralentizando tus aplicaciones y poniendo en riesgo tu capital informativo.',
        solution: 'Implementamos sistemas de almacenamiento de alto rendimiento que permiten búsquedas inmediatas y garantizan la integridad total de tus datos.',
        results: [
            { metric: '95%', label: 'Búsquedas más rápidas' },
            { metric: '10x', label: 'Capacidad de Usuarios' },
            { metric: '99.95%', label: 'Información Segura' }
        ],
        stack: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Debezium']
    },
    'ecommerce-solutions': {
        title: 'Tiendas Online (E-commerce)',
        subtitle: 'Comercio digital que convierte',
        description: 'Construimos tiendas online diseñadas para convertir visitantes en clientes, integrando pagos y logística de forma fluida.',
        challenge: 'Perder ventas por caídas durante ofertas o por una pasarela de pago lenta es el mayor riesgo para cualquier tienda digital.',
        solution: 'Creamos ecosistemas de venta elásticos que aguantan cualquier nivel de tráfico y ofrecen una experiencia de compra sin fricciones.',
        results: [
            { metric: '99.9%', label: 'Uptime en Ofertas' },
            { metric: '1.2s', label: 'Carga de Página' },
            { metric: '35%', label: 'Más Ventas' }
        ],
        stack: ['Next.js', 'Stripe', 'GraphQL', 'Vercel', 'Sanity CMS']
    },
    'mobile-development': {
        title: 'Aplicaciones Móviles (iOS y Android)',
        subtitle: 'Tu marca en el bolsillo de tus clientes',
        description: 'Desarrollamos apps nativas con un diseño premium y rendimiento impecable en cualquier dispositivo.',
        challenge: 'Tener una app lenta o difícil de usar ahuyenta a tus clientes y daña la imagen de tu marca ante usuarios exigentes.',
        solution: 'Construimos aplicaciones optimizadas que aprovechan al máximo cada dispositivo, ofreciendo fluidez total y una experiencia inmersiva.',
        results: [
            { metric: '4.8★', label: 'Calificación App Store' },
            { metric: 'Excelente', label: 'Fluidez Visual' },
            { metric: '70%', label: 'Clientes que regresan' }
        ],
        stack: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'Redux']
    },
    'visual-identity-systems': {
        title: 'Identidad de Marca y Branding',
        subtitle: 'Diseño profesional para empresas tecnológicas',
        description: 'Sistemas visuales que transmiten confianza y profesionalismo, diseñados para ser consistentes en cualquier plataforma.',
        challenge: 'Muchas empresas de tecnología suelen tener interfaces confusas o identidades visuales que no reflejan la calidad de su producto.',
        solution: 'Diseñamos sistemas de componentes y guías de marca que aseguran que tu marca se vea impecable, memorable y fácil de usar.',
        results: [
            { metric: 'Zero', label: 'Confusión Visual' },
            { metric: '100%', label: 'Consistencia de Marca' },
            { metric: 'Alta', label: 'Fidelidad Visual' }
        ],
        stack: ['Figma', 'Framer', 'Three.js', 'Tailwind CSS', 'Storybook']
    },
    'algorithmic-marketing-growth': {
        title: 'Marketing y Crecimiento Digital',
        subtitle: 'Estrategias basadas en datos y resultados',
        description: 'Campañas inteligentes y SEO técnico diseñados para convertir tu tráfico web en nuevos clientes de forma automática.',
        challenge: 'Gastar presupuesto en publicidad sin saber qué funciona o tener un sitio web que nadie encuentra en Google es una pérdida de capital.',
        solution: 'Implementamos sistemas de adquisición automatizados (CRM + IA) y optimizamos tu infraestructura para que aparezcas donde tus clientes te buscan.',
        results: [
            { metric: '300%', label: 'ROI en Pauta' },
            { metric: 'Top 1', label: 'Posicionamiento Google' },
            { metric: 'Auto', label: 'Captura de Leads' }
        ],
        stack: ['Next.js', 'Vercel', 'Google Ads API', 'HubSpot', 'AI Agents']
    },
    'cloud-devops': {
        title: 'Infraestructura Cloud y DevOps',
        subtitle: 'Servidores siempre activos y bajo tu control',
        description: 'Gestión moderna de la nube para que tus servicios nunca se detengan y escalen automáticamente con la demanda.',
        challenge: 'Depender de servidores mal configurados o de terceros genera caídas constantes que dañan la rentabilidad y la reputación de tu empresa.',
        solution: 'Integramos infraestructura como código que garantiza disponibilidad total, reduce costos y te da control absoluto sobre tus activos digitales.',
        results: [
            { metric: '60%', label: 'Ahorro de Costos' },
            { metric: '15min', label: 'Actualización en vivo' },
            { metric: '99.99%', label: 'Siempre en línea' }
        ],
        stack: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'ArgoCD']
    },
    'ai-automation': {
        title: 'Inteligencia Artificial y Agentes',
        subtitle: 'Automatiza procesos y multiplica tu eficiencia',
        description: 'Sistemas inteligentes que realizan tareas repetitivas de forma autónoma, ahorrándote tiempo y dinero.',
        challenge: 'Gestionar manualmente operaciones predecibles consume el talento de tu equipo y frena el crecimiento de tu empresa.',
        solution: 'Introducimos agentes de IA contextuales que aprenden de tu negocio y responden automáticamente ante cualquier labor masiva o crisis.',
        results: [
            { metric: '80%', label: 'Atención automática' },
            { metric: '<2min', label: 'Respuesta promedio' },
            { metric: '35%', label: 'Clientes retenidos' }
        ],
        stack: ['GPT-4', 'LangChain', 'Python', 'XGBoost', 'n8n']
    },
    'technical-audit': {
        title: 'Seguridad y Auditoría Técnica',
        subtitle: 'Protección real ante amenazas digitales',
        description: 'Auditorías constantes para encontrar y cerrar brechas de seguridad antes de que pongan en riesgo tu negocio.',
        challenge: 'Un solo descuido técnico puede comprometer toda la base de datos y la economía de tu empresa en cuestión de minutos.',
        solution: 'Realizamos rastreos profundos y fortificamos tus sistemas con estándares internacionales para garantizar un entorno libre de riesgos.',
        results: [
            { metric: '100%', label: 'Seguridad Reforzada' },
            { metric: '60%', label: 'Más Velocidad' },
            { metric: 'Zero', label: 'Riesgos Pendientes' }
        ],
        stack: ['OWASP', 'SonarQube', 'PostgreSQL', 'Wireshark', 'Prometheus']
    },
    'on-premise-infrastructure': {
        title: 'Servidores y Equipos Físicos',
        subtitle: 'Control total de tu infraestructura local',
        description: 'Configuración y despliegue de hardware propio para empresas que requieren máxima privacidad y soberanía de datos.',
        challenge: 'Ciertos sectores no pueden delegar el resguardo de su información a la nube o necesitan una velocidad de red que solo el hardware local permite.',
        solution: 'Instalamos servidores de alto rendimiento en tu propio recinto, garantizando velocidad imperceptible y seguridad física total.',
        results: [
            { metric: '<1ms', label: 'Velocidad de Red' },
            { metric: '100%', label: 'Control de Datos' },
            { metric: 'Zero', label: 'Dependencia Externa' }
        ],
        stack: ['Bare Metal', 'Dell PowerEdge', 'Debian', 'ZFS', 'Cisco']
    }
};
