import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export function About() {
  return (
    <>
      <h1 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500" >
      Eduardo Vilke
      </h1>
      <h2 className="text-3xl">Desenvolvedor Full Stack na Twik</h2>
      <Image 
        src="/eduardo-face.png" 
        alt="Foto arredondada de perfil mostrando o Eduardo, ao fundo um céu azulado" 
        width={150}
        height={150}
      />
      <p>
        Fascinado pelo ecossistema JavaScript, atuo desenvolvendo software na Twik com as tecnologias Typescript, React, React Native, Redux e NodeJS.
      </p>
      <footer className="flex justify-between">
        <a href="https://www.linkedin.com/in/eduardo-vilke/" className="flex items-center">
          <FaLinkedin />
          Linkedin 
        </a>
        <a href="https://github.com/eduardovilke" className="flex items-center"> 
          <FaGithub />
          Github
        </a>
        <a href="https://www.instagram.com/eduardo.vilke/" className="flex items-center"> 
          <FaInstagram />
          Instagram 
        </a>
      </footer>
    </>
  )
}