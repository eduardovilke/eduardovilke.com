import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export function About(): JSX.Element {
  const t = useTranslations()

  return (
    <section className="flex flex-col justify-between">
      <div className="description">
        <h1 className="md:text-6xl text-4xl font-extrabold bg-clip-text bg-gradient-to-r from-red via-blue to-blue text-transparent" >
        Eduardo Vilke
        </h1>
        <h2 className="md:text-4xl text-3xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-red via-blue to-blue text-transparent">{t('subTitle')}</h2>
        <Image 
          src="/eduardo-face.png" 
          alt="Foto arredondada de perfil mostrando o Eduardo, ao fundo um céu azulado" 
          width="180"
          height="180"
        />
        <p className="text-2xl dark:text-gray-light text-gray-300 my-6 leading-10 ease-in duration-200">
          {
            t.rich('about', {
              company: (chunk) => 
                <a 
                  href="https://www.zrp.com.br/" 
                  target="_blank" 
                  className="dark:text-gray-light text-gray-300 underline underline-offset-1 text-zenith ease-in duration-200" 
                  rel="noreferrer"
                >
                  {chunk}
                </a>
            })
          }
        </p>
      </div>
      <footer className="flex justify-between dark:text-gray-light text-gray-300 ease-in duration-200">
        <a href="https://www.linkedin.com/in/eduardo-vilke/" className="flex items-center text-lg">
          <FaLinkedin />
          <p className="pl-2">Linkedin</p>
        </a>
        <a href="https://github.com/eduardovilke" className="flex items-center text-lg"> 
          <FaGithub />
          <p className="pl-2">Github</p>
        </a>
        <a href="mailto:eduardo.svilke@gmail.com" className="flex items-center text-lg"> 
          <MdEmail />
          <p className="pl-2">E-mail</p>
        </a>
      </footer>
    </section>
  )
}