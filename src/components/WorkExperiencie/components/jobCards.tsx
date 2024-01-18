import { useTranslations } from 'next-intl'

interface Card {
  id: number;
  title: string;
  key: string;
}

interface JobsCardsProps {
  jobs: Card[]
}

export function JobsCards ({ jobs }: JobsCardsProps): JSX.Element {
  const t = useTranslations()
  
  return (
    <>
      {jobs.map((job) => (
        <div key={job.title} className={(job.id % 2 == 0) ? 'card my-8' : 'card'}>
          <div className="flex flex-col bg-white dark:bg-gray rounded-xl p-8 shadow-md dark:shadow-transparent ease-in duration-200">
            <h4 className="font-bold bg-clip-text bg-gradient-to-r from-red via-blue to-blue text-transparent ease-in duration-200 uppercase">{t('workExperience')}</h4>
            <h3 className="font-bold dark:text-white text-gray-300 py-4 text-3xl ease-in duration-200">
              {job.title}
            </h3>
            <p className="dark:text-gray-light text-gray-300 ease-in duration-200">
              {t(`Jobs.${job.key}.description`)}
            </p>
          </div>
        </div>
      ))}
    </>
  )
}