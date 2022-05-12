interface Card {
  id: number;
  title: string;
  description: string;
}

interface JobsCardsProps {
  jobs: Card[]
}

export function JobsCards ({ jobs }: JobsCardsProps): JSX.Element {
  return (
    <>
      {jobs.map((job) => (
        <div key={job.title} className={(job.id % 2 == 0) ? `card my-8` : `card`}>
          <div className="flex flex-col bg-gray rounded-xl p-8">
            <h4 className="font-bold bg-clip-text bg-gradient-to-r from-red via-blue to-blue text-transparent">EXPERIÊNCIA PROFISSIONAL</h4>
            <h3 className="font-bold text-white py-4 text-3xl	">
              {job.title}
            </h3>
            <p className="text-gray-light">
              {job.description}  
            </p>
          </div>
        </div>
      ))}
    </>
  )
}