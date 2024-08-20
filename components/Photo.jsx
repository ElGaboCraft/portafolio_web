"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
        <div className="w-full h-full relative">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" },
            }}
            className="relative w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] mx-auto"
        >
            {/* Círculo */}
            <motion.svg
            className="absolute inset-0 w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
            >
            <motion.circle
                cx="253"
                cy="253"
                r="250"
                stroke="#00ff99"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", " 4 250 22 22"],
                rotate: [120, 360],
                }}
                transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                }}
            />
            </motion.svg>

            {/* Imagen */}
            <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
            }}
            className="w-[258px] h-[258px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute inset-0 flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
            <Image
                src="https://raw.githubusercontent.com/ElGaboCraft/portafolio_web/main/public/assets/images/hero-image-origin.png"
                priority
                quality={100}
                alt=""
                width={400}
                height={400}
                className="object-contain"
            />
            </motion.div>
        </motion.div>
    </div>

  )
}

export default Photo