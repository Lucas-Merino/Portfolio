import {
    mobile,
    backend,
    creator,
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
      icon: creator,
    },
    {
      title: "ASP.NET Entity Framework",
      icon: backend,
    },
    {
      title: "Java",
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
        "Trabajando con un equipo multifuncional, incluyendo diseñadores, PM, team Leader y otros desarrolladores (front y back end), para desarrollar el producto",
        "Implementar diseños responsivos y compatibles entre los distintos browsers.",
        "Participando en revisiones de código y proporcionando retroalimentación constructiva a otros desarrolladores.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Rick & Morty Wiki ",
      description:
        "Pagina web que permite obtener informacion de cualquier personaje o episodio de la serie 'Rick and Morty'. A su vez, esto se puede filtrar tanto por un buscador como tambien por ciertos filtros personalizados",
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
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };