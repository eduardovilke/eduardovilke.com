import { Card } from "./components/card";

export function WorkExperience(){
  const jobs = [
    {
      title: 'Twik',
      description: 'Desenvolvimento de soluções utilizando TypeScript, dentre elas: Aplicativo com React Native, PWA com React e API com NodeJS. '
    },
    {
      title: 'Twoweb Digital',
      description: 'Desenvolvimento de layouts de e-commerce, integrações via API’s, desenvolvimento de websites e aplicativos mobile. Utilizei as tecnologias: Ruby On Rails, Sass, React, Redux, React Native, NodeJS, AdonisJS e Docker.'
    },
    {
      title: 'Online Sistemas',
      description: 'Suporte de sistemas ERP e desenvolvimento do sistema em nuvem, utilizando tecnologias como HTML, CSS, Javascript, SQL e PHP.'
    }
  ]
  return(
    <div className="flex flex-col">
      {jobs.map(job => (
        <Card 
          key={job.title} 
          title={job.title} 
          description={job.description}
        />
      ))}
    </div>
  )
}