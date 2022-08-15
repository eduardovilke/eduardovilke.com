import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { useTheme } from '@hooks/useTheme';

export const Navbar = (): JSX.Element => {

  const { theme, toggle } = useTheme()

  const toggleTheme = (): void => toggle();

  return (
    <div className='flex justify-end'>
      <button
        className='flex items-center justify-center mb-4 border border-transparent text-base font-medium rounded-xl dark:text-gray-light text-gray-300 bg-white dark:bg-gray hover:bg-white dark:hover:bg-gray-200 py-2 text-lg px-2'
        onClick={toggleTheme}
      >
        {theme === 'dark' ? <BsMoonFill /> : <BsSunFill />}
      </button>
    </div>
  )
}