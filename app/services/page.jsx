"use client";

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link";

const services = [
  {
    num: '01',
    title: 'Desarrollador Web',
    description: 'Soy un Desarrollador Web Jr. con una sólida base en tecnologías web modernas, adquirido a través de proyectos personales que reflejan mi pasión por la programación y el diseño web. He trabajado en diversas áreas del desarrollo frontend y backend, utilizando herramientas como HTML, CSS, JavaScript, React, y Next.js para crear sitios web funcionales y atractivos. Aunque no tengo experiencia laboral, mi dedicación y capacidad para aprender rápidamente me han permitido desarrollar habilidades técnicas sólidas. Estoy motivado por la oportunidad de seguir creciendo en este campo y contribuir con soluciones innovadoras en proyectos reales.',
    href: "",
  },
  {
    num: '02',
    title: 'Desarrollador Android',
    description: 'Como Desarrollador Android Jr., he adquirido experiencia en la creación de aplicaciones móviles a través de proyectos personales, lo que me ha permitido familiarizarme con las herramientas y tecnologías esenciales del desarrollo Android. A pesar de no tener experiencia laboral, he logrado construir y optimizar aplicaciones que cumplen con las mejores prácticas y estándares de la industria. Estoy motivado para aprender y crecer en el campo, buscando oportunidades para aplicar mis habilidades en entornos profesionales.',
    href: "",
  },
  {
    num: '03',
    title: 'Desarrollador UI/UX',
    description: 'Soy un desarrollador UI/UX en formación, con conocimientos básicos y un enfoque en la creación de interfaces intuitivas y agradables. Aunque mi experiencia en este campo es limitada, estoy comprometido en aprender y mejorar continuamente. Me interesa explorar cómo el diseño puede influir en la experiencia del usuario y estoy motivado para crecer en esta área, buscando siempre soluciones creativas y eficaces para los desafíos de diseño.',
    href: "",
  },
  {
    num: '04',
    title: 'Editor Multimedia',
    description: 'Soy un editor multimedia con conocimientos en creación y edición de contenido visual y auditivo. Manejo herramientas de edición de video, audio y gráficos, y he trabajado en una variedad de proyectos personales, desde videos promocionales hasta contenido para redes sociales. Mi enfoque está en producir material de alta calidad que cuente historias efectivamente y capte la atención del público. Con un ojo para el detalle y una pasión por la creatividad, me esfuerzo por entregar productos finales que cumplan con las expectativas y objetivos del cliente.',
    href: "",
  },
]

import { motion } from "framer-motion";

const Services = () => {
  return (
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {delay:2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((service, index) => {
              return (
                <div 
                  key={index}
                  className="flex-1 flex flex-col justify-center gap-6 group mt-4 p-4 hover:bg-white/5 hover:rounded-xl"
                >
                  {/* top */}
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                    <Link 
                      href={service.href}
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-primary text-3xl"/>
                    </Link>
                  </div>
                  {/* title */}
                  <h2 className="text-[42px] font-bold leading-none txt-ehite group-hover:text-accent transition-all duration-500">{service.title}</h2>
                  {/* description */}
                  <p className="text-white/60 text-justify group-hover:text-white">{service.description}</p>
                  {/* border */}
                  <div className="border-b border-white/20 w-full group-hover:border-white" />
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
  );
}

export default Services