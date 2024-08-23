import Link from "next/link"

import {FaGithub, FaLinkedinIn, FaYoutube, FaDiscord } from "react-icons/fa"

const socials = [
  {icon: <FaGithub />, path: "https://github.com/ElGaboCraft"},
  {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/axel-gabriel-zu%C3%B1iga-lascano-0693b8289/"},
  {icon: <FaYoutube />, path: "https://www.youtube.com/@rpgsempay7251"},
  {icon: <FaDiscord />, path: "https://discord.gg/bGQpAtybce"},
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link 
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Socials