import {
    mobile,
    backend,
    stack,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    java,
    cSharp,
    sql,
    threejs,
    rickAndMorty,
    propertiesDashboard,
    twiddle
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "SOBRE MI",
    },
    {
      id: "work",
      title: "EXPERIENCIA",
    },
    {
      id: "contact",
      title: "CONTACTO",
    },
  ];
  
  const services = [
    {
      title: "Fullstack Web Developer",
      icon: web,
    },
    {
      title: "MERN Stack",
      icon: stack,
    },
    {
      title: "ASP.NET Entity Framework",
      icon: backend,
    },
    {
      title: "SQL & SQLserver",
      icon: mobile,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "cSharp",
      icon: cSharp,
    },
    {
      name: "sql",
      icon: sql,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Anomalous Software",
      icon: reactjs,
      iconBg: "#222",
      date: "Jun 2023 - Actualidad",
      points: [
        "Desarrollando y manteniendo aplicaciones web armadas a medida especifica del cliente utlizando React, typescript y otras tecnologias asociadas",
        "Trabajando con un equipo multifuncional, incluyendo diseñadores, Product manager, Team Leader y otros dessarrolladores en areas de frontend y backend, para desarrollar el producto",
        "Implementar diseños responsivos y compatibles entre los distintos browsers.",
        "Participando en revisiones de código y proporcionando retroalimentación constructiva a otros desarrolladores.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Rick & Morty Wiki ",
      description:
        "En este proyect aprendí a realizar solicitudes HTTP, manejar datos JSON y renderizar dinámicamente contenido en función de la respuesta de la API. Además, adquirí habilidades en la implementación de filtros y búsqueda para mejorar la experiencia del usuario. Esta experiencia me brindó una base sólida en el desarrollo de aplicaciones web interactivas y me permitió explorar conceptos avanzados de React, como el estado, los ciclos de vida y el enrutamiento.",
      tags: [
        {
          name: "react-redux",
          color: "blue-text-gradient",
        },
        {
          name: "restAPI",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: rickAndMorty,
      source_code_link: "https://github.com/Lucas-Merino/Rick-and-Morty-wiki",
      web_link: "https://rick-and-morty-wiki24.netlify.app"
    },
    {
      name: "Properties Dashboard",
      description:
        "App con CRUD utilizando la integración de MongoDB para la gestión de datos, Express.js para el servidor, React.js para la interfaz de usuario y Node.js para la lógica del servidor. Pude estructurar una base de datos NoSQL eficiente, construir una APIs RESTful segura y escalable, crear interfaces de usuario dinámicas y receptivas, y también ganar habilidades en depuración y despliegue en la nube",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "crud",
          color: "green-text-gradient",
        },
        {
          name: "google-cloud",
          color: "pink-text-gradient",
        },
      ],
      image: propertiesDashboard,
      source_code_link: "https://github.com/Lucas-Merino/Properties-dashboard-app",
      web_link: "https://mern-properties-dashboard.netlify.app/"
    },
    {
      name: "Twiddle Social App",
      description:
        "Aplicación web, siendo una red social, desarrollada con React.js y TypeScript. Incluye características claves como por ejemplo autenticación, exploración de contenido, funcionalidad de 'Me gusta' y 'Guardar', páginas detalladas de las publicaciones y perfiles de usuarios, así también como la capacidad de crear, editar y borrar publicaciones. La integración de React Query mejora el rendimiento y la eficiencia de la recuperación de datos. Se utiliza Tailwind para un diseño responsivo y atractivo",
      tags: [
        {
          name: "React Query",
          color: "blue-text-gradient",
        },
        {
          name: "Backeed as a service (BaaS)",
          color: "green-text-gradient",
        },
        {
          name: "Typescript",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind",
          color: "orange-text-gradient",
        },
      ],
      image: twiddle,
      source_code_link: "https://github.com/Lucas-Merino/Twiddle",
      web_link: "https://twiddle-social.vercel.app/"
    },
  ];

  
  
  export { services, technologies, experiences, projects };