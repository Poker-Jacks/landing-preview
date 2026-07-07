export type Lang = "es" | "en";

const es = {
  nav: {
    links: [
      { href: "#vivco", label: "Vivco" },
      { href: "#soluciones", label: "Soluciones" },
      { href: "#proceso", label: "Proceso" },
      { href: "#faq", label: "FAQ" },
    ],
    cta: "Agendá una llamada",
    menuLabel: "Abrir menú",
    menuTitle: "Menú",
  },
  hero: {
    badge: "Estudio de software · Costa Rica",
    title: "Construimos software que la gente de verdad usa.",
    subtitle:
      "Somos cuatro ingenieros en Costa Rica. Diseñamos, construimos y mantenemos plataformas web y móviles para empresas que ya no caben en Excel.",
    ctaPrimary: "Agendá una llamada",
    ctaSecondary: "Ver cómo trabajamos",
    ctaNote: "30 minutos. Sin costo, sin compromiso.",
    proof: "En producción hoy:",
    proofLink: "Vivco, plataforma de condominios con piloto activo",
  },
  vivco: {
    label: "Producto insignia",
    title: "Vivco, la prueba de lo que hacemos",
    titleDecode: "prueba",
    body: "Una plataforma de administración de condominios en producción, con piloto activo en Costa Rica. Flutter, Go y PostgreSQL por debajo. Cuatro roles distintos por encima, cada uno con su propia pantalla.",
    stack: ["Flutter", "Go", "PostgreSQL", "React"],
    status: "En producción · Piloto activo en CR",
    link: "Pedí verla en vivo",
    roles: [
      {
        name: "Residente",
        desc: "Paga la cuota, genera códigos QR para sus visitas y reserva áreas comunes desde el teléfono. Entra a la app con biométrico en menos de 3 segundos.",
      },
      {
        name: "Guarda",
        desc: "Escanea el QR y la pantalla decide: verde autorizado, roja denegado. Con la filial y el nombre del visitante, sin llamadas por radio.",
      },
      {
        name: "Administración",
        desc: "Panel web con la morosidad al día y comunicados que llegan a todos los residentes, no a un grupo de WhatsApp saturado.",
      },
      {
        name: "Contador",
        desc: "Fondos separados y estado de cuenta exportable. La plata del fondo de reserva no se mezcla con la operativa.",
      },
    ],
  },
  solutions: {
    label: "Soluciones",
    title: "Seis cosas que sabemos construir",
    items: [
      {
        title: "Plataformas a la medida",
        desc: "Sistemas web completos para operar un negocio: usuarios, roles, reportes, pagos. Vivco es la prueba y está en producción, no en un portafolio.",
      },
      {
        title: "Apps móviles",
        desc: "Flutter para iOS y Android con un solo código. Rápidas, y con la sensación de app nativa que tus usuarios esperan.",
      },
      {
        title: "Marketplaces",
        desc: "Catálogo, vendedores, carrito y pagos. Estamos construyendo Feria, nuestro propio marketplace, así que los tropiezos ya los conocemos.",
      },
      {
        title: "Logística y operaciones",
        desc: "Rutas, tracking y control de flota. Rumbo, nuestro piloto interno, nació exactamente de esa necesidad.",
      },
      {
        title: "Sitios web",
        desc: "Páginas rápidas que cargan bien en un celular con mala señal y aparecen en Google. Sin plantillas recicladas.",
      },
      {
        title: "IA aplicada",
        desc: "Asistentes que ejecutan acciones reales, como el voz-a-acción de Vivco. No chatbots de adorno que nadie vuelve a abrir.",
      },
    ],
  },
  early: {
    label: "En etapa temprana",
    title: "Lo que estamos cocinando",
    note: "Ninguno de los dos está lanzado. Los contamos porque lo que aprendemos ahí termina en los proyectos de nuestros clientes.",
    products: [
      {
        name: "Feria",
        badge: "MVP en construcción",
        desc: "Marketplace local: catálogo, vendedores, carrito y pagos.",
      },
      {
        name: "Rumbo",
        badge: "Piloto interno",
        desc: "Logística: rutas, tracking y control de flota.",
      },
    ],
  },
  team: {
    label: "El equipo",
    title: "Cuatro ingenieros, cero intermediarios",
    body: "El que te contesta el correo es el mismo que escribe el código. Sin gerentes de cuenta, sin teléfono roto.",
    members: [
      { suit: "spade", name: "Jafet", role: "Full-stack e infraestructura" },
      { suit: "heart", name: "Jeff", role: "Lead móvil · Flutter" },
      { suit: "diamond", name: "Johan", role: "Móvil y features" },
      { suit: "club", name: "Jason", role: "Backend y automatización" },
    ],
  },
  process: {
    label: "Proceso",
    title: "Cuatro etapas, cada una con entregable",
    steps: [
      {
        title: "Descubrimiento",
        desc: "Una o dos semanas para entender el negocio antes de escribir una línea de código.",
        deliverable: "Un documento de alcance que es tuyo, aunque no sigás con nosotros.",
      },
      {
        title: "Diseño con sistema",
        desc: "Prototipos clickeables validados con usuarios reales antes de construir.",
        deliverable: "Prototipo navegable y sistema de diseño aprobado.",
      },
      {
        title: "Construcción por etapas",
        desc: "Demos quincenales, revisión hostil de código entre nosotros y CI/CD desde el día uno.",
        deliverable: "Software funcionando cada dos semanas, no promesas.",
      },
      {
        title: "Lanzamiento y mantenimiento",
        desc: "Salida a producción acompañada y soporte mensual si lo querés.",
        deliverable: "El código es tuyo: documentado y a tu nombre.",
      },
    ],
    deliverableLabel: "Entregable",
    honesty:
      "Una cosa más: si el proyecto no calza con nosotros, te lo decimos en la primera llamada, con una recomendación de a quién sí acudir.",
  },
  faq: {
    label: "FAQ",
    title: "Lo que siempre nos preguntan",
    items: [
      {
        q: "¿Solo son cuatro personas?",
        a: "Sí, y a propósito. Cuatro seniors coordinados avanzan más que un equipo grande con capas de gestión. Y si un proyecto necesita más manos de las que tenemos, te lo decimos antes de arrancar, no a mitad de camino.",
      },
      {
        q: "¿Cómo cobran?",
        a: "Por etapas de alcance fijo. El descubrimiento tiene precio cerrado y de ahí sale el presupuesto del resto. Nunca vas a recibir una cifra sorpresa a fin de mes.",
      },
      {
        q: "¿Qué pasa después del lanzamiento?",
        a: "Ofrecemos mantenimiento mensual, pero el código queda a tu nombre desde el día uno. Si mañana querés cambiar de equipo, te llevás todo: repositorio, documentación e infraestructura.",
      },
      {
        q: "¿Trabajan con empresas fuera de Costa Rica?",
        a: "Sí, trabajamos remoto en huso UTC-6. Y para clientes de la región, que seamos locales es ventaja: entendemos cómo se factura, se paga y se opera aquí.",
      },
      {
        q: "¿Puedo ver Vivco funcionando?",
        a: "Claro. En la llamada te mostramos la app en vivo, con datos de demo. Es más útil que cualquier captura de pantalla.",
      },
    ],
  },
  cta: {
    label: "Siguiente paso",
    title: "Contanos qué necesitás",
    titleDecode: "necesitás",
    body: "Treinta minutos, sin costo y sin compromiso. Salís con una recomendación técnica honesta, aunque no nos contratés.",
    button: "Agendá la llamada",
    email: "hola@pokerjacks.dev",
  },
  footer: {
    tagline: "Four of a kind · Built with code",
    location: "Costa Rica · Remoto UTC−6",
    rights: "Poker Jacks",
    credit: "Diseñado y construido por nosotros en Costa Rica",
  },
};

