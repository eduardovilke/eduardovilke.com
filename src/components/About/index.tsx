import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export function About() {
  return (
    <section className="flex flex-col justify-between h-80vh">
      <div className="description">

        <h1 className="text-6xl font-extrabold bg-clip-text bg-gradient-to-r from-red via-blue to-blue text-transparent" >
        Eduardo Vilke
        </h1>
        <h2 className="text-3xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-red via-blue to-blue text-transparent">Desenvolvedor Full Stack na Twik</h2>
        <Image 
          src="/eduardo-face.png" 
          alt="Foto arredondada de perfil mostrando o Eduardo, ao fundo um céu azulado" 
          width={150}
          height={150}
        />
        <p className="text-2xl text-gray-light mt-6 leading-10">
          Fascinado pelo ecossistema JavaScript, atuo desenvolvendo software na
          <a 
            href="https://www.twik.com.br/"
            target="_blank"
            className="text-white underline underline-offset-1" 
            rel="noreferrer"
          >
            Twik
          </a> 
          com as tecnologias Typescript, React, React Native, Redux e NodeJS.
        </p>
      </div>
      <footer className="flex justify-start text-gray-light">
        <a href="https://www.linkedin.com/in/eduardo-vilke/" className="flex items-center text-lg">
          <FaLinkedin />
          <p className="pl-2">Linkedin</p>
        </a>
        <a href="https://github.com/eduardovilke" className="flex items-center text-lg px-16"> 
          <FaGithub />
          <p className="pl-2">Github</p>
        </a>
        <a href="https://www.instagram.com/eduardo.vilke/" className="flex items-center text-lg"> 
          <FaInstagram />
          <p className="pl-2">Instagram</p>
        </a>
      </footer>
    </section>
  )
}