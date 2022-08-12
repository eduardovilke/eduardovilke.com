import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextData {
  theme: string;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => { 
  const [theme, setTheme] = useState<string>('dark');

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');

    if(!currentTheme){
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    }else{
      setTheme(currentTheme)
      handleThemeInHtml()
    }
  }, [theme])

  const toggle = () => {
    const nextTheme = (theme === 'dark') ? 'light' : 'dark'
    localStorage.setItem('theme', nextTheme)
    setTheme(nextTheme)
  }

  const handleThemeInHtml = (): void => {
    const d = document.documentElement;
    if(d.classList.length > 0){
      d.setAttribute("class", "");
    }
    d.classList.add(theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }} >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextData => useContext(ThemeContext)