const en: typeof es = {
  nav: {
    links: [
      { href: "#vivco", label: "Vivco" },
      { href: "#soluciones", label: "Services" },
      { href: "#proceso", label: "Process" },
      { href: "#faq", label: "FAQ" },
    ],
    cta: "Book a call",
    menuLabel: "Open menu",
    menuTitle: "Menu",
  },
  hero: {
    badge: "Software studio · Costa Rica",
    title: "We build software people actually use.",
    subtitle:
      "We're four engineers in Costa Rica. We design, build and maintain web and mobile platforms for companies that have outgrown Excel.",
    ctaPrimary: "Book a call",
    ctaSecondary: "See how we work",
    ctaNote: "30 minutes. Free, no strings attached.",
    proof: "In production today:",
    proofLink: "Vivco, a condo management platform with an active pilot",
  },
  vivco: {
    label: "Flagship product",
    title: "Vivco, proof of what we do",
    titleDecode: "proof",
    body: "A condominium management platform in production, with an active pilot in Costa Rica. Flutter, Go and PostgreSQL underneath. Four distinct roles on top, each with its own screen.",
    stack: ["Flutter", "Go", "PostgreSQL", "React"],
    status: "In production · Active pilot in CR",
    link: "Ask for a live demo",
    roles: [
      {
        name: "Resident",
        desc: "Pays dues, generates QR codes for visitors and books shared areas from their phone. Signs in with biometrics in under 3 seconds.",
      },
      {
        name: "Guard",
        desc: "Scans the QR and the screen decides: green authorized, red denied. With the unit and visitor name, no radio calls.",
      },
      {
        name: "Admin",
        desc: "Web panel with up-to-date delinquency and announcements that reach every resident, not a saturated WhatsApp group.",
      },
      {
        name: "Accountant",
        desc: "Separate funds and exportable statements. Reserve fund money never mixes with operations.",
      },
    ],
  },
  solutions: {
    label: "Services",
    title: "Six things we know how to build",
    items: [
      {
        title: "Custom platforms",
        desc: "Full web systems to run a business: users, roles, reports, payments. Vivco is the proof, and it's in production, not in a portfolio.",
      },
      {
        title: "Mobile apps",
        desc: "Flutter for iOS and Android from a single codebase. Fast, with the native feel your users expect.",
      },
      {
        title: "Marketplaces",
        desc: "Catalog, sellers, cart and payments. We're building Feria, our own marketplace, so we've already hit the potholes.",
      },
      {
        title: "Logistics & operations",
        desc: "Routes, tracking and fleet control. Rumbo, our internal pilot, was born from exactly that need.",
      },
      {
        title: "Websites",
        desc: "Fast pages that load on a phone with bad signal and show up on Google. No recycled templates.",
      },
      {
        title: "Applied AI",
        desc: "Assistants that execute real actions, like Vivco's voice-to-action. Not decorative chatbots nobody opens twice.",
      },
    ],
  },
  early: {
    label: "Early stage",
    title: "What we're cooking",
    note: "Neither one has launched. We mention them because what we learn there ends up in our clients' projects.",
    products: [
      {
        name: "Feria",
        badge: "MVP in progress",
        desc: "Local marketplace: catalog, sellers, cart and payments.",
      },
      {
        name: "Rumbo",
        badge: "Internal pilot",
        desc: "Logistics: routes, tracking and fleet control.",
      },
    ],
  },
  team: {
    label: "The team",
    title: "Four engineers, zero middlemen",
    body: "The person answering your email is the same one writing the code. No account managers, no broken telephone.",
    members: [
      { suit: "spade", name: "Jafet", role: "Full-stack & infrastructure" },
      { suit: "heart", name: "Jeff", role: "Mobile lead · Flutter" },
      { suit: "diamond", name: "Johan", role: "Mobile & features" },
      { suit: "club", name: "Jason", role: "Backend & automation" },
    ],
  },
  process: {
    label: "Process",
    title: "Four stages, each with a deliverable",
    steps: [
      {
        title: "Discovery",
        desc: "One or two weeks to understand the business before writing a single line of code.",
        deliverable: "A scope document that's yours, even if you don't continue with us.",
      },
      {
        title: "Design with a system",
        desc: "Clickable prototypes validated with real users before we build.",
        deliverable: "A navigable prototype and an approved design system.",
      },
      {
        title: "Build in stages",
        desc: "Biweekly demos, hostile code review among ourselves, and CI/CD from day one.",
        deliverable: "Working software every two weeks, not promises.",
      },
      {
        title: "Launch & maintenance",
        desc: "Supported go-live and monthly support if you want it.",
        deliverable: "The code is yours: documented, under your name.",
      },
    ],
    deliverableLabel: "Deliverable",
    honesty:
      "One more thing: if the project isn't a fit for us, we tell you on the first call, along with a recommendation of who to go to instead.",
  },
  faq: {
    label: "FAQ",
    title: "What we always get asked",
    items: [
      {
        q: "Are you really just four people?",
        a: "Yes, on purpose. Four coordinated seniors move faster than a large team with layers of management. And if a project needs more hands than we have, we tell you before starting, not halfway through.",
      },
      {
        q: "How do you charge?",
        a: "Fixed-scope stages. Discovery has a closed price, and the rest of the budget comes out of it. You'll never get a surprise number at the end of the month.",
      },
      {
        q: "What happens after launch?",
        a: "We offer monthly maintenance, but the code is under your name from day one. If tomorrow you want to switch teams, you take everything: repository, documentation and infrastructure.",
      },
      {
        q: "Do you work with companies outside Costa Rica?",
        a: "Yes, we work remotely in UTC-6. And for clients in the region, being local is an advantage: we understand how invoicing, payments and operations work here.",
      },
      {
        q: "Can I see Vivco running?",
        a: "Sure. On the call we show you the live app with demo data. It beats any screenshot.",
      },
    ],
  },
  cta: {
    label: "Next step",
    title: "Tell us what you need",
    titleDecode: "need",
    body: "Thirty minutes, free, no commitment. You leave with an honest technical recommendation, even if you don't hire us.",
    button: "Book the call",
    email: "hola@pokerjacks.dev",
  },
  footer: {
    tagline: "Four of a kind · Built with code",
    location: "Costa Rica · Remote UTC−6",
    rights: "Poker Jacks",
    credit: "Designed and built by us in Costa Rica",
  },
};

export const content: Record<Lang, typeof es> = { es, en };

export const MAILTO = "mailto:hola@pokerjacks.dev?subject=Proyecto";
