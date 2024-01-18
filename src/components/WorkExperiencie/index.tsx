import { JobsCards } from './components/jobCards'

export function WorkExperience(): JSX.Element{
  const jobs = [
    {
      id: 1,
      title: 'ZRP',
      key: 'zrp',
    },
    {
      id: 2,
      title: 'Twoweb Digital',
      key: 'twoweb',
    },
    {
      id: 3,
      title: 'Online Sistemas',
      key: 'online',
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