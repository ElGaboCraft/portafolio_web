"use client";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

//components
import Socials from "@/components/Socials"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats";
import Link from "next/link";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-2xl">Software Developer</span>
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
                  <Link 
                    href="https://my.microsoftpersonalcontent.com/personal/1ae3c2365a07720e/_layouts/15/download.aspx?UniqueId=1bb7baf2-4ed2-45aa-80ee-236b39e6b424&Translate=false&tempauth=v1e.eyJzaXRlaWQiOiJlODBjNDIwMy1lNTE5LTQ0MGUtYmFiMy05YjcwMWM5ZmY1ZWQiLCJhcHBpZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDA0ODE3MTBhNCIsImF1ZCI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9teS5taWNyb3NvZnRwZXJzb25hbGNvbnRlbnQuY29tQDkxODgwNDBkLTZjNjctNGM1Yi1iMTEyLTM2YTMwNGI2NmRhZCIsImV4cCI6IjE3MjQ0NTgwMDkifQ.PkpXE2yPLp-kl1fXaHQEl5gvBaU7dEmCEOv1q0Rcz9Zflws-nhJaVk_UI_6uYQSFQVpp2rFoKb4SZU8NpEmOTpWkZCTKhz8coCDh9ilxDxS4GsFyOtKi3Y-2k0R7WNZvdiUMNEynm9IFmqIBqmrL9Kwd_uVAhhG7Vy6iXDn-6QOQQA_rwKWSscHeZg2YixyLpJbqQsWBhes_fAwRg_pYYVwCURZSpjy-SZ5glL--zZJxJikuke7aS-7KpBCiPLdMwxTm2iXFljmkKOvJz9aWnXp3YzqKw7GCsgoLbYvRIBWHiFxL1gRPlQaRxFs9wm_uKGMMf97zJJ6haxD7l-I1a_zic5kpkv_cBIlp78JRQqRHq9UGx4d7KUZ-4ktLWMuZQvhkGSvdXIMvS0j5ASt5HN2piW7eD-uCFy7FEFBmQNw.epHCghvMpaJCLzPKv24y4JLdKxFwhOF-DlNZFGcqWao&ApiVersion=2.0&AVOverride=1" 
                    target="_blank" 
                    download="CV_Axel_Zuñiga_Ecuatoriano.pdf"
                  >
                    <span>Descargar CV</span>
                  </Link>
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