/* eslint-disable react/no-unknown-property */
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { SectionWraper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduccion</p>
        <h2 className={styles.sectionHeadText}>Un poco sobre mi</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
      >
    En mi camino de desarrollador de software fullstack, fui consolidado mi expertise en el diseño y desarrollo de aplicaciones utilizando tecnologias 
    escenciales entre las que destaco la implementación del stack MERN (MongoDB, Express.js, React.js, Node.js) y la implementacion del stack .Net. El manejo
    excepcional de ambas, asi como otras tantas tecnologias, es lo que me permitio crear soluciones escalables y eficientes que optimicen los procesos y mejoren 
    la experiencia del usuario. Mi experiencia en el ecosistema .Net complementa mi capacidad para abordar proyectos complejos y diversos.
    De las cosas que más me apasiona de mi trabajo es la oportunidad de enfrentar desafíos creativos y colaborar con equipos multidisciplinarios para 
    lograr soluciones que marquen la diferencia. Creo firmemente en la importancia de la comunicación efectiva y la colaboración para el éxito de cualquier proyecto.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWraper(About, "about");