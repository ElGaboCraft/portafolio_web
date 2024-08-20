"use client";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

//components
import Socials from "@/components/Socials"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="tetx-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hola, Soy <br />
              <TypeAnimation 
                className="text-accent text-accent-animation h1 mb-6"
                sequence={[
                  "Axel Zuñiga",
                  1000,
                  "Desarrollador Web",
                  1000,
                  "Desarrollador Android",
                  1000,
                  "Desarrollador UI/UX",
                  1000,
                  "Editor Multimedia",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="max-w-[500px] text-justify mb-9 text-white/80">
              Estoy aprendiendo a crear experiencias digitales atractivas y estoy adquiriendo habilidades en varios lenguajes y tecnologías de programación.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Descargar CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" 
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home