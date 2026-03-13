export const caseStudies = {
    'full-stack-development': {
        title: 'Desarrollo de Plataformas Web',
        subtitle: 'Sistemas a medida para grandes empresas',
        description: 'Construcción y despliegue de plataformas de misión crítica diseñadas para soportar alta transaccionalidad y escalar sin fricción.',
        challenge: 'En el panorama corporativo actual, las empresas enfrentan el desafío de evolucionar sus infraestructuras digitales para soportar picos de demanda global sin comprometer la estabilidad operativa.',
        solution: 'Diseñamos arquitecturas distribuidas de alto rendimiento. Implementamos soluciones resilientes que garantizan tiempos de respuesta ultrarrápidos y alta disponibilidad constante.',
        results: [
            { metric: '99.99%', label: 'Tiempo en Línea' },
            { metric: '300ms', label: 'Velocidad de Respuesta' },
            { metric: '4x', label: 'Más Rendimiento' }
        ],
        stack: ['React', 'Next.js', 'Nest.js', 'Express', 'PHP', 'TypeScript', 'Node.js']
    },
    'api-ecosystems': {
        title: 'Integración de Herramientas',
        subtitle: 'Unificando la arquitectura empresarial',
        description: 'Orquestación de sistemas fragmentados creando una capa de comunicación unificada y segura en tiempo real.',
        challenge: 'A medida que las organizaciones escalan, la fragmentación de software crea silos de información, ralentizando la toma de decisiones y limitando la agilidad corporativa.',
        solution: 'Desarrollamos ecosistemas de APIs robustas que actúan como el núcleo central de la empresa, permitiendo un flujo de datos continuo, seguro y totalmente automatizado.',
        results: [
            { metric: '99.9%', label: 'Disponibilidad' },
            { metric: '50ms', label: 'Velocidad de Enlace' },
            { metric: '100%', label: 'Datos Sincronizados' }
        ],
        stack: ['Nest.js', 'Express.js', 'Go', 'Spring Boot', 'Swagger']
    },
    'elite-refactoring': {
        title: 'Actualización de Sistemas Antiguos',
        subtitle: 'Evolución de sistemas legados',
        description: 'Transición integral de software obsoleto hacia arquitecturas modernas y ágiles, mitigando la deuda técnica acumulada.',
        challenge: 'Mantener sistemas legados frena la innovación y aumenta la fricción técnica, haciendo que la integración de nuevas tecnologías sea un riesgo crítico de negocio.',
        solution: 'Aplicamos herramientas de ingeniería inversa y refactorización progresiva. Transformamos el código heredado en un núcleo seguro, ágil y preparado para el futuro.',
        results: [
            { metric: '0', label: 'Interrupciones' },
            { metric: '85%', label: 'Código Asegurado' },
            { metric: '2w', label: 'Nuevas Funciones (antes 6 meses)' }
        ],
        stack: ['TypeScript', 'Jest', 'CI/CD', 'SonarQube']
    },
    'database-architecture': {
        title: 'Gestión de Bases de Datos',
        subtitle: 'Integridad, seguridad y velocidad',
        description: 'Diseño e implementación de bases de datos de alto volumen para asegurar el acceso inmediato y proteger el gran capital del negocio: su información.',
        challenge: 'El volumen exponencial de datos empresariales demanda infraestructuras que no solo logren almacenar grandes proporciones de información, sino que garanticen resiliencia y búsquedas instantáneas.',
        solution: 'Desplegamos clústeres de bases de datos distribuidas con estrategias avanzadas de indexación, optimizando la capacidad de consulta sistemática y garantizando la protección de la información.',
        results: [
            { metric: '95%', label: 'Búsquedas más rápidas' },
            { metric: '10x', label: 'Capacidad de Usuarios' },
            { metric: '99.95%', label: 'Información Segura' }
        ],
        stack: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Debezium']
    },
    'ecommerce-solutions': {
        title: 'Venta Digital y E-commerce',
        subtitle: 'Comercio digital de alto rendimiento',
        description: 'Construcción de plataformas transaccionales optimizadas para una máxima conversión comercial e infraestructura de integración continua.',
        challenge: 'En eventos de distribución hiper-competitiva (Black Friday), las caídas de tráfico y la interrupción en las pasarelas resultan en pérdidas críticas para el sector retail contemporáneo.',
        solution: 'Construimos sistemas de comercio digital de alcance "elástico" que prevén y reaccionan a la demanda, combinando métodos seguros de procesamiento y gestión logística en tiempo real.',
        results: [
            { metric: '99.9%', label: 'Uptime en Ofertas' },
            { metric: '1.2s', label: 'Carga de Página' },
            { metric: '35%', label: 'Más Ventas' }
        ],
        stack: ['Next.js', 'Stripe', 'GraphQL', 'Vercel', 'Sanity CMS']
    },
    'mobile-development': {
        title: 'Aplicaciones Móviles',
        subtitle: 'Presencia corporativa en dispositivos móviles',
        description: 'Ingeniería de software en estado puro llevada a las palmas de los usuarios mediante soluciones móviles premium.',
        challenge: 'Las marcas de alto valor se enfrentan al reto de lograr experiencias de software nativas, requiriendo un rendimiento de ejecución perfecto en entornos móviles altamente fragmentados y competidos.',
        solution: 'Forjamos bases de código altamente eficientes para asegurar el control transaccional nativo, sistemas de GPS en tiempo real e interacciones visuales inmersivas en iOS y Android.',
        results: [
            { metric: '4.8★', label: 'Calificación App Store' },
            { metric: 'Excelente', label: 'Fluidez Visual' },
            { metric: '70%', label: 'Clientes que regresan' }
        ],
        stack: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'Redux']
    },
    'ui-ux-design': {
        title: 'Diseño Digital y de Usuario',
        subtitle: 'Sistemas de diseño corporativos',
        description: 'Ingeniería de diseño aplicada a interfaces que simplifican la complejidad y reducen la curva de aprendizaje logístico y corporativo.',
        challenge: 'El software de gran alcance tiende a colapsar en la densidad visual, reduciendo el interés del consumidor o trabajador e incrementando altamente los costos de soporte por incomprensión de uso.',
        solution: 'Conceptualizamos y elaboramos sistemas de componentes rigurosos para una clarificación completa del producto, logrando que el usuario final sienta una atracción orgánica frente al contenido o herramienta a utilizar.',
        results: [
            { metric: 'Mínima', label: 'Retención de Dudas' },
            { metric: '100%', label: 'Consistencia de Marca' },
            { metric: 'Atractivo', label: 'Fidelidad del Usuario' }
        ],
        stack: ['Figma', 'Framer', 'React', 'Tailwind CSS', 'Storybook']
    },
    'cloud-devops': {
        title: 'Infraestructura y Nube',
        subtitle: 'Disponibilidad infinita de sistemas',
        description: 'Estructuración y monitoreo de las redes en la nube automatizadas para escalar en el gran panorama digital presente y futuro.',
        challenge: 'La conectividad actual exime toda tolerancia al margen de caída de una marca. Las plataformas requieren sistemas autosuficientes de distribución o la rentabilidad global corre grave peligro.',
        solution: 'Integramos despliegues inquebrantables usando infraestructura como código e ingeniera Cloud moderna, abaratando drásticamente el costo de computación y multiplicando el estado latente de la marca.',
        results: [
            { metric: '60%', label: 'Ahorro de Costos' },
            { metric: '15min', label: 'Actualización en vivo' },
            { metric: '99.99%', label: 'Siempre en línea' }
        ],
        stack: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'ArgoCD']
    },
    'ai-automation': {
        title: 'IA y Automatización de Tareas',
        subtitle: 'Tecnología en pos de la alta eficiencia',
        description: 'Afinación de sistemas inteligentes para realizar con autonomía procesos que el recurso humano debiera ahorrar, maximizando talento y capital.',
        challenge: 'Empresas masivas sufren diariamente pérdidas colosales de tiempo gestionando operaciones predecibles. La integración a tiempo de la analítica del lenguaje moderno significa o liderar el mercado o ser absorbido lentamente por la competencia.',
        solution: 'Introducimos inteligencia sintética en el proceso estructural diario, capacitando un bot contextual, de predicción analítica y respuesta automática infalible frente a crisis o labores sistémicas masificadas.',
        results: [
            { metric: '80%', label: 'Atención automática' },
            { metric: '<2min', label: 'Respuesta promedio' },
            { metric: '35%', label: 'Clientes retenidos' }
        ],
        stack: ['GPT-4', 'LangChain', 'Python', 'XGBoost', 'n8n']
    },
    'technical-audit': {
        title: 'Revisión y Seguridad Técnica',
        subtitle: 'Blindaje a ciberataques del entorno actual',
        description: 'Aplicación constante y masiva de barridos a todo ecosistema del proyecto digital en busca de brechas o huecos críticos de la empresa.',
        challenge: 'Los continuos y agigantados métodos de intromisión actual pueden comprometer todo el avance y economía de una empresa en un solo descuido técnico sin protección activa e inherente a su flujo habitual de código.',
        solution: 'Dedicamos un rastreo penetrante con herramientas de máxima fiabilidad internacional e imbuimos los sistemas corporativos del cliente en defensivos técnicos estrictos logrando un cierre total a las fugas y un alivio de limpieza continua.',
        results: [
            { metric: '100%', label: 'Seguridad Reforzada' },
            { metric: '60%', label: 'Más Velocidad' },
            { metric: 'Zero', label: 'Riesgos Pendientes' }
        ],
        stack: ['OWASP', 'SonarQube', 'PostgreSQL', 'Wireshark', 'Prometheus']
    },
    'on-premise-infrastructure': {
        title: 'Servidores y Equipos Físicos',
        subtitle: 'Poder computacional exclusivo al máximo',
        description: 'La entrega llave en mano de redes aisladas en bases fijas construidas en hardware sólido e irrebatible del que proveer el mejor nivel de energía y comunicación intermitente de la institución.',
        challenge: 'Algunas normativas y regímenes institucionales, así como sectores estratégicos puros y duros, prohíben rotundamente la delegación externa del resguardo de material, además de no permitir jamás un desfase por redes sobre expuestas.',
        solution: 'Llevamos el cerebro metálico y arquitectónico al mismo recinto de trabajo, armando estaciones soberanas de velocidad imperceptible al tiempo cronológico. Total poder sin dependencia de conexión exterior.',
        results: [
            { metric: '<1ms', label: 'Velocidad de Red' },
            { metric: '100%', label: 'Control de Datos' },
            { metric: 'Zero', label: 'Dependencia Externa' }
        ],
        stack: ['Bare Metal', 'Dell PowerEdge', 'Debian', 'ZFS', 'Cisco']
    }
};
