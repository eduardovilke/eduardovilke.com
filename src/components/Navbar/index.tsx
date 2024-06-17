import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { useTheme } from '@hooks/useTheme'
import { useRouter } from 'next/router'

export const Navbar = (): JSX.Element => {

  const { theme, toggle } = useTheme()

  const toggleTheme = (): void => toggle()

  const router = useRouter()
  const toggleLang = () => router.push({}, undefined, { locale: router.locale === 'pt-BR' ? 'en-US' : 'pt-BR'})

  return (
    <div className='flex justify-end mb-4'>
      <button
        className='flex items-center justify-center mr-2 border border-transparent font-medium rounded-xl dark:text-gray-light text-gray-300 bg-white dark:bg-gray hover:bg-white dark:hover:bg-gray-200 py-2 px-4 ease-in duration-100'
        onClick={toggleLang}
      >
        {router.locale === 'en-US' ? 'PT-BR' : 'EN-US'}
      </button>
      <button
        className='flex items-center justify-center border border-transparent font-medium rounded-xl dark:text-gray-light text-gray-300 bg-white dark:bg-gray hover:bg-white dark:hover:bg-gray-200 py-2 text-lg px-4 ease-in duration-200'
        onClick={toggleTheme}
      >
        {theme === 'dark' ? <BsSunFill /> : <BsMoonFill />}
      </button>
    </div>
  )
}