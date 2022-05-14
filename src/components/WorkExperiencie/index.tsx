import { JobsCards } from "./components/jobCards";

export function WorkExperience(){
  const jobs = [
    {
      id: 1,
      title: 'ZRP',
      description: 'Desenvolvimento de soluções utilizando NodeJS, Serverless, AWS Lambda, VueJS, React, Ruby on Rails.'
    },
    {
      id: 2,
      title: 'Twoweb Digital',
      description: 'Desenvolvimento de layouts de e-commerce, integrações via API’s, desenvolvimento de websites e aplicativos mobile. Utilizei as tecnologias: Ruby On Rails, Sass, React, Redux, React Native, NodeJS, AdonisJS e Docker.'
    },
    {
      id: 3,
      title: 'Online Sistemas',
      description: 'Suporte de sistemas ERP e desenvolvimento do sistema em nuvem, utilizando tecnologias como HTML, CSS, Javascript, SQL e PHP.'
    }
  ]
  return(
    <section className="flex flex-col justify-between">
      <JobsCards 
        jobs={jobs}
      />
    </section>
  )
}