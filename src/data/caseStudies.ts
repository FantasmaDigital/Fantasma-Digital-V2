export const caseStudies = {
    'full-stack-development': {
        title: 'Desarrollo de Plataformas Web',
        subtitle: 'Sistemas a medida para grandes empresas',
        description: 'Transformación de un sistema antiguo y lento en una plataforma moderna y capaz de manejar miles de usuarios para una empresa de logística.',
        challenge: 'El cliente perdía ventas porque su sistema fallaba cuando había mucha gente conectada. La información no se guardaba correctamente en diferentes oficinas.',
        solution: 'Construimos un corazón digital nuevo usando tecnología de alta velocidad. Esto permite que el sistema nunca se caiga y que la respuesta sea instantánea para el usuario.',
        results: [
            { metric: '99.99%', label: 'Tiempo en Línea' },
            { metric: '300ms', label: 'Velocidad de Respuesta' },
            { metric: '4x', label: 'Más Rendimiento' }
        ],
        stack: ['React', 'Next.js', 'Nest.js', 'Express', 'PHP', 'TypeScript', 'Node.js']
    },
    'api-ecosystems': {
        title: 'Integración de Herramientas',
        subtitle: 'Hacemos que tus programas trabajen juntos',
        description: 'Diseño de un sistema de comunicación para que todos los programas de mantenimiento y ventas de una empresa compartan información en tiempo real.',
        challenge: 'La empresa perdía horas pasando datos a mano de un programa a otro, lo que causaba errores y retrasos en los pedidos.',
        solution: 'Creamos una "capa de conversación" automática que conecta todos los sistemas. Ahora, cuando algo pasa en un lado, todo se actualiza solo.',
        results: [
            { metric: '99.9%', label: 'Disponibilidad' },
            { metric: '50ms', label: 'Velocidad de Enlace' },
            { metric: '100%', label: 'Datos Sincronizados' }
        ],
        stack: ['Nest.js', 'Express.js', 'Go', 'Spring Boot', 'Swagger']
    },
    'elite-refactoring': {
        title: 'Actualización de Sistemas Antiguos',
        subtitle: 'Damos nueva vida a tu software actual',
        description: 'Modernización de una plataforma bancaria crítica sin detener sus operaciones ni un solo segundo.',
        challenge: 'El programa era tan viejo que nadie sabía cómo arreglarlo y era imposible añadirle funciones nuevas sin que se rompiera.',
        solution: 'Fuimos cambiando las piezas viejas por nuevas poco a poco. Ahora el sistema es seguro, fácil de actualizar y mucho más rápido.',
        results: [
            { metric: '0', label: 'Interrupciones' },
            { metric: '85%', label: 'Código Asegurado' },
            { metric: '2w', label: 'Nuevas Funciones (antes 6 meses)' }
        ],
        stack: ['TypeScript', 'Jest', 'CI/CD', 'SonarQube']
    },
    'database-architecture': {
        title: 'Gestión de Bases de Datos',
        subtitle: 'Seguridad y orden para tu información',
        description: 'Reorganización de toda la información de una empresa con más de 2 millones de usuarios para que las búsquedas sean inmediatas.',
        challenge: 'Sacar un reporte tomaba minutos y el sistema se ponía muy lento cuando muchos empleados lo usaban al mismo tiempo.',
        solution: 'Implementamos un sistema de archivado inteligente que reparte el trabajo. Las búsquedas que antes tardaban segundos ahora son instantáneas.',
        results: [
            { metric: '95%', label: 'Búsquedas más rápidas' },
            { metric: '10x', label: 'Capacidad de Usuarios' },
            { metric: '99.95%', label: 'Información Segura' }
        ],
        stack: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Debezium']
    },
    'ecommerce-solutions': {
        title: 'Venta Digital y E-commerce',
        subtitle: 'Tiendas preparadas para grandes ventas',
        description: 'Desarrollo de una tienda online para una marca de ropa lista para vender miles de productos por hora.',
        challenge: 'La página anterior se caía en días de ofertas como el Black Friday y los pagos a veces daban error.',
        solution: 'Usamos tecnología de "nube elástica" que crece sola cuando hay mucha gente. Pagos seguros y sincronización de stock al instante.',
        results: [
            { metric: '99.9%', label: 'Uptime en Ofertas' },
            { metric: '1.2s', label: 'Carga de Página' },
            { metric: '35%', label: 'Más Ventas' }
        ],
        stack: ['Next.js', 'Stripe', 'Shopify API', 'Vercel', 'Sanity CMS']
    },
    'mobile-development': {
        title: 'Aplicaciones Móviles',
        subtitle: 'Apps en el bolsillo de tus clientes',
        description: 'Creación de una aplicación para una empresa de delivery con mapas en vivo y pagos desde el celular.',
        challenge: 'Necesitaban que la app funcionara perfecta en iPhone y Android sin gastar el doble de tiempo en desarrollarlas por separado.',
        solution: 'Creamos una sola base de código inteligente que funciona en ambos sistemas con calidad profesional y seguimiento por GPS preciso.',
        results: [
            { metric: '4.8★', label: 'Calificación App Store' },
            { metric: 'Excelente', label: 'Fluidez Visual' },
            { metric: '70%', label: 'Clientes que regresan' }
        ],
        stack: ['React Native', 'Expo', 'Firebase', 'Redux', 'Mapbox']
    },
    'ui-ux-design': {
        title: 'Diseño Digital y de Usuario',
        subtitle: 'Interfaces fáciles de usar y atractivas',
        description: 'Rediseño de un portal de finanzas para que sea simple de entender para cualquier persona.',
        challenge: 'Los usuarios se perdían en el sitio y no sabían cómo terminar sus trámites, causando muchas llamadas a soporte.',
        solution: 'Simplificamos todo el aspecto visual. Ahora es intuitivo: el usuario sabe qué hacer sin necesidad de un manual de instrucciones.',
        results: [
            { metric: '78%', label: 'Menos quejas de usuarios' },
            { metric: '4.9/5', label: 'Felicidad del Cliente' },
            { metric: '45%', label: 'Más trámites completados' }
        ],
        stack: ['Figma', 'Framer', 'React', 'Tailwind CSS', 'Storybook']
    },
    'cloud-devops': {
        title: 'Infraestructura y Nube',
        subtitle: 'Tu empresa siempre disponible en internet',
        description: 'Migración de los servidores locales de una academia de cursos a la nube para manejar medio millón de alumnos.',
        challenge: 'El mantenimiento era carísimo y la página se ponía lenta cuando empezaban los cursos nuevos.',
        solution: 'Pasamos todo a la nube automatizada. Ahora el sistema crece solo si hay mucha gente y se encoge para ahorrar costos cuando hay poca.',
        results: [
            { metric: '60%', label: 'Ahorro de Costos' },
            { metric: '15min', label: 'Actualización en vivo' },
            { metric: '99.99%', label: 'Siempre en línea' }
        ],
        stack: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'ArgoCD']
    },
    'ai-automation': {
        title: 'IA y Automatización de Tareas',
        subtitle: 'Bots y procesos que ahorran tiempo',
        description: 'Instalación de un asistente inteligente que responde dudas de clientes y predice quién dejará de usar el servicio.',
        challenge: 'El equipo de atención al cliente no daba abasto con 10,000 correos al mes, tardando días en responder.',
        solution: 'Entrenamos una IA personalizada para la empresa. Ahora responde el 80% de las dudas al instante y el equipo humano solo ve los casos difíciles.',
        results: [
            { metric: '80%', label: 'Atención automática' },
            { metric: '<2min', label: 'Respuesta promedio' },
            { metric: '35%', label: 'Clientes retenidos' }
        ],
        stack: ['GPT-4', 'LangChain', 'Python', 'XGBoost', 'n8n']
    },
    'technical-audit': {
        title: 'Revisión y Seguridad Técnica',
        subtitle: 'Protección y Optimización de tu Sistema',
        description: 'Evaluación de una pasarela de pagos que maneja millones para asegurar que nadie pueda robar información.',
        challenge: 'Preocupación por ataques cibernéticos y algunos errores que hacían que el sistema se pusiera pesado de vez en cuando.',
        solution: 'Realizamos una auditoría a fondo del código y servidores. Aplicamos escudos de seguridad y limpiamos el sistema de archivos basura.',
        results: [
            { metric: '100%', label: 'Seguridad Reforzada' },
            { metric: '60%', label: 'Más Velocidad' },
            { metric: 'Zero', label: 'Riesgos Pendientes' }
        ],
        stack: ['OWASP', 'SonarQube', 'PostgreSQL', 'Wireshark', 'Prometheus']
    },
    'on-premise-infrastructure': {
        title: 'Servidores y Equipos Físicos',
        subtitle: 'Control total en tus propias instalaciones',
        description: 'Instalación de potentes servidores propios para una empresa que necesita que sus datos nunca salgan de su edificio.',
        challenge: 'La nube no era lo suficientemente rápida para sus necesidades y por ley no podían tener los datos fuera del país.',
        solution: 'Montamos equipos Dell de última generación en sus oficinas con redes ultrarrápidas y máxima protección física.',
        results: [
            { metric: '<1ms', label: 'Velocidad de Red' },
            { metric: '100%', label: 'Control de Datos' },
            { metric: 'Zero', label: 'Dependencia Externa' }
        ],
        stack: ['Bare Metal', 'Dell PowerEdge', 'Debian', 'ZFS', 'Cisco']
    }
};
