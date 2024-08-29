"use client";

import { Description } from "@radix-ui/react-dialog";
import { FaHtml5, FaCss3, FaJs, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiWondersharefilmora, SiAdobephotoshop } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

//about data
const about = {
  icon: '',
  title: "Acerca De Mi",
  description: "Datos personales y métodos de contacto.",
  info: [
    {
      fieldName: "Nombre",
      fieldValue: "Axel Zuñiga"
    },
    {
      fieldName: "Celular",
      fieldValue: "+593 96 206 0168"
    },
    {
      fieldName: "Experiencia",
      fieldValue: "2+ Years"
    },
    {
      fieldName: "Discord",
      fieldValue: "@asempay"
    },
    {
      fieldName: "Nacionalidad",
      fieldValue: "Ecuatoriano"
    },
    {
      fieldName: "Correo",
      fieldValue: "axgabriel0214@hotmail.com"
    },
    {
      fieldName: "Idiomas",
      fieldValue: "Spanish, English"
    },
    
  ]    
}

// experience data
const experience = {
  icon: 'https://raw.githubusercontent.com/ElGaboCraft/portafolio_web/82dbc3d2bf0d45118e603d96752920b5c074afdc/public/assets/resume/badge.svg',
  title: "Mi Experiencia",
  description: "Experiencia laboral obtenida hasta el momento.",
  items: [
    {
      company: "SoftwareOne",
      postion: "Analista De Soporte En Sitio N2",
      duration: "2023/11 - 2024/04",
    },
    {
      company: "Royal Prestige",
      postion: "Asesor Comercial Ejecutivo",
      duration: "2022/06 - 2023/06",
    },
    {
      company: "HP Servicio Técnico",
      postion: "Técnico De Mantenimiento",
      duration: "2021/03 - 2021/09",
    },
    {
      company: "Apple Maniaticos",
      postion: "Agente De Ventas",
      duration: "2020/01 - 2020/11",
    },
    {
      company: "Tienda Friki",
      postion: "Editor Multimedia",
      duration: "2018/02 - 2019/12",
    },
  ]
}

// education data
const education = {
  icon: 'https://raw.githubusercontent.com/ElGaboCraft/portafolio_web/82dbc3d2bf0d45118e603d96752920b5c074afdc/public/assets/resume/cap.svg',
  title: "Mi Educación",
  description: "Formación en tecnología con enfoque en desarrollo web, programación y análisis de datos.",
  items: [
    {
      institution: "ConquerBlocks Academy",
      degree: "Master FullStack Web-Developer",
      duration: "2023 - Actualidad",
    },
    {
      institution: "ITIL Foundation For IT",
      degree: "ITL 4 Edition",
      duration: "2024 - 2024",
    },
    {
      institution: "Inst. Sup. Tec. Guayaquil",
      degree: "Desarrolador De Software",
      duration: "2021 - 2024",
    },
    {
      institution: "UE. Provincia De Los Ríos",
      degree: "Bachillerato Técnico En Informática",
      duration: "2020 - 2021",
    },
    {
      institution: "Universidad Hemisferios",
      degree: "Formador De Formadores",
      duration: "2023 - 2023",
    },
    {
      institution: "Solo Learn",
      degree: "HTML Azanzado",
      duration: "2019 - 2019",
    },
    {
      institution: "Inst. Sup. Tec. Guayaquil",
      degree: "Robótica E IOT",
      duration: "2022 - 2022",
    },
  ]
}

// skills data
const skills = {
  icon: '',
  title: "Mis Habilidades",
  description: "Habilidades en desarrollo web, programación y diseño de interfaces.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiWondersharefilmora />,
      name: "Wondershare Filmora",
    },
    {
      icon: <SiAdobephotoshop />,
      name: "Adobe Photoshop",
    },
  ]
}

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] capitalize w-full">

            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex">
                  <img src={experience.icon} alt="Icon" className="h-10 w-10 mr-4 mt-[0,5] " />
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                </div>
                <p className="max-w-[600x] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li 
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.postion}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex">
                  <img src={education.icon} alt="Icon" className="h-10 w-10 mr-4 mt-[0,5] " />
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                </div>
                <p className="max-w-[600x] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li 
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <div className="flex">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                  </div>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skills, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skills.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skills.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <div className="flex">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60 font-bold">{item.fieldName}</span>
                        <span className="text-1xl font-semibold">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume 